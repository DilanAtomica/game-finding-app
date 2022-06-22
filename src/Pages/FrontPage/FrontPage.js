import React, {useEffect, useState, useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {AppContext} from "../../App";
import "./FrontPage.css";
import Opening from "../../Components/FrontPage/Opening";
import PlatformContainer from "../../Components/FrontPage/PlatformContainer";
import GenreContainer from "../../Components/FrontPage/GenreContainer";
import GameModeContainer from "../../Components/FrontPage/GameModeContainer";
import ImportanceContainer from "../../Components/FrontPage/ImportanceContainer";
import FinishContainer from "../../Components/FrontPage/FinishContainer";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination} from "swiper";


function FrontPage(props) {

    const {deActiveLoader} = useContext(AppContext);
    let navigate = useNavigate();

    const [platforms, setPlatforms] = useState([]);
    const [genres, setGenres] = useState([]);
    const [gameModes, setGameModes] = useState([]);
    const [preferences, setPreferences] = useState([]);

    const [started, setStarted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        deActiveLoader();
    }, []);

    const createAPI = () => {
        let string = "";

        if( genres.length !== 0) string = string + "&genres=";
        genres.map(genre => {
            string = string + genre + ",";
        });
        if( genres.length !== 0) string = string.slice(0, -1);

        if( platforms.length !== 0) string = string + "&platforms=";
        platforms.map(platform => {
            string = string + platform + ",";
        });
        if( platforms.length !== 0)string = string.slice(0, -1);

        if( preferences.length !== 0 || gameModes.length !== 0) string = string + "&tags=";

        gameModes.map(mode => {
            string = string + mode + ",";
        });

        preferences.map(preference => {
            string = string + preference + ",";
        });
        if( preferences.length !== 0)string = string.slice(0, -1);

        string = string + "&page=1";

        console.log(string);
        navigate("/craveplay/games/" + string);

    }


    const handlePlatforms = (platform) => {
        let alreadyClicked = false;

        platforms.map(console => {
            if(console === platform) {
                alreadyClicked = true;
            }
        });

        if(alreadyClicked) {
            const newList = platforms.filter(console => console !== platform);
            setPlatforms([...newList]);
        } else {
            setPlatforms([...platforms, platform]);
        }

        console.log(platforms)
    }

    const handleGenres = (chosenGenre) => {
        let alreadyClicked = false;

        genres.map(genre => {
            if(genre === chosenGenre) {
                alreadyClicked = true;
            }
        });

        if(alreadyClicked) {
            const newList = genres.filter(genre => genre !== chosenGenre);
            setGenres([...newList]);
        } else {
            setGenres([...genres, chosenGenre]);
        }
        console.log(genres)
    }

    const handleGameModes = (gameMode) => {
        let alreadyClicked = false;

        gameModes.map(mode => {
            if(mode === gameMode) {
                alreadyClicked = true;
            }
        });

        if(alreadyClicked) {
            const newList = gameModes.filter(mode => mode !== gameMode);
            setGameModes([...newList]);
        } else {
            setGameModes([...gameModes, gameMode]);
        }

        console.log(gameModes)
    }

    const handlePreferences = (chosenPreference) => {
        let alreadyClicked = false;

        preferences.map(preference => {
            if(chosenPreference === preference) {
                alreadyClicked = true;
            }
        });

        if(alreadyClicked) {
            const newList = preferences.filter(preference => preference !== chosenPreference);
            setPreferences([...newList]);
        } else {
            setPreferences([...preferences, chosenPreference]);
        }

        console.log(preferences)
    }

   const handleClick = (e) => {
       if(e.currentTarget.id === "backButton") {
           document.getElementsByClassName("swiper-button-prev")[0].click();
       } else {
           document.getElementsByClassName("swiper-button-next")[0].click();
       }
   }

   const startFiltering = () => {
        setStarted(true);
   }

    return (
        <main className="frontPage">
           <Opening startFiltering={startFiltering} started={started} />

            <div className="carousel" style={{display: !started && "none"}}>
                <Swiper id="swiper"
                        modules={[Navigation, A11y, Pagination]}
                        slidesPerView={1}
                        spaceBetween={50}
                        navigation
                        pagination={{ clickable: true }}
                        allowTouchMove={false}
                >
                    <SwiperSlide><PlatformContainer handlePlatforms={handlePlatforms} /></SwiperSlide>
                    <SwiperSlide><GenreContainer handleGenres={handleGenres} /></SwiperSlide>
                    <SwiperSlide><GameModeContainer handleGameModes={handleGameModes} /></SwiperSlide>
                    <SwiperSlide><ImportanceContainer handlePreferences={handlePreferences} /></SwiperSlide>
                    <SwiperSlide><FinishContainer createAPI={createAPI} /></SwiperSlide>
                </Swiper>
            </div>
            <div className="sliderButtons"style={{display: !started && "none"}}>
                <button onClick={handleClick} id="backButton" className="proceedButton" type="button">Back</button>
                <button onClick={handleClick}  id="NextButton" className="proceedButton" type="button" >Next</button>
            </div>

        </main>
    );
}

export default FrontPage;