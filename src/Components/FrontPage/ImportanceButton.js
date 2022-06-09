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
        <div className="importanceButton">
            <Button type="button" onClick={handleClick} id={idName} style={{transform: isClicked ? "rotateY(180deg)" : "rotateY(0deg)"}}  variant="contained">
                <div className="importanceFront" style={{backgroundColor: color}}><p>{importanceName}</p></div>
                <div className="importanceBack" style={{backgroundColor: "gray"}}><p>{importanceName}</p></div>
            </Button>
        </div>
    );
}

export default ImportanceButton;