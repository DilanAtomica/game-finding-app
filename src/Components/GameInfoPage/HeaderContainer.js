import React from 'react';
import "./HeaderContainer.css";
import questionMark from "../../Images/Links/questionMark.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {useEffect, useState} from "react";

function HeaderContainer({name, background, description, releaseDate, metaScore, id}) {

    const [hearted, setHearted] = useState(false);

    useEffect(() => {
        updateHeart();
    }, [hearted]);

    const updateHeart = () => {
        let games = JSON.parse(localStorage.getItem("gameID"));

        if(games !== null) {
            if(games.includes(id)) setHearted(true);
        }
    }

    const handleFavoriteClick = ()=> {
        let games = JSON.parse(localStorage.getItem("gameID"));
        if(games === null || games.length === 0) {
            games = [id];
        }
        else if(games.includes(id)) {
            games = games.filter(game => game !== id);
        } else {
            games.push(id);
        }
        localStorage.setItem("gameID", JSON.stringify(games));
        setHearted(!hearted);
    }
    return (
        <section className="headerContainer">
            <h1>{name}</h1>
            <img src={background ? background : questionMark} alt={name} />
            <ul className="headerContainerInfoExtension">
                <li className="releaseYear">
                    <h2>{releaseDate?.substring(0, 4)}</h2>
                </li>
                <li className="heartIcons">
                    {hearted
                        ? <button type="button"><FavoriteIcon className="heartFullIcon" onClick={handleFavoriteClick}/></button>
                        : <button type="button"><FavoriteBorderIcon className="heartBorderIcon"  onClick={handleFavoriteClick} /></button>}
                </li>
                <li className="metaScore">
                    <h2>{metaScore ? metaScore : "?"}</h2>
                </li>
            </ul>
            <h2>Description</h2>
            <p style={{textAlign: "start"}}>{description}</p>
        </section>

    );
}

export default HeaderContainer;