import React from 'react';
import "./NavBar.css";
import TextField from '@mui/material/TextField';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';

function NavBar(props) {
    return (
        <div className="navBar">
            <div className="navBarContent">
                <SportsEsportsIcon id="logo" sx={{fontSize: "80px"}} />
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