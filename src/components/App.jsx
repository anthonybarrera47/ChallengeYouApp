import React, { useState, useEffect } from 'react';
import PlayerSetup from './PlayerSetup';
import ChallengeDisplay from './ChallengeDisplay';
import ChallengeResults from './ChallengeResults';
import '../App.css';  // Asegúrate de importar el archivo CSS
import '../ChallengeResults.css'; // Importa el CSS específico

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};


const App = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [gameEnded, setGameEnded] = useState(false);
    const [challenges, setChallenges] = useState([]);
    const [players, setPlayers] = useState([]);
    const [challengeResults, setChallengeResults] = useState([]);

    useEffect(() => {
        const loadChallenges = async () => {
            try {
                const response = await fetch('/cartas.json');
                const data = await response.json();
                setChallenges(shuffleArray(data));
            } catch (error) {
                console.error('Error loading challenges', error);
            }
        };

        if (gameStarted) {
            loadChallenges();
        }
    }, [gameStarted]);

    const startGame = () => {
        setGameStarted(true);
        setGameEnded(false);
        setPlayers([]);
        setChallengeResults([]);
    };

    const endGame = () => {
        setGameEnded(true);
    };

    const handleButtonClick = () => {
        if (gameEnded) {
            startGame();
        } else {
            endGame();
        }
    };

    return (
        <div className="container">
            {!gameStarted ? (
                <button onClick={startGame}>Iniciar Juego</button>
            ) : (
                <>
                    <div className="navbar">
                        <button onClick={handleButtonClick}>
                            {gameEnded ? 'Iniciar Juego' : 'Terminar Juego'}
                        </button>
                    </div>
                    <div>
                        {gameEnded ? (
                            <ChallengeResults results={challengeResults} players={players} />
                        ) : (
                            <>
                                {players.length === 0 ? (
                                    <PlayerSetup setPlayers={setPlayers} />
                                ) : (
                                    <ChallengeDisplay
                                        challenges={challenges}
                                        players={players}
                                        setChallengeResults={setChallengeResults}
                                        challengeResults={challengeResults}
                                    />
                                )}
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
