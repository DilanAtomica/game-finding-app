import React, {useEffect, useState} from 'react';
import "./Game.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import questionMark from "../../Images/Links/questionMark.png";

function Game({name, background, metaScore, releaseDate, id, getGameInfo}) {

    const [shortedName, setShortedName] = useState();

    const [hearted, setHearted] = useState(false);

    useEffect(() => {
        shortenName();
    }, []);

    useEffect(() => {
        updateHeart();
    }, [hearted]);

    const updateHeart = () => {
        let games = JSON.parse(localStorage.getItem("gameID"));

        if(games !== null) {
            if(games.includes(id)) setHearted(true);
        }
    }

    const shortenName = () => {
        if(name === undefined) return;
        let reducedName = name.slice(0,30);
        if( reducedName.length >= 30) reducedName = reducedName + "..";
        setShortedName(reducedName);
    }

    const handleClick = () => {
        getGameInfo(id);
    }

    const handleFavoriteClick = ()=> {
        let games = JSON.parse(localStorage.getItem("gameID"));
        if(games === null || games.length === 0) {
            games = [id];
        }
        else if(games.includes(id)) {
            games = games.filter(game => game !== id);
        } else {
            games.push(id);
        }
        localStorage.setItem("gameID", JSON.stringify(games));
        setHearted(!hearted);
    }


    return (
        <li className="game">
                <h1>{shortedName}</h1>
            <button type="button"><img onClick={handleClick} src={background ? background : questionMark} alt={name} /></button>
            <div className="gameDetails">
                <ul className="gameInfo-extension">
                    <li className="releaseYear">
                        <h2>{releaseDate?.substring(0, 4)}</h2>
                    </li>
                    <li className="heartIcons">
                        {hearted
                        ? <button type="button"><FavoriteIcon className="heartFullIcon" onClick={handleFavoriteClick}/></button>
                        : <button type="button"><FavoriteBorderIcon className="heartBorderIcon"  onClick={handleFavoriteClick} /></button>}
                    </li>
                    <li className="metaScore">
                        <h2>{metaScore ? metaScore : "?"}</h2>
                    </li>
                </ul>
            </div>
        </li>
    );
}

export default Game;