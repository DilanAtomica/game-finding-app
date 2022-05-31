import React from 'react';
import {motion} from "framer-motion";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./GamemodeContainer.css";
import GamemodeButton from "./GamemodeButton";

function GameModeContainer({handleGameModes}) {

    return (
        <div className="gameModeContainer">
            <h1>Choose game modes</h1>
            <div className="modeOptions">
                <GamemodeButton handleGameModes={handleGameModes} idName="singleplayer" color="#EB6424" gamemodeName="Single Player" />
                <GamemodeButton handleGameModes={handleGameModes} idName="multiplayer" color="#0A1045" gamemodeName="Multiplayer" />
                <GamemodeButton handleGameModes={handleGameModes} idName="co-op" color="#00C2D1" gamemodeName="Co-op" />
            </div>
            <motion.div  whileHover={{scale: 1.2}}><ArrowDownwardIcon id="arrowDown" /></motion.div>
        </div>
    );
}

export default GameModeContainer;