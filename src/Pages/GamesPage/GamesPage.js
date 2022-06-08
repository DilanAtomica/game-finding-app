import React, {useEffect, useState} from 'react';
import "./GamesPage.css";
import axios from "axios";
import {useContext} from "react";
import {AppContext} from "../../App";
import Pagination from "../../Components/GamesPage/Pagination";
import GamesContainer from "../../Components/GamesPage/GamesContainer";
import {useNavigate, useParams} from "react-router-dom";
import NoResults from "../../Components/GamesPage/NoResults";

function GamesPage(props) {

    let navigate = useNavigate();
    let { apiUrl } = useParams();
    const {showLoader, loading} = useContext(AppContext);

    const [games, setGames] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageList, setPageList] = useState([]);

    useEffect(() => {
        if(apiUrl === undefined) return
        showLoader();
        window.scrollTo(0, 0);
        getGamesData();
        getPages();
    }, [apiUrl]);

    const getGamesData = async() => {
        try {
            const API = "https://api.rawg.io/api/games?key=0bdf9bbe0b33484f82b8ba3ae23aa065&page_size=30" + apiUrl;
            console.log(API);
            const response = await axios.get(API);
            console.log(response.data.results);
            setGames(response.data.results);
        } catch {
            console.log("Error")
        }
    }

    const getPages = () => {
        const currentPageNumber = parseInt(apiUrl.split("=").pop()); //Gets the characters after the last "=" which shows page number

        const pageList = [currentPageNumber - 4, currentPageNumber - 3, currentPageNumber - 2, currentPageNumber -1,
            currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, currentPageNumber + 3,
            currentPageNumber + 4];

        const filteredPageList = pageList.filter(pageNumber => pageNumber > 0);

        setCurrentPage(currentPageNumber);
        setPageList(filteredPageList);
    };

    const changePage = (e) => {
        const newAPI = apiUrl.replace("&page=" + currentPage.toString(), "&page=" + e.target.innerText); // replaces page attribute in API to chosen page
        navigate("/games/" + newAPI);
    };

    const getGameInfo = (gameID) => {
        navigate("/gameinfo/" + gameID);
    }

    return (
        <div className="gamesPage" style={{display: loading && "none"}}>
            <NoResults games={games}/>
            <Pagination pageList={pageList} changePage={changePage} currentPage={currentPage} games={games} />

            <GamesContainer getGameInfo={getGameInfo} games={games} width={"50%"} />

            <Pagination pageList={pageList} changePage={changePage} currentPage={currentPage} games={games} />
        </div>
    );
}

export default GamesPage;