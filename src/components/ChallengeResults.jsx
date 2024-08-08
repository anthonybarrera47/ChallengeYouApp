import React, { useState } from 'react';

const ChallengeResults = ({ results, players }) => {
    const [selectedPlayers, setSelectedPlayers] = useState({});
    const [showAllDetails, setShowAllDetails] = useState(false);

    const handleShowDetails = (player) => {
        setSelectedPlayers((prevSelected) => ({
            ...prevSelected,
            [player]: !prevSelected[player],
        }));
    };

    const handleShowAllDetails = () => {
        setShowAllDetails(!showAllDetails);
    };

    const playerResults = players.map((player) => {
        const completed = results.filter((r) => r.player === player.name && r.result).length;
        const notCompleted = results.filter((r) => r.player === player.name && !r.result).length;

        return (
            <div key={player.name} className="player-card">
                <div className="player-result">
                    <span>{player.name} - Completados: {completed}, No Completados: {notCompleted}</span>
                    <button onClick={() => handleShowDetails(player.name)}>Mostrar Detalles</button>
                </div>
                {selectedPlayers[player.name] && (
                    <div className="details">
                        <h4>Detalles para {player.name}</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Retado</th>
                                    <th>Categoría</th>
                                    <th>Descripción</th>
                                    <th>Penalidad</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.filter((r) => r.player === player.name).map((r, index) => (
                                    <tr key={index}>
                                        <td>{r.opponent}</td>
                                        <td>{r.category}</td>
                                        <td>{r.challenge}</td>
                                        <td>{r.penalty}</td>
                                        <td>{r.result ? <span style={{ color: 'green' }}>✔</span> : <span style={{ color: 'red' }}>✖</span>}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        );
    });

    return (
        <div className="challenge-results">
            <h2>Resultados de los Retos</h2>
            <div className="cards-container">
                {playerResults}
            </div>
            <button className="show-history" onClick={handleShowAllDetails}>
                {showAllDetails ? 'Ocultar Historial' : 'Mostrar Historial'}
            </button>
            {showAllDetails && (
                <div className="all-details">
                    <h3>Historial Completo de Retos</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Jugador</th>
                                <th>Retado</th>
                                <th>Categoría</th>
                                <th>Descripción</th>
                                <th>Penalidad</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((r, index) => (
                                <tr key={index}>
                                    <td>{r.player}</td>
                                    <td>{r.opponent}</td>
                                    <td>{r.category}</td>
                                    <td>{r.challenge}</td>
                                    <td>{r.penalty}</td>
                                    <td>{r.result ? <span style={{ color: 'green' }}>✔</span> : <span style={{ color: 'red' }}>✖</span>}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ChallengeResults;
