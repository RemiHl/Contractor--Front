import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SideMenu from "./SideMenu";
import '../style/SavedTemplates2.css';

const SavedTemplates = () => {
    const [savedTemplates, setSavedTemplates] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSavedTemplates = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/saved-templates`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch saved templates");
                }

                const data = await response.json();
                setSavedTemplates(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchSavedTemplates();
    }, []);

    if (error) {
        return <p className="error">{error}</p>;
    }

    if (!savedTemplates.length) {
        return <p>No saved documents for now.</p>;
    }

    return (
        <div className="dashboard">
            <SideMenu />
            <div className="dashboard-content">
                <h2>Saved documents</h2>
                <ul>
                    {savedTemplates.map((template) => (
                        <li key={template.id}>
                            <h4
                                onClick={() => navigate(`/dashboard/saved-template/${template.id}`)}
                                className="template-link"
                            >
                                {template.name}
                                <br />
                                {template.createdAt}
                            </h4>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SavedTemplates;