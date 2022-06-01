import React from 'react';
import "./GamesContainer.css";
import Game from "./Game";
import {useContext} from "react";
import {AppContext} from "../../App";

function GamesContainer({games}) {

    const {loading} = useContext(AppContext);

    return (
        <div className="gamesContainer" style={{display: loading && "none"}}>
            {games.map(game => (
                <Game key={game.id} id={game.id} name={game.name} background={game.background_image} metaScore={game.metacritic} releaseDate={game.released}/>
            ))}
        </div>
    );
}

export default GamesContainer;