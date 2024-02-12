import React, { useState } from 'react';
import ConfirmationModal from '../components/ConfirmationModal';

function TopicsPage() {
    const [stock1, setStock1] = useState('');
    const [stock2, setStock2] = useState('');
    const [stock3, setStock3] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = () => {
        // Show confirmation modal
        setIsModalOpen(true);
    };

    const handleConfirm = () => {
        // Perform submission logic here
        console.log('Form submitted successfully!');
        setIsModalOpen(false);
    };

    return (
<div className="outer-container2">
    <h2>My Stock Picks</h2>
    <p className="instructions">
        Please enter 3 stocks into the text boxes below by ticker, (for example, the 
        Apple company would be AAPL) then click Submit to generate your diversification report.
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


            {/* Confirmation Modal */}
            <ConfirmationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirm}
            />
        </div>
    );
}

export default TopicsPage;
