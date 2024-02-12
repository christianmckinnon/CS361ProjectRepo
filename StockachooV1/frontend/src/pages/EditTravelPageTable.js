import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditTravelPageTable = ({ travelToEdit }) => {
 
    const [country, setCountry]   = useState(travelToEdit.country);
    const [city, setCity]         = useState(travelToEdit.city);
    const [days, setDays]         = useState(travelToEdit.days);
    const [date, setDate]         = useState(travelToEdit.date.slice(0,10)) // Slice the date
    
    const redirect = useNavigate();

    const editTravel = async () => {
        const response = await fetch(`/travels/${travelToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                country: country, 
                city: city, 
                days: days,
                date: date,
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Your request to edit the travel page has been successful.`);
        } else {
            const errMessage = await response.json();
            alert(`${response.status}: Your edit request has failed because ${errMessage.Error}.`);
        }
        redirect("/");
    }

    return (
        <>
        <h2 className='newHeaders'>Edit a Travel Event</h2>
        <article className = "newArticles">
            <p>This is a page where users can edit a travel event. If desired, it is possible to edit the country, the city, the number
                of days, or the date by clicking the “Save” button down below.</p>
                <fieldset>
            <label class = "petTable" for="petT"></label>
            <legend className="legend">Edit Event</legend>
            <table id = "petTable">
                <caption>Which travel event would you like to edit?</caption>
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
                <td><label for="county">(Country of Travel)</label>
                        <input
                            type="text"
                            placeholder="Name of the country"
                            value={country}
                            onChange={e => setCountry(e.target.value)} 
                            id="country" />
                    </td>

                    <td><label for="city">(Name of the city)</label>
                        <input
                            type="text"
                            value={city}
                            placeholder="Name of the city"
                            onChange={e => setCity(e.target.value)} 
                            id="city" />
                    </td>

                    <td><label for="days">(Number of Days)</label>
                        <input
                            type="number"
                            placeholder="Number of Days Traveled"
                            value={days}
                            onChange={e => setDays(e.target.value)} 
                            id="days" />
                    </td>

                    <td><label for="date">(Date of Travel)</label>
                        <input
                            type="date"
                            placeholder="Start Date of Travel"
                            size = "10"
                            value={date}
                            onChange={e => setDate(e.target.value)} 
                            id="date" />
                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={editTravel}
                            id="submit"
                        >Save</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </fieldset>
            </article>
        </>
    );
}
export default EditTravelPageTable;