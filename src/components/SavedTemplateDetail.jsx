import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SideMenu from "./SideMenu";

const SavedTemplateDetail = () => {
    const { id } = useParams();
    const [savedTemplate, setSavedTemplate] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSavedTemplate = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/saved-template/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch saved template");
                }

                const data = await response.json();
                console.log("Données du template sauvegardé :", data);
                setSavedTemplate(data);
            } catch (err) {
                setError(err.message);
                console.error("Erreur dans fetchSavedTemplate :", err.message);
            }
        };

        fetchSavedTemplate();
    }, [id]);

    if (error) {
        return <p className="error">{error}</p>;
    }

    if (!savedTemplate) {
        return <p>Chargement en cours...</p>;
    }

    return (
        <div>
            <h2>{savedTemplate.name}</h2>
            <div
                dangerouslySetInnerHTML={{ __html: savedTemplate.content }}
                className="saved-template-content"
            />
            <p>Créé le : {savedTemplate.createdAt}</p>
        </div>
    );
};

export default SavedTemplateDetail;