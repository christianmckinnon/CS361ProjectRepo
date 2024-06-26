/*
Stockachoo: Baorong Luo and Christian McKinnon, CS 361, 3/10/2024
An Independent Microservice Implementation that listens for a Submit request from the "My Stock Picks Form"
Citation: Stock Symbols and Sector data are fetched from sp500.csv from DataHub
Title: "S&P 500 Companies with Financial Information"
Link: https://datahub.io/core/s-and-p-500-companies#data
*/

/* 
Code adapted from CS 290 Web Development Portfolio Project by Professor Van Londen
Citation: OSU Canvas: Assignment 8 ~ Portfolio Frontend (Full Stack MERN)
https://canvas.oregonstate.edu/courses/1933705/assignments/9345092
*/


// Here we require express, amplib,fs, csv-parser, and cors
const express = require('express');
const amqp = require('amqplib');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors'); // Import the cors package to facilitate POST / GET

// Set the requirements for ampq, our request queue and the S&P 500 csv
const app = express();
const rabbitMQUrl = 'amqp://localhost';
const requestQueue = 'stock_info_requests';
const csvFP = 'sp500.csv';
const stockData = {};  // Global variable to store stock data

// For use in parsing JSON and cors
app.use(express.json());
app.use(cors());

async function startMicroservice() {
    try {
        const connection = await amqp.connect(rabbitMQUrl);
        const channel = await connection.createChannel();
        await channel.assertQueue(requestQueue, { durable: false });

        console.log('Microservice is now running. Listening for messages...');

        channel.consume(requestQueue, async (msg) => {
            const stockSymbol = msg.content.toString();
            console.log(`Received request for a certain stock: ${stockSymbol}`);

            try {const stockInfo = await fetchSectors(stockSymbol);
                console.log('Stock information retrieved:', stockInfo);
                stockData[stockSymbol] = stockInfo; // Store stock information in the global stockData object
                channel.ack(msg); // "Acknowledgement" of message processing
            } 
            catch (error) {
                console.error('Error fetching stock info:', error.message); 
                }
            });
        } 
        catch (error) { 
            console.error('Error connecting to RabbitMQ:', error.message);
    }
}

// An async function that gets the Sector data from the CSV
async function fetchSectors(stockSymbols) {
    const sectors = {};
    return new Promise((resolve, reject) => {
        fs.createReadStream(csvFP)
            .pipe(csv())
            .on('data', (row) => {
                if (stockSymbols === row.Symbol) {
                    sectors[row.Symbol] = row.Sector;
                }
            })
            .on('end', () => {
                resolve(sectors);})
            .on('error', (error) => {
                reject(error);
            });
    });
}

// Define endpoint to receive and send stock requests from and to frontend
app.post('/api/stocks', async (req, res) => {
    const { stocks } = req.body;
    try {const stockData = {};
        for (const stockSymbol of stocks) {
            const stockInfo = await fetchSectors(stockSymbol);
            stockData[stockSymbol] = stockInfo; 
        }

        console.log('Stock information retrieved:', stockData); // Status message showing RabbitMQ is sending / receiving data
        const connection = await amqp.connect(rabbitMQUrl); // Send stock requests to RabbitMQ
        const channel = await connection.createChannel();

        stocks.forEach(async (stockSymbol) => {
            await channel.sendToQueue(requestQueue, Buffer.from(stockSymbol));
        });

        console.log('Stock requests sent to RabbitMQ');
        
        res.status(200).json({ message: 'Stock requests sent successfully', stockData });
    } 
    catch (error) {
        console.error('Error sending stock requests to RabbitMQ:', error.message);

        res.status(500).json({ error: 'Failed to send stock requests' }); 
    }
});

startMicroservice();  // Start the microservice

// Start the HTTP server
const PORT = 3000; // Running on PORT 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
