import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideMenu = () => {
    const navigate = useNavigate();

    const handleClick = (view) => {
        if (view === 'templates') {
            navigate('/dashboard');
        } else if (view === 'sign-document') {
            alert('Sign document (Soon)');
        } else if (view === 'saved-templates') {
            navigate('/dashboard/saved-templates');
        }
    };

    return (
        <div className="side-menu">
            <ul>
                <li onClick={() => handleClick('templates')}>Templates</li>
                <li onClick={() => handleClick('sign-document')}>Sign Document</li>
                <li onClick={() => handleClick('saved-templates')}>Saved Templates</li>
            </ul>
        </div>
    );
};

export default SideMenu;