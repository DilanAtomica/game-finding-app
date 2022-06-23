import React, {useEffect, useState, useContext} from 'react';
import "./FavoritesPage.css";
import axios from "axios";
import GamesContainer from "../../Components/GamesPage/GamesContainer";
import {useNavigate} from "react-router-dom";
import {AppContext} from "../../App";

function FavoritesPage(props) {

    let navigate = useNavigate();
    const {activateLoader, deActiveLoader} = useContext(AppContext);

    const [favoriteGames, setFavoriteGames] = useState([]);

        useEffect(() => {
            if(favoriteGames === undefined) return
            activateLoader();
            window.scrollTo(0, 0);
            getFavoriteGamesData();
        }, []);

    const getFavoriteGamesData = async() => {
        try {
            const games = JSON.parse(localStorage.getItem("gameID"));

            if(games === null) {
                deActiveLoader();
                return
            }

            let list = [];

            await Promise.all(games.map(async game => {
                const API = "https://api.rawg.io/api/games/" + game + "?key=f8fa9d6de03342b6938543ce43d69dd6";
                const response = await axios.get(API);

                list.push(response.data);
            }));
            setFavoriteGames(list);
            deActiveLoader();

        } catch {
            console.log("Error")
        }
    };

    const getGameInfo = (gameID) => {
        navigate("/gameinfo/" + gameID);
    }

    return (
        <main className="favoritesPage">
            <section>
            <h1>Favorite Games</h1>
            <GamesContainer getGameInfo={getGameInfo} games={favoriteGames} width={"100%"} />
            </section>
        </main>
    );
}

export default FavoritesPage;