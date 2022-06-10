import React from 'react';
import "./ImportanceButton.css";
import Button from "@mui/material/Button";
import {useState} from "react";


function ImportanceButton({idName, color, importanceName, handlePreferences}) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        handlePreferences(e.currentTarget.id);
        setIsClicked(!isClicked);
    }

    return (
        <li className="importanceButton">
            <Button type="button" onClick={handleClick} id={idName} style={{transform: isClicked ? "rotateY(180deg)" : "rotateY(0deg)"}}  variant="contained">
                <div className="importanceFront" style={{backgroundColor: color}}><h2>{importanceName}</h2></div>
                <div className="importanceBack" style={{backgroundColor: "gray"}}><h2>{importanceName}</h2></div>
            </Button>
        </li>
    );
}

export default ImportanceButton;