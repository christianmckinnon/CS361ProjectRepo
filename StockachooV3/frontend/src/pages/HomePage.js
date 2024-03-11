// Import React
import React from 'react';
import { Link } from 'react-router-dom'; 

// JS Code to enable HTML
function HomePage() {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <h2>Login to your account</h2>
                <div>
                    <label for="username">Username:</label>
                    <input type="username" id="username" placeholder="Type your username" />
                </div>
                <div>
                    <label for="password">Password:</label>
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