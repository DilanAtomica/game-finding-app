import React from 'react';
import "./Opening.css";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import {Link} from "react-scroll";

function Opening(props) {

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setToggle(true);
    }, []);

    return (
            <section className="opening">
                <h1 style={{transform: toggle && "translateX(0)", opacity: toggle && "1"}} >Welcome to Game Finder</h1>
                <h2 style={{transform: toggle && "translateX(0)", opacity: toggle && "1"}} >Ready to begin your Search?</h2>
                <div style={{transform: toggle && "translateY(0)", opacity: toggle && "1"}} className="startButtonContainer">
                    <Link to="phaseOne" spy={true} smooth={true} offset={50} duration={1000}><Button type="button" id="startButton" size="large" variant="contained">Let's Go!</Button></Link>
                </div>
            </section>

    );
}

export default Opening;