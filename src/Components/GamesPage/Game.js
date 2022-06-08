import React, {useEffect, useState} from 'react';
import "./Game.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
        if(games.includes(id)) setHearted(true);
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
        <div className="game">
            <img onClick={handleClick} src={background} />
            <div className="gameDetails">
                <p>{shortedName}</p>
                <div className="gameInfo-extension">
                    <div className="releaseYear">
                        <p>{releaseDate?.substring(0, 4)}</p>
                    </div>
                    <div className="heartIcons">
                        <FavoriteBorderIcon className="heartBorderIcon" style={{display: hearted && "none"}} onClick={handleFavoriteClick} />
                        <FavoriteIcon className="heartFullIcon" style={{display: !hearted && "none"}} onClick={handleFavoriteClick}/>
                    </div>
                    <div className="metaScore">
                        {metaScore ? metaScore : "?"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;