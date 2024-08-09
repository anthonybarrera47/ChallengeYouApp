import React from 'react';
import '../ChallengeCard.css';
import devilFace from '../assets/devil.svg'; // Importamos el SVG

const ChallengeCard = ({ category, challenge, penalty, color, challenger, challenged }) => {
    return (
        <div className="challenge-card" style={{ borderColor: color }}>
            <div className="challenge-category" style={{ color: color }}>
                <h2>{category}</h2>
            </div>
            <div className="challenge-players">
                <p><strong>Retador:</strong> {challenger}</p>
                <p><strong>Retado:</strong> {challenged}</p>
            </div>
            <div className="challenge-text">
                <p>{challenge}</p>
            </div>
            <div className="challenge-penalty">
                <span>Penalidad: {penalty}</span>
            </div>
            <div className="icon-container">
                <img
                    src={devilFace}
                    alt="Devil Face"
                    className="devil-icon"
                    style={{
                        fill: color, // Aplicamos el color dinámico al SVG
                    }}
                />
            </div>
        </div>
    );
};

export default ChallengeCard;
