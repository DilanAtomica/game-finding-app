import React, {useEffect, useState, useContext} from 'react';
import "./GameInfo.css";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {AppContext} from "../../App";
import GamesContainer from "../../Components/GamesPage/GamesContainer";
import HeaderContainer from "../../Components/GameInfoPage/HeaderContainer";
import DetailsContainer from "../../Components/GameInfoPage/DetailsContainer";
import ScreenShotsContainer from "../../Components/GameInfoPage/ScreenShotsContainer";
import PlatformsContainer from "../../Components/GameInfoPage/PlatformsContainer";
import StoresContainer from "../../Components/GameInfoPage/StoresContainer";
import LinksContainer from "../../Components/GameInfoPage/LinksContainer";
import RelatedGamesContainer from "../../Components/GameInfoPage/RelatedGamesContainer";

function GameInfo(props) {

    const [game, setGame] = useState([]);
    const [screenShots, setScreenShots] = useState([]);
    const [stores, setStores] = useState([]);
    const [relatedGames, setRelatedGames] = useState([]);

    let navigate = useNavigate();
    const {activateLoader, deActiveLoader, loading} = useContext(AppContext);

    let { gameID } = useParams();

    useEffect(() => {
        try {
            if(gameID === undefined) return;
            activateLoader();
            window.scrollTo(0, 0);
            getGameInfo();
            getScreenShots();
            getStores();
            getRelatedGames();
        } catch {
            console.log("error");
        }
    }, [gameID]);

    const getGameInfo = async() => {
        const response = await axios.get("https://api.rawg.io/api/games/" + gameID + "?key=f8fa9d6de03342b6938543ce43d69dd6");
        console.log(response.data);
        setGame(response.data);
        deActiveLoader();
    }

    const getScreenShots = async() => {
        const response = await axios.get("https://api.rawg.io/api/games/" + gameID + "/screenshots" + "?key=f8fa9d6de03342b6938543ce43d69dd6");
        setScreenShots(response.data.results);
    }

    const getStores = async() => {
        const response = await axios.get("https://api.rawg.io/api/games/" + gameID + "/stores" + "?key=f8fa9d6de03342b6938543ce43d69dd6");
        setStores(response.data.results);
    }

    const getRelatedGames = async() => {
        const response = await axios.get("https://api.rawg.io/api/games/" + gameID + "/game-series" + "?key=f8fa9d6de03342b6938543ce43d69dd6");
        setRelatedGames(response.data.results);
        console.log(response.data.results)
    }

    const getRelatedGameDetails = (gameID) => {
        navigate("/craveplay/gameinfo/" + gameID);
    }

    return (
        <main className="gameInfo" style={{display: loading && "none"}}>
            <HeaderContainer name={game?.name} background={game?.background_image} description={game?.description_raw} releaseDate={game?.released}  metaScore={game.metacritic} id={game.id} />

            <DetailsContainer release={game?.released} genres={game?.genres} developers={game?.developers}/>

            <ScreenShotsContainer screenShotsCount={game?.screenshots_count} screenShots={screenShots} />

            <PlatformsContainer platforms={game?.platforms} />

            <StoresContainer gameStores={game?.stores} stores={stores} />

            <LinksContainer redditLink={game?.reddit_url} metaCriticLink={game?.metacritic_url} websiteLink={game?.website} subRedditIcon={game?.reddit_logo} />

            <RelatedGamesContainer getGameInfo={getRelatedGameDetails} games={relatedGames} />

        </main>
    );
}

export default GameInfo;