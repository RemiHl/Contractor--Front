import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Dashboard.css';
import SideMenu from './SideMenu';

const Dashboard = () => {
    const [view, setView] = useState('templates');
    const [templates, setTemplates] = useState([]);
    const [savedTemplates, setSavedTemplates] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (view === 'templates') {
            fetchTemplates();
        } else if (view === 'saved-templates') {
            fetchSavedTemplates();
        }
    }, [view]);

    const fetchTemplates = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/templates`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch templates');
            }
            const data = await response.json();
            setTemplates(data);
        } catch (err) {
            setError(err.message);
        }
    };

    const fetchSavedTemplates = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/saved-templates`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch saved templates');
            }
            const data = await response.json();
            setSavedTemplates(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="dashboard">
            <SideMenu />
            <div className="dashboard-content">
                <h2>Dashboard</h2>
                {view === 'templates' && (
                    <>
                        <h3>Templates List</h3>
                        {error && <p className="error">{error}</p>}
                        <ul>
                            {templates.map(template => (
                                <li key={template.id}>
                                    <h4
                                        onClick={() => navigate(`/dashboard/template/${template.id}`)}
                                        className="template-link"
                                    >
                                        Facture
                                    </h4>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                {view === 'sign-document' && (
                    <div>
                        <h3>Signer un document</h3>
                        <p>Ici, vous pouvez signer vos documents.</p>
                    </div>
                )}
                {view === 'saved-templates' && (
                    <>
                        <h3>Liste des documents sauvegardés</h3>
                        {error && <p className="error">{error}</p>}
                        <ul>
                            {savedTemplates.map(savedTemplate => (
                                <li key={savedTemplate.id}>{savedTemplate.name}
                                    <h4
                                        onClick={() => navigate(`/dashboard/saved-template/${savedTemplate.id}`)}
                                        className="template-link"
                                    >
                                        {savedTemplate.name}
                                    </h4>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default Dashboard;