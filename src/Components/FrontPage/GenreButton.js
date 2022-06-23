import React, {useState} from 'react';
import Button from "@mui/material/Button";
import "./GenreButton.css";

function GenreButton({genreName, idName, handleGenres}) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        handleGenres(e.currentTarget.id);
        setIsClicked(!isClicked);
    }

    return (
        <li className="genreButton">
            <Button type="button" onClick={handleClick} id={idName} style={{transform: isClicked ? "rotateY(180deg)" : "rotateY(0deg)"}} variant="contained">
                <div className="genreFront" style={{backgroundColor: "#05386B"}}><h2>{genreName}</h2></div>
                <div className="genreBack" style={{backgroundColor: "gray"}}><h2>{genreName}</h2></div>
            </Button>
        </li>
    );
}

export default GenreButton;