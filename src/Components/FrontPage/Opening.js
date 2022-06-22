import React from 'react';
import "./Opening.css";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";

function Opening({startFiltering, started}) {

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        startFiltering();
    }

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
            <section className="opening" style={{display: started && "none"}}>
                <h1 style={{transform: toggle && "translateX(0)", opacity: toggle && "1"}} >Welcome to Crave Play</h1>
                <h2 style={{transform: toggle && "translateX(0)", opacity: toggle && "1"}} >Ready to begin your search?</h2>
                <div style={{transform: toggle && "translateY(0)", opacity: toggle && "1"}} className="startButtonContainer">
                    <Button onClick={handleClick} type="button" id="startButton" size="large" variant="contained">Let's Go!</Button>
                </div>
            </section>

    );
}

export default Opening;