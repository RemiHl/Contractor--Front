import React from 'react';
import '../style/Footer.css';
import { initScrollReveal } from '../js/scrollReveal';
import { useEffect } from 'react';

function Footer() {
    useEffect(() => {
        initScrollReveal();
}, []);

    return (
        <footer className="footer reveal-on-scroll">
        <div className="footer-content">
            <div className="footer-logo">Contractor</div>

            <div className="footer-nav">
                <a href="#features">Features</a>
                <a href="#process">How It Works</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#pricing">Pricing</a>
            </div>

            <div className="footer-socials">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>

            <div className="footer-contact">
            <p>Contact us: support@contractor.com</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2024 Contractor. All rights reserved.</p>
        </div>
        </footer>
    );
}

export default Footer;