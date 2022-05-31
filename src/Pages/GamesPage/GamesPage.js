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

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if(API === "") return;
        window.scrollTo(0, 0);
        getGamesData();
        getPages();
    }, [toggle]);

    const getGamesData = async() => {
        const response = await axios.get(API);
        console.log(API)
        console.log(response.data.results);
        setGame(response.data.results);
    }

    const getPages = () => {
        const currentPageNumber = parseInt(API.split("=").pop()); //Gets the characters after the last "=" which shows page number

        const pageList = [currentPageNumber - 4, currentPageNumber - 3, currentPageNumber - 2, currentPageNumber -1,
            currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, currentPageNumber + 3,
            currentPageNumber + 4];

        const filteredPageList = pageList.filter(pageNumber => pageNumber > 0);

        setCurrentPage(currentPageNumber);
        setPageList(filteredPageList);
    }

    const changePage = (e) => {
        const newAPI = API.replace("&page=" + currentPage.toString(), "&page=" + e.target.innerText); // replaces page attribute in API to chosen page
        setAPI(newAPI);
        setToggle(!toggle);

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
                    <div onClick={changePage} key={page} style={{backgroundColor: page === currentPage && "lightgray"}} className="pagesBox">{page}</div>
                ))}
            </div>
        </div>
    );
}

export default GamesPage;