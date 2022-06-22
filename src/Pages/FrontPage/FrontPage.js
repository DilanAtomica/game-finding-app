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

    const [filters, setFilters] = useState({platforms: [], genres: [], gameModes: [], preferences: []});
    const [started, setStarted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        deActiveLoader();
    }, []);

    const createAPI = () => {
        let string = "";

        if(filters.genres.length !== 0) string = string + "&genres=";
        filters.genres.map(genre => {
            string = string + genre + ",";
        });
        if(filters.genres.length !== 0) string = string.slice(0, -1);

        if(filters.platforms.length !== 0) string = string + "&platforms=";
        filters.platforms.map(platform => {
            string = string + platform + ",";
        });
        if(filters.platforms.length !== 0)string = string.slice(0, -1);

        if(filters.preferences.length !== 0 || filters.gameModes.length !== 0) string = string + "&tags=";

        filters.gameModes.map(mode => {
            string = string + mode + ",";
        });

        filters.preferences.map(preference => {
            string = string + preference + ",";
        });
        if(filters.preferences.length !== 0)string = string.slice(0, -1);

        string = string + "&page=1";
        navigate("/craveplay/games/" + string);

    }


    const handlePlatforms = (platform) => {
        let alreadyClicked = false;

        filters.platforms.map(console => {
            if(console === platform) {
                alreadyClicked = true;
            }
        });

        if(alreadyClicked) {
            const newList = filters.platforms.filter(console => console !== platform);
            setFilters({...filters, platforms: [...newList]})
        } else {
            setFilters({...filters, platforms: [...filters.platforms, platform]})
        }
    }

    const handleGenres = (chosenGenre) => {
        let alreadyClicked = false;

        filters.genres.map(genre => {
            if(genre === chosenGenre) {
                alreadyClicked = true;
            }
        });

        if(alreadyClicked) {
            const newList = filters.genres.filter(genre => genre !== chosenGenre);
            setFilters({...filters, genres: [...newList]})
        } else {
            setFilters({...filters, genres: [...filters.genres, chosenGenre]})
        }

    }

    const handleGameModes = (gameMode) => {
        let alreadyClicked = false;

        filters.gameModes.map(mode => {
            if(mode === gameMode) {
                alreadyClicked = true;
            }
        });

        if(alreadyClicked) {
            const newList = filters.gameModes.filter(mode => mode !== gameMode);
            setFilters({...filters, gameModes: [...newList]})
        } else {
            setFilters({...filters, gameModes: [...filters.gameModes, gameMode]})
        }

    }

    const handlePreferences = (chosenPreference) => {
        let alreadyClicked = false;

        filters.preferences.map(preference => {
            if(chosenPreference === preference) {
                alreadyClicked = true;
            }
        });

        if(alreadyClicked) {
            const newList = filters.preferences.filter(preference => preference !== chosenPreference);
            setFilters({...filters, preferences: [...newList]})
        } else {
            setFilters({...filters, preferences: [...filters.preferences, chosenPreference]})        }

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

            <div className="carousel" style={{opacity: started && "1", height: started && "80vh"}}>
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
            <div className="sliderButtons" style={{opacity: started && "1", height: !started && "0"}}>
                <button onClick={handleClick} id="backButton" className="proceedButton" type="button">Back</button>
                <button onClick={handleClick}  id="NextButton" className="proceedButton" type="button" >Next</button>
            </div>

        </main>
    );
}

export default FrontPage;