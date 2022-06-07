import React from 'react';
import "./RelatedGamesContainer.css";
import GamesContainer from "../GamesPage/GamesContainer";

function RelatedGamesContainer({games, getGameInfo}) {
    return (
        <div className="relatedGamesContainer" style={{display: games.length <= 0 && "none"}}>
            <h2>Related Games</h2>
            <GamesContainer  getGameInfo={getGameInfo} games={games} width={"100%"} />
        </div>
    );
}

export default RelatedGamesContainer;