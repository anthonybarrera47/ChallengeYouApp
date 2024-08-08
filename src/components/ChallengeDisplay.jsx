import React, { useState } from 'react';
import ChallengeCard from './ChallengeCard';

const ChallengeDisplay = ({ challenges, players, setChallengeResults, challengeResults }) => {
    const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);

    const currentChallenge = challenges[currentChallengeIndex % challenges.length];
    const currentPlayer = players[currentChallengeIndex % players.length];
    const nextPlayer = players[(currentChallengeIndex + 1) % players.length];

    const handleResult = (result) => {
        console.log(result)
        const newResults = [
            ...challengeResults,
            {
                challenge: currentChallenge.Text,
                category: currentChallenge.Category, // Agregar categoría
                penalty: currentChallenge.Penalty, // Agregar penalidad
                color: currentChallenge.Color,
                result,
                player: currentPlayer.name,
                opponent: nextPlayer.name,
            },
        ];
        setChallengeResults(newResults);
        setCurrentChallengeIndex(currentChallengeIndex + 1);
    };

    if (!currentChallenge) {
        return <div>All challenges completed.</div>;
    }

    return (
        <div>
            <ChallengeCard
                category={currentChallenge.Category}
                challenge={currentChallenge.Text}
                penalty={currentChallenge.Penalty}
                color={currentChallenge.Color}
                challenger={currentPlayer.name}
                challenged={nextPlayer.name}
            />
            <div>
                <button onClick={() => handleResult(true)}>Completado</button>
                <button onClick={() => handleResult(false)}>No Completado</button>
            </div>
        </div>
    );
};

export default ChallengeDisplay;
