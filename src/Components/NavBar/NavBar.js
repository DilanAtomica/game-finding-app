import React from 'react';
import "./NavBar.css";
import TextField from '@mui/material/TextField';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FavoriteIcon from '@mui/icons-material/Favorite';

function NavBar(props) {
    return (
        <div className="navBar">
            <SportsEsportsIcon id="logo" sx={{fontSize: "80px"}} />
            <div className="rightSide">
                <FavoriteIcon id="favoriteIcon" sx={{fontSize: "34px"}} />
                <TextField color="warning" id="searchBox" label="Search" variant="outlined" />
            </div>
        </div>
    );
}

export default NavBar;