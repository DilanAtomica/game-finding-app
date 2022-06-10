import React from 'react';
import "./PlatformButton.css";
import {motion} from "framer-motion";
import {useState} from "react";
import CheckIcon from '@mui/icons-material/Check';

function PlatformButton({idName, platformName, srcName, handlePlatforms}) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        handlePlatforms(e.target.id);
        setIsClicked(!isClicked)
    }

    return (
        <li className="platformButton">
            <motion.button type="button" onClick={handleClick}  whileTap={{ scale: 0.8 }}><img id={idName} src={srcName} alt={platformName}/></motion.button>
            <h2 style={{color: isClicked && "green"}}>{platformName}</h2>
            <CheckIcon id="checkIcon" style={{color: isClicked ? "green" : "white"}} />
        </li>
    );
}

export default PlatformButton;