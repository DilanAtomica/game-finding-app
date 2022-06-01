import React, {useEffect, useState} from 'react';
import "./GamesPage.css";
import axios from "axios";
import {useContext} from "react";
import {AppContext} from "../../App";
import Pagination from "../../Components/GamesPage/Pagination";
import GamesContainer from "../../Components/GamesPage/GamesContainer";

function GamesPage(props) {

    const {API, setAPI, showLoader} = useContext(AppContext);

    const [games, setGame] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageList, setPageList] = useState([]);

    useEffect(() => {
        if(API === "") return;
        showLoader();
        window.scrollTo(0, 0);
        getGamesData();
        getPages();
    }, [API]);

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