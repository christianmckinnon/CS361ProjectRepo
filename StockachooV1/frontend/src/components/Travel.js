import React from 'react';
import { useState} from 'react';


// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdDeleteForever, MdEdit } from 'react-icons/md';


function Travel({ travel, onEdit, onDelete }) {
    return (
        <tr>
            <td>{travel.country}</td>
            <td>{travel.city}</td>
            <td>{travel.days}</td>
            {/* Slice the date to a max text size of 10*/}
            <td>{useState(travel.date.slice(0,10))}</td>

            {/* Update these icons to something that matches your style. */}
            <td><MdDeleteForever className = "iconSize" onClick={() => onDelete(travel._id)} /></td>
            <td><MdEdit className = "iconSize" onClick={() => onEdit(travel)} /></td>
        </tr>
    );
}

export default Travel;