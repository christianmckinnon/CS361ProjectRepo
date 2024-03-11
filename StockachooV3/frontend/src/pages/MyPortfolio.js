// MyPortfolio.js represents "My Stock Picks" and has a form to input 3 Stock Tickers
// This page requests data from the microservice through handleConfirm (the Submit button)

// Here we require React for our state variables, ConfirmationModal for the confirmation pop-up, useNaviagte to route to other pages
import React, { useState } from 'react';
import ConfirmationModal from '../components/ConfirmationModal';
import { useNavigate } from 'react-router-dom';

import axios from 'axios'; // This is used for communicating with RabbitMQ from the backend folder

// A function to set values for each of the Stock Tickers a user inputs
function MyPortfolio() {
    const navigate = useNavigate(); 
    const [stock1, setStock1] = useState('');
    const [stock2, setStock2] = useState('');
    const [stock3, setStock3] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState(null);

    // Use this to intitiate the pop-up confirmation box when first hitting submit
    const handleSubmit = async () => {
        setIsModalOpen(true);
    };
    
    // handleConfirm actually sends the request to RabbitMQ once the user selects confirm and receives sector data on the Summary.js page
    const handleConfirm = async () => {
        // Perform submission logic here
        try {
            const stocks = [stock1, stock2, stock3];
            const response = await axios.post('http://localhost:3000/api/stocks', { stocks });  // Connect to the microservice here
            const data = response.data; // Assuming the response contains stock symbols and sectors
            console.log('Message sent to RabbitMQ backend:', data);
            // Navigate to Summary page and pass both sets of data
            navigate('/Summary', { state: { inputStocks: stocks, rabbitMQData: data } });
        } catch (errors) {
            console.error('Error sending message to RabbitMQ:', error);
            setError('Failed to send message to RabbitMQ', error); // Set error state if for some reason we fail to send to RabbitMQ
        }
        setIsModalOpen(false);
    };

    // Begin HTML writeup for input forms here
    return (
<div className="outer-container2">
    <h2>My Stock Picks</h2>
    <p className="instructions">
        Please enter 3 stocks from the S&P 500 into the text boxes below by ticker, (for example, the 
        Apple company would be AAPL) then click Submit to generate your diversification report
        <strong>(Only choose one stock once please!)</strong>.
    </p>
    <div className="input-group1">
        <p className="stock123">Stock 1:&nbsp;&nbsp;&nbsp;&nbsp; 
            <input 
                type="search"
                list="stock1list" 
                placeholder="Enter ticker for stock 1" 
                value={stock1} 
                onChange={(e) => setStock1(e.target.value)} 
            />
            <datalist id="stock1list">
                <option value="AAPL" />
                <option value="MSFT" />
                <option value="TSLA" />
            </datalist>
        </p>
    </div>
    <div className="input-group1">
        <p className="stock123">Stock 2:&nbsp;&nbsp;&nbsp;&nbsp;   
            <input 
                type="text" 
                list = "stock1list"
                placeholder="Enter ticker for stock 2" 
                value={stock2} 
                onChange={(e) => setStock2(e.target.value)} 
            />
        </p>
    </div>
    <div className="input-group1">
        <p className="stock123">Stock 3:&nbsp;&nbsp;&nbsp;&nbsp;   
            <input 
                type="text" 
                list ="stock1list"
                placeholder="Enter ticker for stock 3" 
                value={stock3} 
                onChange={(e) => setStock3(e.target.value)} 
            />
        </p>
    </div>
    <div>
        <button onClick={handleSubmit}>Submit</button>
    </div>
            {/* This implements our pop-up */}
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirm}
            />
        </div>
    );
}

export default MyPortfolio;
