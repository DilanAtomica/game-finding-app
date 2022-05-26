import React from 'react';
import {motion} from "framer-motion";
import Button from "@mui/material/Button";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./ImportanceContainer.css";

function ImportanceContainer(props) {
    return (
        <div className="importanceContainer">
            <h1>Are any of these important?</h1>
            <div className="importanceOptions">
                <motion.div whileHover={{scale: 1.2}}><Button style={{backgroundColor: "#FB6107"}} variant="contained">Great Soundtrack</Button></motion.div>
                <motion.div whileHover={{scale: 1.2}}><Button style={{backgroundColor: "#F3DE2C"}} variant="contained">Atmospheric</Button></motion.div>
                <motion.div whileHover={{scale: 1.2}}><Button style={{backgroundColor: "#7CB518"}} variant="contained">Controller support</Button></motion.div>
            </div>
            <motion.div  whileHover={{scale: 1.2}}><ArrowDownwardIcon id="arrowDown" /></motion.div>
        </div>
    );
}

export default ImportanceContainer;