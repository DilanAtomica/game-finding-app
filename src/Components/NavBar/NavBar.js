import React from 'react';
import "./NavBar.css";
import TextField from '@mui/material/TextField';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";

function NavBar(props) {
    let navigate = useNavigate();

    return (
        <div className="navBar">
            <div className="navBarContent">
                <SportsEsportsIcon onClick={() => navigate("/")} id="logo" sx={{fontSize: "80px"}} />
                <div className="searchBox">
                    <input type="text" placeholder="Search" />
                    <SearchIcon id="searchIcon" />
                </div>
                <FavoriteIcon id="favoriteIcon" sx={{fontSize: "34px"}} />
            </div>
        </div>
    );
}

export default NavBar;