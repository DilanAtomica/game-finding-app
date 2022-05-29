import React, {useEffect, useState} from 'react';
import "./GamesPage.css";
import axios from "axios";
import {useContext} from "react";
import {AppContext} from "../../App";
import Game from "../../Components/GamesPage/Game";

function GamesPage(props) {

    const {API, setAPI} = useContext(AppContext);
    const [games, setGame] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [pageList, setPageList] = useState([]);


    useEffect(() => {
        if(API === "") return;
        getGamesData();
        getPages();
    }, []);

    const getGamesData = async() => {
        const response = await axios.get(API);
        console.log(response.data.results);
        setGame(response.data.results);
    }

    const getPages = () => {
        const currentPageNumber = parseInt(API.split("=").pop());

        const pageList = [currentPageNumber - 4, currentPageNumber - 3, currentPageNumber - 2, currentPageNumber -1,
            currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, currentPageNumber + 3,
            currentPageNumber + 4];

        const filteredPageList = pageList.filter(pageNumber => pageNumber > 0);

        setCurrentPage(currentPageNumber);
        setPageList(filteredPageList);
    }

    return (

        <div className="gamesPage">
            <div className="gamesContainer">
                {games.map(game => (

                    <Game key={game.id} id={game.id} name={game.name} background={game.background_image}/>
                ))}
            </div>
            <div className="gamesPages">
                {pageList.map(page => (
                    <div key={page} style={{backgroundColor: page === currentPage && "lightgray"}} className="pagesBox">{page}</div>
                ))}

            </div>
        </div>
    );
}

export default GamesPage;