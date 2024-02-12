// Import React
import React from 'react';
import { Link } from 'react-router-dom'; 

// JS Code to enable HTML
function HomePage() {
    return (
        <div class="outer-container">
            <div class="inner-container">
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
                <a href="/travel-journal" class="forgot-password">Forgot password?</a>
                </div>
                <div>
                <Link to="/topics-page">
                    <button>Login</button>
                </Link>  
                </div>
            </div>
        </div>
    );
}
export default HomePage;  {/* Should match the function above */}