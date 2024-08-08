import React from 'react';

const PlayerList = ({ players, setPlayers }) => {
    const handlePlayerChange = (index, key, value) => {
        const newPlayers = [...players];
        newPlayers[index][key] = value;
        setPlayers(newPlayers);
    };

    return (
        <div className="player-list">
            {players.map((player, index) => (
                <div key={index} className="player-item">
                    <input
                        type="text"
                        value={player.name}
                        onChange={(e) => handlePlayerChange(index, 'name', e.target.value)}
                    />
                    <select
                        value={player.gender}
                        onChange={(e) => handlePlayerChange(index, 'gender', e.target.value)}
                    >
                        <option value="Male">Masculino</option>
                        <option value="Female">Femenino</option>
                    </select>
                </div>
            ))}
        </div>
    );
};

export default PlayerList;
