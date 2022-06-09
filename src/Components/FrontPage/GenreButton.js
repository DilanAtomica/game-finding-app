import React, {useState} from 'react';
import Button from "@mui/material/Button";
import "./GenreButton.css";

function GenreButton({color, genreName, idName, handleGenres}) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        handleGenres(e.currentTarget.id);
        setIsClicked(!isClicked);
    }

    return (
        <div className="genreButton">
            <Button type="button" onClick={handleClick} id={idName} style={{transform: isClicked ? "rotateY(180deg)" : "rotateY(0deg)"}} variant="contained">
                <div className="genreFront" style={{backgroundColor: color}}><p>{genreName}</p></div>
                <div className="genreBack" style={{backgroundColor: "gray"}}><p>{genreName}</p></div>
            </Button>

        </div>
    );
}

export default GenreButton;