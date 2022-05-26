import React from 'react';
import {motion} from "framer-motion";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./GamemodeContainer.css";

function GameModeContainer(props) {
    return (
        <div className="gameModeContainer">
            <h1>Choose game modes</h1>
            <div className="modeOptions">
                <motion.div whileHover={{scale: 1.2}}><Button style={{backgroundColor: "#EB6424"}} variant="contained">Single Player</Button></motion.div>
                <motion.div whileHover={{scale: 1.2}}><Button style={{backgroundColor: "#0A1045"}} variant="contained">Multiplayer</Button></motion.div>
                <motion.div whileHover={{scale: 1.2}}><Button style={{backgroundColor: "#00C2D1"}} variant="contained">Co-op</Button></motion.div>
            </div>
            <motion.div  whileHover={{scale: 1.2}}><ArrowDownwardIcon id="arrowDown" /></motion.div>
        </div>
    );
}

export default GameModeContainer;