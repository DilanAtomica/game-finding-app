import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {motion} from "framer-motion";
import "./GenreButton.css";

function GenreButton({color, genreName, idName, handleGenres}) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        handleGenres(e.target.id);
        setIsClicked(!isClicked);
    }

    return (
        <motion.div className="genreButton" whileTap={{ scale: 0.8 }}><Button onClick={handleClick} id={idName} style={{backgroundColor: isClicked ? "gray" : color}} variant="contained">{genreName}</Button></motion.div>
    );
}

export default GenreButton;