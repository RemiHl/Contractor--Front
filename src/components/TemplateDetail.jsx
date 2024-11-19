import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TemplateDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [template, setTemplate] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTemplate = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/template/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                    },
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch template");
                }
                const data = await response.json();
                setTemplate(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchTemplate();
    }, [id]);

    if (error) {
        return <p className="error">{error}</p>;
    }

    if (!template) {
        return <p>Loading...</p>;
    }

    return (
        <div className="dashboard">
            <div className="side-menu">
                <ul>
                    <li onClick={() => navigate("/dashboard")}>Templates</li>
                    <li onClick={() => alert("Signer un document (bientôt dispo)")}>Sign Document</li>
                    <li onClick={() => navigate("/dashboard/saved-templates")}>Saved Templates</li>
                </ul>
            </div>

            <div className="dashboard-content">
                <div
                    className="template-detail"
                    dangerouslySetInnerHTML={{ __html: template.content }}
                ></div>
            </div>
        </div>
    );
};

export default TemplateDetail;