import React, {useState} from 'react';
import "./NavBar.css";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";






function NavBar(props) {

    const [searchInput, setSearchInput] = useState("");

    let navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/games/&search=" + searchInput + "&page=1");
    }

    return (
        <header>
            <nav>
                <button type="button"><SportsEsportsIcon onClick={() => navigate("/")} id="logo" sx={{fontSize: "80px"}} /></button>
                <form onSubmit={handleSubmit} className="searchBox">
                    <input type="text" placeholder="Search"  onChange={(e) => setSearchInput(e.target.value)}/>
                    <button type="submit"><SearchIcon id="searchIcon" /></button>
                </form>
                <button type="button"><FavoriteIcon onClick={() => navigate("/favorites")} id="favoriteIcon" sx={{fontSize: "34px"}} /></button>
            </nav>
        </header>
    );
}

export default NavBar;