import React, {useEffect} from 'react';
import "./GameInfo.css";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function GameInfo(props) {


    useEffect(() => {
        const getData = async() => {
            const response = await axios.get("https://api.rawg.io/api/games/3498?key=0bdf9bbe0b33484f82b8ba3ae23aa065");
            console.log(response.data);
        }

        getData();
    }, [])

    return (
        <div className="gameInfo">
            <h1>Grand Theft Auto V</h1>
            <img src="https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg" />
            <h2 className="descriptionTitle">Description</h2>
            <p style={{textAlign: "start"}}>The year is 2021, and Genoq has become a leading corporation in bio-medical research. However the tower, some 90 stories high, is not all that it seems. Somewhere within the tower, highly illegal bio-weapons research has been conducted in secret. June 26th, disaster strikes and the lethal organic weapons have escaped and threaten not only the staff members stranded in the tower, but the world itself. <br/><br/>You arrive on the 80th floor with an urgent package addressed to Derrida, the lead scientist at Genoq working on the bio-weapons research. Set back from your goal, you must climb the tower, assisting those in need or focusing solely on your task at hand, and stopping the virus from escaping the tower and threatening all life on the planet.<br/><br/>Will you help the stranded survivors or hinder them? Can you deliver the package to Derrida in time? Can you prevent the impending catastrophe and escape with your life?</p>

            <div className="smallDetailsContainer">
                <div className="detailsBox boxOne">
                    <h2 className="detailsBoxTitle">Release Date</h2>
                    <p>2012-10-10</p>
                </div>
                <div className="detailsBox boxTwo">
                    <h2 className="detailsBoxTitle">Genres</h2>
                    <p>Action, Adventure, RPG</p>
                </div>
                <div className="detailsBox boxThree">
                    <h2 className="detailsBoxTitle">Developers</h2>
                    <p>Rockstar Games, Rockstar North</p>
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
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide> <img className="carouselImg" src="https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg" /></SwiperSlide>
                <SwiperSlide> <img className="carouselImg" src="https://media.rawg.io/media/screenshots/5f5/5f5a38a222252d996b18962806eed707.jpg" /></SwiperSlide>
                <SwiperSlide> <img className="carouselImg" src="https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg" /></SwiperSlide>
                <SwiperSlide> <img className="carouselImg" src="https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg" /></SwiperSlide>
            </Swiper>
            </div>

        </div>
    );
}

export default GameInfo;