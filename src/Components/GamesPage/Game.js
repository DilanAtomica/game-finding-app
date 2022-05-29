import React, {useEffect, useState} from 'react';
import "./Game.css";

function Game({name, background}) {

    const [shortedName, setShortedName] = useState();

    useEffect(() => {
        if(name === undefined) return;
        let reducedName = name.slice(0,30);
        if( reducedName.length >= 30) reducedName = reducedName + "...";
        setShortedName(reducedName);
    }, [name])


    return (
        <div className="game">
            <img src={background} />
            <p>{shortedName}</p>
        </div>
    );
}

export default Game;