import React from 'react';
import Travel from './Travel';
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function TravelList({ travels, onDelete, onEdit }) {
    return (
        <table id="travel">
            <caption>Add and Edit Travel Journal</caption>
            <thead>
                <tr>
                    <th>Country</th>
                    <th>City</th>
                    <th>Days</th>
                    <th>Date</th>
                    <th>Delete</th>
                    <th>Edit</th>

                    {/* Add the MdOutlineEdit icon to the button */}
                    {/*<td>
                        <button onClick={() => onEdit(travels)}>
                            <MdOutlineEdit /> Edit
                        </button>
                    </td>*/}

                    {/* Add the MdDeleteForever icon to the button 
                    <td>
                        <button onClick={() => onDelete(travels._id)}>
                        <MdDeleteForever /> Delete
                    </button>
            </td> */}
                </tr>
            </thead>
            <tbody>
                {travels.map((travel, i) => 
                    <Travel 
                        travel={travel} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default TravelList;
