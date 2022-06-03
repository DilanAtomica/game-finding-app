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
    const {showLoader} = useContext(AppContext);

    const [games, setGame] = useState([]);
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
        const API = "https://api.rawg.io/api/games?key=0bdf9bbe0b33484f82b8ba3ae23aa065&page_size=30" + apiUrl;
        console.log(API);
        const response = await axios.get(API);
        console.log(response.data.results);
        setGame(response.data.results);
    }

    const getPages = () => {
        const currentPageNumber = parseInt(apiUrl.split("=").pop()); //Gets the characters after the last "=" which shows page number

        const pageList = [currentPageNumber - 4, currentPageNumber - 3, currentPageNumber - 2, currentPageNumber -1,
            currentPageNumber, currentPageNumber + 1, currentPageNumber + 2, currentPageNumber + 3,
            currentPageNumber + 4];

        const filteredPageList = pageList.filter(pageNumber => pageNumber > 0);

        setCurrentPage(currentPageNumber);
        setPageList(filteredPageList);
    }

    const changePage = (e) => {
        const newAPI = apiUrl.replace("&page=" + currentPage.toString(), "&page=" + e.target.innerText); // replaces page attribute in API to chosen page
        navigate("/games/" + newAPI);
    };

    return (
        <div className="gamesPage">
            <Pagination pageList={pageList} changePage={changePage} currentPage={currentPage} />

            <GamesContainer games={games} />

            <Pagination pageList={pageList} changePage={changePage} currentPage={currentPage} />
        </div>
    );
}

export default GamesPage;