import React, { useEffect, useRef } from 'react';
import '../style/HeroSection.css';
import Lottie from 'lottie-react';
import animationData from '../assets/animation2.json';
import animationData2 from '../assets/animation3.json';
import animationData3 from '../assets/Animation4.json'

function HeroSection() {
    const lottieRef = useRef();
    const lottieRef2 = useRef();
    const lottieRef3 = useRef();

    useEffect(() => {
        if (lottieRef.current && lottieRef2.current && lottieRef3.current) {
            lottieRef.current.setSpeed(0.7);
            lottieRef2.current.setSpeed(0.6);
            lottieRef3.current.setSpeed(1);
        }
    }, []);

return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Generate Professional Contracts in Minutes</h1>
                    <p>Simplify your legal paperwork with customizable templates and secure e-signatures.</p>
                    <div className="cta">
                        <button className="cta-btn">Sign Up for Free</button>
                    </div>
                </div>
                <div className="hero-animation">
                    <Lottie
                        lottieRef={lottieRef}
                        animationData={animationData}
                        loop={true}
                    />
                </div>
                <div className="hero-description">
                    <h2>Managing contracts and legal documents doesn’t have to be complicated.</h2>
                    <p>With Contractor, freelancers and small businesses can create, customize, and securely store professional contracts in minutes.  
                        Access a library of legal templates tailored to your needs, add personalized details, and sign documents digitally – all from one platform. 
                        Save time, protect your business, and focus on what you do best, while we handle the paperwork. 
                        Whether you’re drafting an NDA, a service agreement, or a freelance contract, Contractor makes the process fast, secure, and effortless.
                    </p>
                </div>
                <div className="hero-arrow-animation reveal-on-scroll">
                    <Lottie
                        lottieRef={lottieRef2}
                        animationData={animationData2}
                        loop={true}
                    />
                </div>
                <div className="hero-use reveal-on-scroll">
                    <h3>How it works</h3>
                    <div className="steps">
                        <div className="step reveal-on-scroll">
                            <h4>📄 Choose a Contract Template</h4>
                            <p>Browse our library of professional contract templates and pick one that fits your needs.</p>
                        </div>

                        <div className="step reveal-on-scroll">
                            <h4>✏️ Customize the Details</h4>
                            <p>Fill in the required fields, personalize the terms, and add specific details for your contract.</p>
                        </div>

                        <div className="step reveal-on-scroll">
                            <h4>🔒 Sign & Save Securely</h4>
                            <p>Add a secure e-signature and store the contract in your private dashboard, accessible anytime.</p>
                        </div>
                    </div>
                </div>
                <div className="hero-animation-2 reveal-on-scroll">
                    <Lottie
                        lottieRef={lottieRef3}
                        animationData={animationData3}
                        loop={true}
                    />
                </div>
                <div className="hero-finish reveal-on-scroll">
                    <p>With Contractor, managing contracts has never been easier. 
                        Whether you're a freelancer or a small business, our platform provides a secure, streamlined solution to customize, sign, and store all your legal documents in one place. 
                        Join us today and take control of your contracts with confidence. Simplify your paperwork and focus on what matters most : growing your business.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;