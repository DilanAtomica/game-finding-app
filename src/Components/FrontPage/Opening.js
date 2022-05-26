import React from 'react';
import "./Opening.css";
import {motion} from "framer-motion";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";

function Opening(props) {

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
            <div className="opening">
                <h1 style={{transform: toggle && "translateX(0)", opacity: toggle && "1"}} id="openingHeader1">Welcome to Game Finder</h1>
                <h1 style={{transform: toggle && "translateX(0)", opacity: toggle && "1"}} id="openingHeader2">Ready to begin your Search?</h1>
                <div style={{transform: toggle && "translateY(0)", opacity: toggle && "1"}} className="startButtonContainer">
                    <motion.div whileHover={{scale: 1.2}}><Button id="startButton" size="large" variant="contained">Let's Go!</Button></motion.div>
                </div>
            </div>

    );
}

export default Opening;