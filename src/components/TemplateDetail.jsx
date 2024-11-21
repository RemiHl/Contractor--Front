import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/TemplateDetail.css";
import SideMenu from "./SideMenu";

const TemplateDetail = () => {
    const { id } = useParams();
    const [template, setTemplate] = useState(null);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [modifiedContent, setModifiedContent] = useState("");

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
                setModifiedContent(data.content);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchTemplate();
    }, [id]);

    const handleSave = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/saved-template`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
                body: JSON.stringify({
                    templateId: template.id,
                    content: modifiedContent,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to save the template");
            }

            setMessage("Template saved successfully!");
        } catch (err) {
            setError(err.message);
        }
    };

    if (error) {
        return <p className="error">{error}</p>;
    }

    if (!template) {
        return <p>Loading...</p>;
    }

    return (
        <div className="dashboard">
            <SideMenu />
            <div className="dashboard-content">
                <div
                    className="template-detail"
                    contentEditable
                    suppressContentEditableWarning
                    onInput={(e) => setModifiedContent(e.currentTarget.innerHTML)}
                    dangerouslySetInnerHTML={{ __html: modifiedContent }}
                ></div>
                <button onClick={handleSave}>Save Template</button>
                {message && <p className="success">{message}</p>}
            </div>
        </div>
    );
};

export default TemplateDetail;