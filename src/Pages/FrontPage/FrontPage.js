import React, {useEffect, useState} from 'react';
import "./FrontPage.css";
import axios from "axios";
import Button from '@mui/material/Button';

function FrontPage(props) {

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setToggle(true);
    }, [])

    return (
        <div className="frontPage">
            <div className="opening">
                <h1 style={{transform: toggle && "translateX(0)", opacity: toggle && "1"}} id="openingHeader1">Welcome to Game Finder</h1>
                <h1 style={{transform: toggle && "translateX(0)", opacity: toggle && "1"}} id="openingHeader2">Ready to begin your Search?</h1>
                <div style={{transform: toggle && "translateY(0)", opacity: toggle && "1"}} className="startButtonContainer">
                    <Button id="startButton" size="large" variant="contained">Find Games</Button>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;