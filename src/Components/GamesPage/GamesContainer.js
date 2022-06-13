import React from 'react';
import "./GamesContainer.css";
import Game from "./Game";
import {useContext} from "react";
import {AppContext} from "../../App";

function GamesContainer({games, getGameInfo, width}) {

    const {loading} = useContext(AppContext);

    return (
        <section className="gamesContainer" style={{display: loading && "none", width: width}}>
            <h2><div className="metaScore">#</div> = Metacritic score</h2>
            <ul>
            {games.map(game => (
                <Game key={game.id} id={game.id} getGameInfo={getGameInfo} name={game.name} background={game.background_image} metaScore={game.metacritic} releaseDate={game.released}/>
            ))}
            </ul>
        </section>
    );
}

export default GamesContainer;