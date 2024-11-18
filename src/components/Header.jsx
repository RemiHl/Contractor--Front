import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/Header.css';

function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        navigate('/login');
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Contractor</Link>
            </div>
            <nav className="nav">
                {localStorage.getItem('jwt') ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;