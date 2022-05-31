import React from 'react';
import "./GamemodeButton.css";
import Button from "@mui/material/Button";
import {useState} from "react";
import {motion} from "framer-motion";

function GamemodeButton({idName, color, gamemodeName, handleGameModes}) {

    const [isClicked, setIsClicked] = useState(false);


    const handleClick = (e) => {
        handleGameModes(e.target.id);
        setIsClicked(!isClicked);
    }

    return (
        <motion.div whileTap={{ scale: 0.8 }} className="gamemodeButton"><Button onClick={handleClick} id={idName} style={{backgroundColor: isClicked ? "gray" : color}} variant="contained">{gamemodeName}</Button></motion.div>
    );
}

export default GamemodeButton;