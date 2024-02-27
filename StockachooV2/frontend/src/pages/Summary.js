// This is our Summary.js and Portfolio Diversification Report page
// We import React, Link, and useLocation to facilitate communication from the microservice here
import { React} from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Summary({ setTravel }) {
    const location = useLocation();
    const { inputStocks, rabbitMQData } = location.state || {};

    // The following are regex and filtering to parse the JSON data
    const stockDataString = JSON.stringify(rabbitMQData.stockData);
    const filteredData = stockDataString.replace(/[{},]/g, (match) => {
        if (match === ',') {
            return '\n';
        } else {
            return '';
        }
    });

    // A final filter to remove duplicate stock tickers
    const filteredFinal = filteredData
        .split('\n')
        .map(line => line.replace(/.*?:/, ''))
        .join('\n');

    if (!inputStocks || !rabbitMQData) {
        return <div>Error: No data found.</div>;
    }

    const handleGoBack = () => {
        // Handle go back to return to the "My Portfolio Page"
    };

    // This function serves to implement our simple algorithm that determines diversification levels
    function calculateDiversification(filteredFinal) {
        // Define the sectors
        const sectors = ["Industrials", "Health Care", "Information Technology",
            "Communication Services", "Consumer Discretionary",
            "Utilities", "Financials", "Materials", "Energy", "Real Estate"];
    
        let sectorCounts = {};
        let diversificationLevel = '';
    
        // Convert filteredFinal into a JSON string
        const jsonString = JSON.stringify(filteredFinal);

        // Parse the JSON string into a JavaScript object
        const filteredData = JSON.parse(jsonString);
        
        // Count occurrences of each sector
        for (const ticker in filteredData) {
            const sector = filteredData[ticker];
            if (sectors.includes(sector)) {
                sectorCounts[sector] = (sectorCounts[sector] || 0) + 1;
            }
        }
    
        // Determine the number of unique sectors
        const uniqueSectors = Object.keys(sectorCounts).length;
    
        if (uniqueSectors === 1) {
            diversificationLevel = 'not diversified';
        } else if (uniqueSectors === 2) {
            diversificationLevel = 'perfectly diversified';
        } else {
            diversificationLevel = 'somewhat diversified';
        }
    
        return diversificationLevel;
    }

// Assign diversification level
const diversificationLevel = calculateDiversification(filteredFinal);

    // Generate the Diversification report
    return (
        <div className="outer-container2">
            <h2>Your Diversification Report</h2>
            <article className="newArticles">
                <p className="faq">
                    The below is a summary of how well diversified your stock selection is:
                </p>
                <p style={{textAlign: 'left'}}>
                    You selected the following stocks and sectors: 
                    <p style={{textAlign: 'left'}}>{filteredFinal}</p>

                    It has been found that your selections are {diversificationLevel}.
                    Congratulations and please feel free to continue selecting other combinations of stocks to 
                    determine your level of diversification.
                </p>
            
            </article>  
            {/* Back button to return to the TopicsPage */}
            
            <Link to="/topics-page">
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <button onClick={handleGoBack}>Go Back</button>
                </div>
            </Link>
           
        </div>
    );
}

export default Summary;