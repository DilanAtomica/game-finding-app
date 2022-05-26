import React, {useEffect, useState} from 'react';
import "./FrontPage.css";
import {motion} from "framer-motion";
import axios from "axios";
import Button from '@mui/material/Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Opening from "../../Components/FrontPage/Opening";
import PlatformContainer from "../../Components/FrontPage/PlatformContainer";
import GenreContainer from "../../Components/FrontPage/GenreContainer";
import GameModeContainer from "../../Components/FrontPage/GameModeContainer";
import ImportanceContainer from "../../Components/FrontPage/ImportanceContainer";
import FinishContainer from "../../Components/FrontPage/FinishContainer";

function FrontPage(props) {

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

            <PlatformContainer />

            <GenreContainer />

           <GameModeContainer />

           <ImportanceContainer />

           <FinishContainer />
        </div>
    );
}

export default FrontPage;