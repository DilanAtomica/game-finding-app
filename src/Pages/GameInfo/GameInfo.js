import React, {useEffect, useState} from 'react';
import "./GameInfo.css";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useParams} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../../App";
import ps5 from "../../Images/ps5.png";
import ps4 from "../../Images/ps4.png";
import ps3 from "../../Images/ps3.png";
import xbox1 from "../../Images/xbox1.png";
import xbox360 from "../../Images/xbox360.png";
import xboxSeries from "../../Images/xboxSeries.png";
import nintendoSwitch from "../../Images/nintendoSwitch.png";
import pc from "../../Images/pc.png";

function GameInfo(props) {

    const [game, setGame] = useState([]);
    const [screenShots, setScreenShots] = useState([]);

    const {showLoader, loading} = useContext(AppContext);

    let { gameID } = useParams();

    useEffect(() => {
        try {
            if(gameID === undefined) return;
            showLoader();
            window.scrollTo(0, 0);
            getGameInfo();
            getScreenShots();
        } catch {
            console.log("error");
        }
    }, []);

    const getGameInfo = async() => {
        const response = await axios.get("https://api.rawg.io/api/games/" + gameID + "?key=0bdf9bbe0b33484f82b8ba3ae23aa065");
        console.log(response.data);
        setGame(response.data);
    }

    const getScreenShots = async() => {
        const response = await axios.get("https://api.rawg.io/api/games/" + gameID + "/screenshots" + "?key=0bdf9bbe0b33484f82b8ba3ae23aa065");
        setScreenShots(response.data.results);
    }



    return (
        <div className="gameInfo" style={{display: loading && "none"}}>
            <h1>{game.name}</h1>
            <img src={game?.background_image} />
            <h2 className="descriptionTitle">Description</h2>
            <p style={{textAlign: "start"}}>{game?.description_raw}</p>

            <div className="smallDetailsContainer">
                <div className="detailsBox boxOne">
                    <h2 className="detailsBoxTitle">Release Date</h2>
                    <p>{game?.released}</p>
                </div>
                <div className="detailsBox boxTwo">
                    <h2 className="detailsBoxTitle">Genres</h2>
                    <p>{game.genres?.map(genre => (
                       genre.name + " "
                    ))}</p>
                </div>
                <div className="detailsBox boxThree">
                    <h2 className="detailsBoxTitle">Developers</h2>
                    <p>{game.developers?.map(developer => (
                        developer.name
                    ))}</p>
                </div>
            </div>

            <h2 className="screenShotsTitle">Screenshots</h2>
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

            <h2 className="platformTitle">Platform availability</h2>
            <div className="platformsAvailableContainer">
                {game.platforms?.map(platform => (
                    <div key={platform.platform.id} className="platformsAvailableBox">
                        <img src={
                            platform.platform.name === "PlayStation 5" ? ps5 : platform.platform.name === "PlayStation 4" ? ps4 : platform.platform.name === "PlayStation 3" ? ps3
                                : platform.platform.name === "Xbox Series S/X" ? xboxSeries : platform.platform.name === "Xbox One" ? xbox1 : platform.platform.name === "Xbox 360" ? xbox360 : platform.platform.name === "Nintendo Switch" ? nintendoSwitch
                                    : platform.platform.name === "PC" ? pc : ""
                        } />
                        <h3>{platform.platform.name}</h3>
                    </div>
                ))}
            </div>



        </div>
    );
}

export default GameInfo;