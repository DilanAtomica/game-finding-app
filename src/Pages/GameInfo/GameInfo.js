import React, {useEffect, useState} from 'react';
import "./GameInfo.css";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useNavigate, useParams} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../../App";
import ps5 from "../../Images/Platforms/ps5.png";
import ps4 from "../../Images/Platforms/ps4.png";
import ps3 from "../../Images/Platforms/ps3.png";
import xbox1 from "../../Images/Platforms/xbox1.png";
import xbox360 from "../../Images/Platforms/xbox360.png";
import xboxSeries from "../../Images/Platforms/xboxSeries.png";
import nintendoSwitch from "../../Images/Platforms/nintendoSwitch.png";
import pc from "../../Images/Platforms/pc.png";

import appStore from "../../Images/Stores/appStore.png"
import microsoftStore from "../../Images/Stores/miscrosoftStore.png"
import nintendoStore from "../../Images/Stores/nintendoStore.png"
import playstationStore from "../../Images/Stores/playstationStore.png"
import steamStore from "../../Images/Stores/steamStore.png"
import xboxStore from "../../Images/Stores/xboxStore.png"
import epicStore from "../../Images/Stores/epicStore.png"

import redditLogo from "../../Images/Links/reddit.png";
import metaCriticLogo from "../../Images/Links/metacritic.png";
import questionMark from "../../Images/Links/questionMark.png";


import GamesContainer from "../../Components/GamesPage/GamesContainer";



function GameInfo(props) {

    const [game, setGame] = useState([]);
    const [screenShots, setScreenShots] = useState([]);
    const [stores, setStores] = useState([]);
    const [relatedGames, setRelatedGames] = useState([]);

    let navigate = useNavigate();
    const {showLoader, loading} = useContext(AppContext);

    let { gameID } = useParams();

    useEffect(() => {
        try {
            if(gameID === undefined) return;
            showLoader();
            window.scrollTo(0, 0);
            getGameInfo();
            getScreenShots();
            getStores();
            getRelatedGames();
            test();
        } catch {
            console.log("error");
        }
    }, [gameID]);

    const getGameInfo = async() => {
        const response = await axios.get("https://api.rawg.io/api/games/" + gameID + "?key=0bdf9bbe0b33484f82b8ba3ae23aa065");
        console.log(response.data);
        setGame(response.data);
    }

    const getScreenShots = async() => {
        const response = await axios.get("https://api.rawg.io/api/games/" + gameID + "/screenshots" + "?key=0bdf9bbe0b33484f82b8ba3ae23aa065");
        setScreenShots(response.data.results);
    }

    const getStores = async() => {
        const response = await axios.get("https://api.rawg.io/api/games/" + gameID + "/stores" + "?key=0bdf9bbe0b33484f82b8ba3ae23aa065");
        setStores(response.data.results);
        console.log(response.data.results)
    }

    const getRelatedGames = async() => {
        const response = await axios.get("https://api.rawg.io/api/games/" + gameID + "/game-series" + "?key=0bdf9bbe0b33484f82b8ba3ae23aa065");
        setRelatedGames(response.data.results);
    }

    const test = async() => {
        const response = await axios.get("https://api.rawg.io/api/platforms?key=0bdf9bbe0b33484f82b8ba3ae23aa065");
        console.log(response.data.results);
    }

    const getRelatedGameDetails = (gameID) => {
        navigate("/gameinfo/" + gameID);
    }





    return (
        <div className="gameInfo" style={{display: loading && "none"}}>
            <h1>{game?.name}</h1>
            <img src={game?.background_image} />
            <h2 className="descriptionTitle">Description</h2>
            <p style={{textAlign: "start"}}>{game?.description_raw}</p>

            <div className="smallDetailsContainer" style={{marginTop: "1rem"}}>
                <div className="detailsBox boxOne">
                    <h2 className="detailsBoxTitle">Release Date</h2>
                    <p>{game?.released}</p>
                </div>
                <div className="detailsBox boxTwo">
                    {game.genres?.length > 0 && <h2 className="detailsBoxTitle">Genres</h2>}
                    <p>{game.genres?.map(genre => (
                       genre.name + " "
                    ))}</p>
                </div>
                <div className="detailsBox boxThree">
                    <h2 className="detailsBoxTitle">Developers</h2>
                    <p>{game.developers?.map(developer => (
                        developer.name + " "
                    ))}</p>
                </div>
            </div>

            {game?.screenshots_count > 0 && <h2 className="screenShotsTitle">Screenshots</h2>}

            {game?.screenshots_count > 0 &&
                <div className="carousel">
                <Swiper id="swiper"
                        modules={[Navigation, Pagination, A11y]}
                        slidesPerView={1}
                        spaceBetween={50}
                        navigation
                        pagination={{ clickable: true }}
                >
                    {screenShots?.map(shot => (
                        <SwiperSlide key={shot.id}><img className="carouselImg" src={shot.image} /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
            }


            {game.platforms?.length > 0 &&  <h2 className="platformTitle">Platform availability</h2>}
            <div className="platformsAvailableContainer">
                {game.platforms?.map(platform => (
                    <div key={platform.platform.id} className="platformsAvailableBox">
                        <img src={
                            platform.platform.id === 187 ? ps5 : platform.platform.id === 18 ? ps4 : platform.platform.id === 16 ? ps3
                                : platform.platform.id === 186 ? xboxSeries : platform.platform.id === 1 ? xbox1 : platform.platform.id === 14 ? xbox360 : platform.platform.id === 7 ? nintendoSwitch
                                    : platform.platform.id === 4 ? pc : questionMark
                        } />
                        <h3>{platform.platform.name}</h3>
                    </div>
                ))}
            </div>


            {game.stores && <h2 className="storesTitle">Sold by</h2>}
            <div className="storesContainer">
                {stores?.map(store => (
                        <div className="storeBox" key={store.id}>
                            <a href={store.url}><img src={
                                store.store_id === 3 ? playstationStore : store.store_id === 11 ? epicStore : store.store_id === 1 ? steamStore : store.store_id === 7 ? xboxStore : store.store_id === 2 ? microsoftStore
                                    : store.store_id === 4 ? appStore : questionMark} /></a>
                            {game.stores?.map(gameStore => (
                                <h3 key={store.id}>{gameStore.id === store.id && gameStore.store?.name}</h3>
                            ))}
                        </div>
                    ))}

            </div>


            <h2 className="linksTitle">Various Links</h2>

            <div className="linksContainer" style={{borderTopRightRadius: "0", borderTopLeftRadius: "0"}}>
                {game.reddit_url &&
                    <div className="linksBox">
                    <a href={game?.reddit_url}><img src={redditLogo} /></a>
                    <h3 className="linksBoxTitle">Games Subreddit</h3>
                </div>
                }
                {game.metacritic_url &&
                    <div className="linksBox">
                    <a href={game?.metacritic_url}><img src={metaCriticLogo} /></a>
                    <h3 className="linksBoxTitle">MetaCritic</h3>
                </div>
                }
                {game.website &&
                    <div className="linksBox">
                    <a href={game?.website}><img src={game.reddit_logo ? game.reddit_logo : questionMark} /></a>
                    <h3 className="linksBoxTitle">Games Website</h3>
                </div>
                }
            </div>

            {relatedGames.length > 0 && <h2 className="relatedGamesTitle">Related Games</h2>}
            <GamesContainer  getGameInfo={getRelatedGameDetails} games={relatedGames && relatedGames} width={"100%"} />

        </div>
    );
}

export default GameInfo;