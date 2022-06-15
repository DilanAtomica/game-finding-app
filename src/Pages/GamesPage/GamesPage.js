import React, {useEffect, useState} from 'react';
import "./GamesPage.css";
import axios from "axios";
import {useContext} from "react";
import {AppContext} from "../../App";
import Pagination from "../../Components/GamesPage/Pagination";
import GamesContainer from "../../Components/GamesPage/GamesContainer";
import {useNavigate, useParams} from "react-router-dom";

function GamesPage(props) {

    let navigate = useNavigate();
    let { apiUrl } = useParams();
    const {loading, activateLoader, deActiveLoader} = useContext(AppContext);

    const [games, setGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageList, setPageList] = useState([]);

    useEffect(() => {
        if(window.location.href.slice(-1) === "?") navigate(-1);
        if(apiUrl === undefined) return
        activateLoader();
        window.scrollTo(0, 0);
        getGamesData();
    }, [apiUrl]);

    const getGamesData = async() => {
        try {
            const API = "https://api.rawg.io/api/games" + "?key=f8fa9d6de03342b6938543ce43d69dd6" + "&page_size=30" + apiUrl;
            console.log(API);
            const response = await axios.get(API);
            const results = response.data.results;
            results.length === 0 && navigate("/craveplay/noresults");

            setGames(results);
            getPages(results.length);
            deActiveLoader();
        } catch {
            console.log("Error")
            navigate("/craveplay/noresults");
        }
    }

    const getPages = (pageSize) => {
        const currentPageNumber = parseInt(apiUrl.split("=").pop()); //Gets the characters after the last "=" which shows page number

        let pageList;

        if(pageSize < 30) {
            pageList = [currentPageNumber - 4, currentPageNumber - 3, currentPageNumber - 2, currentPageNumber -1,
                currentPageNumber];
        } else {
            pageList = [currentPageNumber - 4, currentPageNumber - 3, currentPageNumber - 2, currentPageNumber -1,
                currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, currentPageNumber + 3,
                currentPageNumber + 4];
        }

        const filteredPageList = pageList.filter(pageNumber => pageNumber > 0);

        setCurrentPage(currentPageNumber);
        setPageList(filteredPageList);
    };

    const changePage = (e) => {
        let newAPI;
        if(e.currentTarget.className === "changePage") {
            newAPI = apiUrl.replace("&page=" + currentPage.toString(), "&page=" + e.target.innerText); // replaces page attribute in API to chosen page
        }
        else if( e.currentTarget.className === "nextPage") {
            const nextPageNumber = parseInt(e.currentTarget.id) + 1;
            newAPI = apiUrl.replace("&page=" + currentPage.toString(), "&page=" + nextPageNumber);
        }
        else if( e.currentTarget.className === "prevPage") {
            const prevPageNumber = parseInt(e.currentTarget.id) - 1;
            newAPI = apiUrl.replace("&page=" + currentPage.toString(), "&page=" + prevPageNumber);
        }
        navigate("/craveplay/games/" + newAPI);
    };

    const getGameInfo = (gameID) => {
        navigate("/craveplay/gameinfo/" + gameID);
    }

    return (
        <main className="gamesPage" style={{display: loading && "none"}}>
            <Pagination pageList={pageList} changePage={changePage} currentPage={currentPage} games={games} />

            <GamesContainer getGameInfo={getGameInfo} games={games} width={"50%"} />

            <Pagination pageList={pageList} changePage={changePage} currentPage={currentPage} games={games} />
        </main>
    );
}

export default GamesPage;