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

        </div>
    );
}

export default GameInfo;