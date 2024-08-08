import React, { useState } from 'react';
import PlayerList from './PlayerList';

const PlayerSetup = ({ setPlayers }) => {
    const [tempPlayers, setTempPlayers] = useState([]);
    const [playerCount, setPlayerCount] = useState(0);

    const handleAddPlayers = () => {
        const count = parseInt(playerCount, 10);
        if (isNaN(count) || count <= 0) {
            alert("Por favor ingrese un número valido de jugadores");
            return;
        }

        const newTempPlayers = [];
        for (let i = 0; i < count; i++) {
            newTempPlayers.push({ name: `Jugador ${i + 1}`, gender: i % 2 === 0 ? 'Male' : 'Female' });
        }
        setTempPlayers(newTempPlayers);
    };

    const confirmPlayers = () => {
        setPlayers(tempPlayers);
    };

    return (
        <div>
            <input
                type="number"
                value={playerCount}
                onChange={(e) => setPlayerCount(e.target.value)}
                placeholder="Ingrese un numero de jugadores"
            />
            <button onClick={handleAddPlayers}>Generar Jugadores</button>
            <PlayerList players={tempPlayers} setPlayers={setTempPlayers} />
            {tempPlayers.length > 0 && <button onClick={confirmPlayers}>Confirmar Jugadores</button>}
        </div>
    );
};

export default PlayerSetup;
