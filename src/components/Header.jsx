import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css'

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Contractor</Link>
            </div>
            <nav className="nav">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </nav>
        </header>
    );
}

export default Header;