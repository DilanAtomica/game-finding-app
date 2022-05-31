import React from 'react';
import "./ImportanceButton.css";
import {motion} from "framer-motion";
import Button from "@mui/material/Button";
import {useState} from "react";


function ImportanceButton({idName, color, importanceName, handlePreferences}) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        handlePreferences(e.target.id);
        setIsClicked(!isClicked);
    }

    return (
            <motion.div className="importanceButton" whileTap={{ scale: 0.8 }}>
                <Button id={idName} onClick={handleClick} style={{backgroundColor: isClicked ? "gray" : color}} variant="contained">{importanceName}</Button>
            </motion.div>

    );
}

export default ImportanceButton;