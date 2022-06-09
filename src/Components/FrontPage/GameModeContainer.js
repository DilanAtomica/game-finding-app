import React from 'react';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./GamemodeContainer.css";
import GamemodeButton from "./GamemodeButton";
import {Link} from "react-scroll";


function GameModeContainer({handleGameModes}) {

    return (
        <div className="gameModeContainer" id="phaseThree">
            <h1>Choose game modes</h1>
            <div className="modeOptions">
                <GamemodeButton handleGameModes={handleGameModes} idName="singleplayer" color="#EB6424" gamemodeName="Single Player" />
                <GamemodeButton handleGameModes={handleGameModes} idName="multiplayer" color="#0A1045" gamemodeName="Multiplayer" />
                <GamemodeButton handleGameModes={handleGameModes} idName="co-op" color="#00C2D1" gamemodeName="Co-op" />
            </div>
            <Link to="phaseFour" spy={true} smooth={true} offset={50} duration={1000}><button type="button"><ArrowDownwardIcon id="arrowDown" /></button></Link>
        </div>
    );
}

export default GameModeContainer;