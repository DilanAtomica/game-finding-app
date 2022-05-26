import React from 'react';
import "./GenreContainer.css";
import Button from "@mui/material/Button";
import {motion} from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function GenreContainer({handleGenres}) {

    const handleClick = (e) => {
        handleGenres(e.target.id);
    }

    return (
        <div className="genreContainer">
            <h1>Choose genres</h1>
            <div className="genres">
                <div className="genresBox">
                    <Button onClick={handleClick} id="sports" style={{backgroundColor: "#0C7C59"}} variant="contained">Sports</Button>
                    <Button onClick={handleClick} id="action" style={{backgroundColor: "#06D6A0"}} variant="contained">Action</Button>
                    <Button onClick={handleClick} id="adventure" style={{backgroundColor: "#1B9AAA"}} variant="contained">Adventure</Button>
                    <Button onClick={handleClick} id="rpg" style={{backgroundColor: "#EF476F"}} variant="contained">RPG</Button>
                    <Button onClick={handleClick} id="strategy" style={{backgroundColor: "#FFC43D"}} variant="contained">Strategy</Button>
                </div>

                <div className="genresBox">
                    <Button onClick={handleClick} id="shooter" style={{backgroundColor: "#F39237"}} variant="contained">Shooter</Button>
                    <Button onClick={handleClick} id="casual" style={{backgroundColor: "#BF1363"}} variant="contained">Casual</Button>
                    <Button onClick={handleClick} id="simulation" style={{backgroundColor: "#0E79B2"}} variant="contained">Simulation</Button>
                    <Button onClick={handleClick} id="puzzle" style={{backgroundColor: "#191923"}} variant="contained">Puzzle</Button>
                    <Button onClick={handleClick} id="arcade" style={{backgroundColor: "#6A0F49"}} variant="contained">Arcade</Button>
                </div>

                <div className="genresBox">
                    <Button onClick={handleClick} id="platformer" style={{backgroundColor: "#5DD9C1"}} variant="contained">Platformer</Button>
                    <Button onClick={handleClick} id="racing" style={{backgroundColor: "#ACFCD9"}} variant="contained">Racing</Button>
                    <Button onClick={handleClick} id="massive multiplayer" style={{backgroundColor: "#B084CC"}} variant="contained">Massive Multiplayer</Button>
                    <Button onClick={handleClick} id="" style={{backgroundColor: "#665687"}} variant="contained">MMORPG</Button>
                    <Button onClick={handleClick} id="fighting" style={{backgroundColor: "#190933"}} variant="contained">Fighting</Button>
                </div>

                <div className="genresBox">
                    <Button onClick={handleClick} id="family" style={{backgroundColor: "#003844"}} variant="contained">Family</Button>
                    <Button onClick={handleClick} id="boardgames" style={{backgroundColor: "#006C67"}} variant="contained">Board Games</Button>
                    <Button onClick={handleClick} id="educational" style={{backgroundColor: "#F194B4"}} variant="contained">Educational</Button>
                    <Button onClick={handleClick} id="card" style={{backgroundColor: "#FFB100"}} variant="contained">Card</Button>
                    <Button onClick={handleClick} id="indie" style={{backgroundColor: "#A31621"}} variant="contained">Indie</Button>
                </div>
                <Button variant="contained" style={{fontSize: "24px"}}>No preference</Button>
            </div>
            <motion.div  whileHover={{scale: 1.2}}><ArrowDownwardIcon id="arrowDown" /></motion.div>
        </div>
    );
}

export default GenreContainer;