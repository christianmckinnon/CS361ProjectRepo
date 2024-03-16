/* Stockachoo Portfolio Project for CS361
Christian McKinnon
3/16/2024
Professor Letaw

Code adapted from CS 290 Web Development Portfolio Project by Professor Van Londen
Citation: OSU Canvas: Assignment 8 ~ Portfolio Frontend (Full Stack MERN)
https://canvas.oregonstate.edu/courses/1933705/assignments/9345092
*/

// HomePage.js AKA the "Login Page" is the landing page of the Stockachoo Application

import React from 'react';
import { Link } from 'react-router-dom'; 

// JSX Code to Create the Login Form
function HomePage() {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <h2>Login to your account</h2>
                <div>
                    <label for="username" style={{ textAlign: 'left' }}>Username:</label>
                    <input type="username" id="username" placeholder="Type your username" />
                </div>
                <div>
                    <label for="password" style={{ textAlign: 'left' }}>Password:</label>
                    <input type="password" id="password" placeholder="Type your password" />
                </div>
                <div>
                <a href="/about-help" className="forgot-password">Forgot password?</a>
                </div>
                <div>
                <Link to="/my-portfolio">
                    <button>Login</button>
                </Link>  
                </div>
            </div>
        </div>
    );
}
export default HomePage; 