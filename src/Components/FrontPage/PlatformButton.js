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
        <div className="platformButton">
            <motion.div whileTap={{ scale: 0.8 }}><img id={idName}  onClick={handleClick}  src={srcName} alt="platform"/></motion.div>
            <h3 style={{color: isClicked && "green"}}>{platformName}</h3>
            <CheckIcon id="checkIcon" style={{color: isClicked ? "green" : "white"}} />
        </div>
    );
}

export default PlatformButton;