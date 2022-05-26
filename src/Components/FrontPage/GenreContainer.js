import React from 'react';
import "./GenreContainer.css";
import Button from "@mui/material/Button";
import {motion} from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function GenreContainer(props) {
    return (
        <div className="genreContainer">
            <h1>Choose genres</h1>
            <div className="genres">
                <div className="genresBox">
                    <Button style={{backgroundColor: "#0C7C59"}} variant="contained">Sports</Button>
                    <Button style={{backgroundColor: "#06D6A0"}} variant="contained">Action</Button>
                    <Button style={{backgroundColor: "#1B9AAA"}} variant="contained">Adventure</Button>
                    <Button style={{backgroundColor: "#EF476F"}} variant="contained">RPG</Button>
                    <Button style={{backgroundColor: "#FFC43D"}} variant="contained">Strategy</Button>
                </div>

                <div className="genresBox">
                    <Button style={{backgroundColor: "#F39237"}} variant="contained">Shooter</Button>
                    <Button style={{backgroundColor: "#BF1363"}} variant="contained">Casual</Button>
                    <Button style={{backgroundColor: "#0E79B2"}} variant="contained">Simulation</Button>
                    <Button style={{backgroundColor: "#191923"}} variant="contained">Puzzle</Button>
                    <Button style={{backgroundColor: "#6A0F49"}} variant="contained">Arcade</Button>
                </div>

                <div className="genresBox">
                    <Button style={{backgroundColor: "#5DD9C1"}} variant="contained">Platformer</Button>
                    <Button style={{backgroundColor: "#ACFCD9"}} variant="contained">Racing</Button>
                    <Button style={{backgroundColor: "#B084CC"}} variant="contained">Massive Multiplayer</Button>
                    <Button style={{backgroundColor: "#665687"}} variant="contained">MMORPG</Button>
                    <Button style={{backgroundColor: "#190933"}} variant="contained">Fighting</Button>
                </div>

                <div className="genresBox">
                    <Button style={{backgroundColor: "#003844"}} variant="contained">Family</Button>
                    <Button style={{backgroundColor: "#006C67"}} variant="contained">Board Games</Button>
                    <Button style={{backgroundColor: "#F194B4"}} variant="contained">Educational</Button>
                    <Button style={{backgroundColor: "#FFB100"}} variant="contained">Card</Button>
                    <Button style={{backgroundColor: "#A31621"}} variant="contained">Indie</Button>
                </div>
                <Button variant="contained" style={{fontSize: "24px"}}>No preference</Button>
            </div>
            <motion.div  whileHover={{scale: 1.2}}><ArrowDownwardIcon id="arrowDown" /></motion.div>
        </div>
    );
}

export default GenreContainer;