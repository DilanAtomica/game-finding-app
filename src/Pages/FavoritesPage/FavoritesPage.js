import React, {useEffect, useState, useContext} from 'react';
import "./FavoritesPage.css";
import axios from "axios";
import GamesContainer from "../../Components/GamesPage/GamesContainer";
import {useNavigate} from "react-router-dom";
import {AppContext} from "../../App";

function FavoritesPage(props) {

    let navigate = useNavigate();
    const {showLoader} = useContext(AppContext);

    const [favoriteGames, setFavoriteGames] = useState([]);

        useEffect(() => {
            if(favoriteGames === undefined) return
            showLoader();
            window.scrollTo(0, 0);
            getFavoriteGamesData();
        }, []);

    const getFavoriteGamesData = async() => {
        try {
            const games = JSON.parse(localStorage.getItem("gameID"));

            let list = [];

            await Promise.all(games.map(async game => {
                const API = "https://api.rawg.io/api/games/" + game + "?key=0bdf9bbe0b33484f82b8ba3ae23aa065";
                const response = await axios.get(API);

                list.push(response.data);
            }));
            setFavoriteGames(list);

        } catch {
            console.log("Error")
        }
    };

    const getGameInfo = (gameID) => {
        navigate("/gameinfo/" + gameID);
    }

    return (
        <div className="favoritesPage">
            <h2>Favorite Games</h2>

            <GamesContainer getGameInfo={getGameInfo} games={favoriteGames} width={"100%"} />
        </div>
    );
}

export default FavoritesPage;