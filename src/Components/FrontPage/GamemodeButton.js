import React from 'react';
import "./GamemodeButton.css";
import Button from "@mui/material/Button";
import {useState} from "react";
import {motion} from "framer-motion";

function GamemodeButton({idName, color, gamemodeName, handleGameModes}) {

    const [isClicked, setIsClicked] = useState(false);


    const handleClick = (e) => {
        handleGameModes(e.currentTarget.id);
        setIsClicked(!isClicked);
    }

    return (
    <div className="gamemodeButton">
        <Button type="button" onClick={handleClick} id={idName} style={{transform: isClicked ? "rotateY(180deg)" : "rotateY(0deg)"}}  variant="contained">
            <div className="gamemodeFront" style={{backgroundColor: color}}><p>{gamemodeName}</p></div>
            <div className="gamemodeBack" style={{backgroundColor: "gray"}}><p>{gamemodeName}</p></div>
        </Button>
    </div>

    );
}

export default GamemodeButton;