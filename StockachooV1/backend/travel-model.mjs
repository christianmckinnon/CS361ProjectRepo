// Models for the Travel Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'There was an error connecting to the travel database.' });
    } else  {
        console.log('Success: you are now connected to the travel database.');
    }
});

// SCHEMA: Define the collection's schema.
const travelSchema = mongoose.Schema({
	country:  { type: String, 
                required: true },
    city:     { type: String, 
                required: true },
	days:     { type: Number, 
                required: true,
                default: 0,
                min: [0, 'Travel should last at least 1 day']
                 },
	date:     { type: Date, 
                required: true}
});

// Compile the model from the schema 
// by defining the collection name "travel".
const travel = mongoose.model('Travel', travelSchema);


// CREATE model *****************************************
const createTravel = async (country, city, days, date) => {
    const travels = new travel({ 
        country: country, 
        city: city,
        days: days, 
        date: date 
    });
    return travels.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveTravel = async () => {
    const query = travel.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveTravelByID = async (_id) => {
    const query = travel.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteTravelById = async (_id) => {
    const result = await travel.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateTravel = async (_id, country, city, days, date) => {
    const result = await travel.replaceOne({_id: _id }, {
        country: country,
        city: city,
        days: days,
        date: date
    });
    return { 
        _id: _id, 
        country: country,
        city: city,
        days: days,
        date: date 
    }
}

// EXPORT the variables for use in the controller file.
export { createTravel, retrieveTravel, retrieveTravelByID, updateTravel, deleteTravelById }