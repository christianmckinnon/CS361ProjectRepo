import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddTravelPageTable = () => {

    const [country, setCountry]     = useState('');
    const [city, setCity]           = useState('');
    const [days, setDays]           = useState('');
    const [date, setDate]           = useState('');

    const redirect = useNavigate();

    const addTravel = async () => {
        const formattedDate = date.slice(0, 10);
        const newTravel = { country, city, days, date: formattedDate};
        const response = await fetch('/travels', {
            method: 'post',
            body: JSON.stringify(newTravel),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Success! A travel event has been created.`);
        } else {
            alert(`Error! The travel event has not been created due to a ${response.status} error`);
        }
        redirect("/");
    };

    useEffect(() => {
        {/* Slice the date here*/}
        if (date) {
        const formattedDate = date.slice(0, 10);
        console.log("Formatted date:", formattedDate);
        setDate(formattedDate)}
    }, [date]);


    return (
        <>
        <article>
            <h2>Add a Travel Event</h2>
            <p>This is a page that allows a user to add a travel event.</p>
            
            <table id="movies">
                <caption>Which travel event are you adding?</caption>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>City</th>
                        <th>Days</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="country">Travel Country</label>
                        <input
                            type="text"
                            placeholder="Name of the country."
                            value={country}
                            onChange={e => setCountry(e.target.value)} 
                            id="country" />
                    </td>

                    <td><label for="city">Name of the city</label>
                        <input
                            type="text"
                            value={city}
                            placeholder="Name of the city"
                            onChange={e => setCity(e.target.value)} 
                            id="city" />
                    </td>

                    <td><label for="days">Number of Days</label>
                        <input
                            type="number"
                            placeholder="Number of Days Traveled"
                            value={days}
                            onChange={e => setDays(e.target.value)} 
                            id="days" />
                    </td>

                    <td><label for="date">Date of Travel</label>
                        <input
                            type="date"
                            placeholder="Start Date of Travel"
                            size = "10"
                            value={useState(date.slice(0,10))}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td>
                    <label for="submit">Commit</label>
                        <button
                            type="submit"
                            onClick={addTravel}
                            id="submit"
                        >
                            {/* Add the Add React Icon here */}
                            <IoMdAddCircleOutline /> Add
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddTravelPageTable;