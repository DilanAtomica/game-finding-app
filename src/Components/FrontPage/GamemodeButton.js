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
    <li className="gamemodeButton">
        <Button type="button" onClick={handleClick} id={idName} style={{transform: isClicked ? "rotateY(180deg)" : "rotateY(0deg)"}}  variant="contained">
            <div className="gamemodeFront" style={{backgroundColor: "#05386B"}}><h2>{gamemodeName}</h2></div>
            <div className="gamemodeBack" style={{backgroundColor: "gray"}}><h2>{gamemodeName}</h2></div>
        </Button>
    </li>

    );
}

export default GamemodeButton;