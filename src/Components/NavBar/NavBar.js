import React, {useState} from 'react';
import "./NavBar.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useContext} from "react";
import {AppContext} from "../../App";
import Logo from "../../Images/Logo/logoCravePlay.PNG";
import LogoSmall from "../../Images/Logo/logoSmallCravePlay.png";

function NavBar(props) {

    const [searchInput, setSearchInput] = useState("");

    let navigate = useNavigate();
    const {theme, toggleTheme, userWidth} = useContext(AppContext);

    const handleSubmit = () => {
        navigate("/games/&search=" + searchInput + "&page=1");
    }

    return (
        <header>
            <nav>
                <button onClick={() => navigate("/")} type="button">
                    {userWidth < 400 ? <img id="logoSmall" alt="CravePlay logo" src={LogoSmall} /> : <img id="logo" alt="CravePlay logo" src={Logo} />}
                </button>
                <form onSubmit={handleSubmit} className="searchBox">
                    <input type="text" placeholder="Search for games"  onChange={(e) => setSearchInput(e.target.value)} required/>
                    <button type="submit"><SearchIcon id="searchIcon" /></button>
                </form>
                <div className="navRightSide">
                    <button  onClick={() => navigate("/favorites")} type="button"><FavoriteIcon id="favoriteIcon"/></button>
                    <button onClick={() => toggleTheme()}>{theme === "light"
                        ? <DarkModeIcon id="themeToggler" style={{color: "black"}} />
                        : <LightModeIcon id="themeToggler" style={{color: "#FFCC32"}}/>}</button>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;