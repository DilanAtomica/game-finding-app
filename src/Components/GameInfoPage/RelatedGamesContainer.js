import React from 'react';
import "./RelatedGamesContainer.css";
import GamesContainer from "../GamesPage/GamesContainer";

function RelatedGamesContainer({games, getGameInfo}) {
    return (
        <section className="relatedGamesContainer" style={{display: games.length <= 0 && "none"}}>
            <h1>Related Games</h1>
            <GamesContainer  getGameInfo={getGameInfo} games={games} width={"100%"} />
        </section>
    );
}

export default RelatedGamesContainer;