import React from 'react';
import "./GamemodeContainer.css";
import GamemodeButton from "./GamemodeButton";


function GameModeContainer({handleGameModes}) {

    return (
        <section className="gameModeContainer" id="phaseThree">
            <h1>Choose game modes</h1>
            <ul className="modeOptions">
                <GamemodeButton handleGameModes={handleGameModes} idName="singleplayer" color="#EB6424" gamemodeName="Single Player" />
                <GamemodeButton handleGameModes={handleGameModes} idName="multiplayer" color="#0A1045" gamemodeName="Multiplayer" />
                <GamemodeButton handleGameModes={handleGameModes} idName="co-op" color="#00C2D1" gamemodeName="Co-op" />
            </ul>
        </section>
    );
}

export default GameModeContainer;