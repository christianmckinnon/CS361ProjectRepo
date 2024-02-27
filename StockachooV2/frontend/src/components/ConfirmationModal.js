// A page used to faciliatee our Confirmation pop-up and add HTML / Styles
import React from 'react';


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
