// Controllers for the Travel Collection

import 'dotenv/config';
import express from 'express';
import * as travels from './travel-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/travels', (req,res) => { 
    travels.createTravel(
        req.body.country, 
        req.body.city,
        req.body.days, 
        req.body.date
        )
        .then(travel => {
            console.log(`"${travel.country}" has been newly added to the collection.`);
            res.status(201).json(travel);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Unable to add new country to the collection.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/travels', (req, res) => {
    travels.retrieveTravel()
        .then(travels => { 
            if (travels !== null) {
                console.log(`All travel destinations from the collection have been retreived.`);
                res.json(travels);
            } else {
                res.status(404).json({ Error: 'Not Found: Unable to find the selected travel destinations.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Bad Request: Unable to retrieve travel data. Please try again.' });
        });
});


// RETRIEVE by ID controller
app.get('/travels/:_id', (req, res) => {
    travels.retrieveTravelByID(req.params._id)
    .then(travel => { 
        if (travel !== null) {
            console.log(`"${travel.country}" has been retrieved and was identified by its ID.`);
            res.json(travel);
        } else {
            res.status(404).json({ Error: 'Not Found: Unable to find selected travel destinations by ID' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad Request: Unable to retrieve travel data by ID. Please try again.' });
    });

});


// UPDATE controller ************************************
app.put('/travels/:_id', (req, res) => {
    travels.updateTravel(
        req.params._id, 
        req.body.country, 
        req.body.city,
        req.body.days, 
        req.body.date
    )
    .then(travel => {
        console.log(`"${travels.title}" has been updated.`);
        res.json(travel);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Bad Request: Unable to update travel data.' });
    });
});


// DELETE Controller ******************************
app.delete('/travels/:_id', (req, res) => {
    travels.deleteTravelById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} the selected travel data has been deleted.`);
                res.status(200).send({ Success: 'The selected travel data has been successfully deleted.' });
            } else {
                res.status(404).json({ Error: 'Not Found: Unable to delete the selected travel data.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Bad Request: Delete request failed. Please try again.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});