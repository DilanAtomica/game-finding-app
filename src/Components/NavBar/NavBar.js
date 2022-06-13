import React, {useState} from 'react';
import "./NavBar.css";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useContext} from "react";
import {AppContext} from "../../App";

function NavBar(props) {

    const [searchInput, setSearchInput] = useState("");

    let navigate = useNavigate();
    const {theme, toggleTheme} = useContext(AppContext);

    const handleSubmit = () => {
        navigate("/games/&search=" + searchInput + "&page=1");
    }

    return (
        <header>
            <nav>
                <button type="button"><SportsEsportsIcon onClick={() => navigate("/")} id="logo" sx={{fontSize: "80px"}} /></button>
                <form onSubmit={handleSubmit} className="searchBox">
                    <input type="text" placeholder="Search for games"  onChange={(e) => setSearchInput(e.target.value)}/>
                    <button type="submit"><SearchIcon id="searchIcon" /></button>
                </form>
                <div className="navRightSide">
                    <button type="button"><FavoriteIcon onClick={() => navigate("/favorites")} id="favoriteIcon"/></button>
                    {theme === "light"
                        ? <DarkModeIcon id="themeToggler" style={{color: "black"}} onClick={() => toggleTheme()}/>
                        : <LightModeIcon id="themeToggler" style={{color: "#FFCC32"}} onClick={() => toggleTheme()} />}
                </div>
            </nav>
        </header>
    );
}

export default NavBar;