/* AboutHelp is a page that explains to users how to use the site, what to do if they forget
their password, and a little bit about the algorithm used to generate the report. */

import { React} from 'react';

// JSX Code to Create the About Help page with an unordered list to answer some basic FAQs
function AboutHelp() {
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
                        <strong>Question 1:</strong> Forgot password?
                        <p>Please contact our tech support to regain access to your account.</p>
                    </li>
                    <li>
                        <strong>Question 2:</strong> How does the report work?
                        <p>The generated report, which reflects the degree of portfolion diversification is based off a simple algorithm
                            that uses stock sectors to compute diversity.</p>
                    </li>
                    <li>
                        <strong>Question 3:</strong> How do I input a stock?
                        <p>A user can input a stock by simply typing it into the textbox or using our newly implemented feature which 
                            allows a user to select a ticker by using the dropdown menu.</p>
                    </li>
                    <li>
                        <strong>Question 4:</strong> Need more help?
                        <p>This FAQ section will be continually updated, so please check back to potential updates!</p>
                    </li>
                </ul>
        </article>  
        </p>
        </>
    );
}

export default AboutHelp;