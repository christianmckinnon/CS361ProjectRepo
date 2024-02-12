import { React} from 'react';




function TravelsPage({ setTravel }) {


    // A simple HTML Page with an unordered list to answer some basic questions
    return (
        <>
        <p className = "outer-container2">
        <h2 >Help Page FAQs</h2>
        <article className = "newArticles">

            <p className= "faq">This is a page that addresses any potential confusion a user might have by creating a list of  
                frequently asked questions.
            </p>
            <ul className = "faq2">
                    <li>
                        <strong>Question 1:</strong> How do I input a stock?
                        <p>A user can input a stock by simply typing it into the textbox or selecting it from the dropdown menu.</p>
                    </li>
                    <li>
                        <strong>Question 2:</strong> How does the report work?
                        <p>The generated report, which reflects the degree of portfolion diversification is based off a a simple algorithm.</p>
                    </li>
                    <li>
                        <strong>Question 3:</strong> How can I get more help?
                        <p>This FAQ section will be continually updated, so please check back to potential updates!</p>
                    </li>
                </ul>


        </article>  
        </p>
        </>
    );
}

export default TravelsPage;