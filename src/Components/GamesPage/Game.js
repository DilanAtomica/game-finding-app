import React, {useEffect, useState} from 'react';
import "./Game.css";

function Game({name, background, metaScore, releaseDate, id, getGameInfo}) {

    const [shortedName, setShortedName] = useState();

    useEffect(() => {
        if(name === undefined) return;
        let reducedName = name.slice(0,30);
        if( reducedName.length >= 30) reducedName = reducedName + "...";
        setShortedName(reducedName);
    }, [name]);

    const handleClick = () => {
        getGameInfo(id);
    }


    return (
        <div className="game" onClick={handleClick}>
            <img src={background} />
            <div className="gameDetails">
                <p>{shortedName}</p>
                <div className="gameInfo-extension">
                    <div className="releaseYear">
                        <p>{releaseDate.substring(0, 4)}</p>
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