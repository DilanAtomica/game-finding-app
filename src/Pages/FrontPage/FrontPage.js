import React, {useEffect, useState} from 'react';
import "./FrontPage.css";
import axios from "axios";
import Opening from "../../Components/FrontPage/Opening";
import PlatformContainer from "../../Components/FrontPage/PlatformContainer";
import GenreContainer from "../../Components/FrontPage/GenreContainer";
import GameModeContainer from "../../Components/FrontPage/GameModeContainer";
import ImportanceContainer from "../../Components/FrontPage/ImportanceContainer";
import FinishContainer from "../../Components/FrontPage/FinishContainer";

function FrontPage(props) {

    const [platforms, setPlatforms] = useState([]);
    const [genres, setGenres] = useState([]);
    const [gameModes, setGameModes] = useState([]);
    const [preferences, setPreferences] = useState([]);


    const handlePlatforms = (platform) => {
        setPlatforms([...platforms, platform]);
        console.log(platforms)
    }

    const handleGenres = (genre) => {
        setGenres([...genres, genre]);
        console.log(genres)
    }

    const handleGameModes = (gameMode) => {
        setGameModes([...gameModes, gameMode]);
        console.log(gameModes)
    }

    const handlePreferences = (preference) => {
        setPreferences([...preferences, preference]);
        console.log(preferences)
    }

    useEffect(() => {
        const getData = async() => {
            const response = await axios.get("https://api.rawg.io/api/tags?key=0bdf9bbe0b33484f82b8ba3ae23aa065");
            console.log(response.data.results);
        }

        getData();
    }, []);

    return (
        <div className="frontPage">
           <Opening />

            <PlatformContainer handlePlatforms={handlePlatforms} />

            <GenreContainer handleGenres={handleGenres} />

           <GameModeContainer handleGameModes={handleGameModes} />

           <ImportanceContainer handlePreferences={handlePreferences} />

           <FinishContainer />
        </div>
    );
}

export default FrontPage;