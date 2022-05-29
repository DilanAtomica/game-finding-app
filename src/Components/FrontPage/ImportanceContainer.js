import React from 'react';
import {motion} from "framer-motion";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./ImportanceContainer.css";

function ImportanceContainer({handlePreferences}) {

    const handleClick = (e) => {
        handlePreferences(e.target.id)
    }

    return (
        <div className="importanceContainer">
            <h1>Are any of these important?</h1>
            <div className="importanceOptions">
                <motion.div whileHover={{scale: 1.2}}><Button id="great-soundtrack" onClick={handleClick} style={{backgroundColor: "#FB6107"}} variant="contained">Great Soundtrack</Button></motion.div>
                <motion.div whileHover={{scale: 1.2}}><Button id="atmospheric" onClick={handleClick} style={{backgroundColor: "#F3DE2C"}} variant="contained">Atmospheric</Button></motion.div>
                <motion.div whileHover={{scale: 1.2}}><Button id="full-controller-support" onClick={handleClick} style={{backgroundColor: "#7CB518"}} variant="contained">Controller support</Button></motion.div>
            </div>
            <motion.div  whileHover={{scale: 1.2}}><ArrowDownwardIcon id="arrowDown" /></motion.div>
        </div>
    );
}

export default ImportanceContainer;