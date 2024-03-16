/* 
Code adapted from CS 290 Web Development Portfolio Project by Professor Van Londen
Citation: OSU Canvas: Assignment 8 ~ Portfolio Frontend (Full Stack MERN)
https://canvas.oregonstate.edu/courses/1933705/assignments/9345092
*/

// A page used to faciliate our Confirmation pop-up and add HTML / Styles
import React from 'react';

// Function for Confirmation Button
function ConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;
  return (
    <div className="modal-container">
      <div className="modal-content">
        <p>Are you sure you want to submit?</p>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
