import React, {useContext, useEffect, useState} from 'react';
import "./FrontPage.css";
import axios from "axios";
import Opening from "../../Components/FrontPage/Opening";
import PlatformContainer from "../../Components/FrontPage/PlatformContainer";
import GenreContainer from "../../Components/FrontPage/GenreContainer";
import GameModeContainer from "../../Components/FrontPage/GameModeContainer";
import ImportanceContainer from "../../Components/FrontPage/ImportanceContainer";
import FinishContainer from "../../Components/FrontPage/FinishContainer";
import {AppContext} from "../../App";
import ProgressBar from "../../Components/FrontPage/ProgressBar";

function FrontPage(props) {

    const [platforms, setPlatforms] = useState([]);
    const [genres, setGenres] = useState([]);
    const [gameModes, setGameModes] = useState([]);
    const [preferences, setPreferences] = useState([]);


    const {setAPI} = useContext(AppContext);

    const createAPI = () => {
        let string = "https://api.rawg.io/api/games?key=0bdf9bbe0b33484f82b8ba3ae23aa065&page_size=39";

        if( genres.length !== 0) string = string + "&genres=";
        genres.map(genre => {
            string = string + genre + ","
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
        setAPI(string);

        console.log(string);
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

    useEffect(() => {
        const getData = async() => {
            const response = await axios.get("https://api.rawg.io/api/games?key=0bdf9bbe0b33484f82b8ba3ae23aa065");
            console.log(response.data.results);
        }

        getData();
    }, []);

    return (
        <div className="frontPage">
            <ProgressBar />
           <Opening />

            <PlatformContainer handlePlatforms={handlePlatforms} />

            <GenreContainer handleGenres={handleGenres} />

           <GameModeContainer handleGameModes={handleGameModes} />

           <ImportanceContainer handlePreferences={handlePreferences} />

           <FinishContainer createAPI={createAPI} />
        </div>
    );
}

export default FrontPage;