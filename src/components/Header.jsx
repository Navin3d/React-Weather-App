import React from "react";

const Header = () => {
    return (
        <header className="header">
            <h1>Weather App</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/service">Service</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </header>
    )
}

export default Header;
