import React from 'react';
import "./NavBar.css";
import TextField from '@mui/material/TextField';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FavoriteIcon from '@mui/icons-material/Favorite';

function NavBar(props) {
    return (
        <div className="navBar">
            <div className="navBarContent">
                <SportsEsportsIcon id="logo" sx={{fontSize: "80px"}} />
                <TextField color="warning" id="searchBox" label="Search" variant="outlined" />
                <FavoriteIcon id="favoriteIcon" sx={{fontSize: "34px"}} />
            </div>
        </div>
    );
}

export default NavBar;