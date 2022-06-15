import React from 'react';
import "./GenreContainer.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import GenreButton from "./GenreButton";
import {Link} from "react-scroll";

function GenreContainer({handleGenres}) {

    return (
        <section className="genreContainer" id="phaseTwo">
            <h1>Choose genres</h1>
            <ul className="genres">
                <ul className="genresBox">
                    <GenreButton handleGenres={handleGenres} idName="sports" color="#0C7C59" genreName="Sports" />
                    <GenreButton handleGenres={handleGenres} idName="action" color="#06D6A0" genreName="Action" />
                    <GenreButton handleGenres={handleGenres} idName="adventure" color="#1B9AAA" genreName="Adventure" />
                    <GenreButton handleGenres={handleGenres} idName="rpg" color="#EF476F" genreName="RPG" />
                    <GenreButton handleGenres={handleGenres} idName="strategy" color="#FFC43D" genreName="Strategy" />
                </ul>

                <ul className="genresBox">
                    <GenreButton handleGenres={handleGenres} idName="shooter" color="#F39237" genreName="Shooter" />
                    <GenreButton handleGenres={handleGenres} idName="casual" color="#BF1363" genreName="Casual" />
                    <GenreButton handleGenres={handleGenres} idName="simulation" color="#0E79B2" genreName="Simulation" />
                    <GenreButton handleGenres={handleGenres} idName="puzzle" color="#191923" genreName="Puzzle" />
                    <GenreButton handleGenres={handleGenres} idName="arcade" color="#6A0F49" genreName="Arcade" />
                </ul>

                <ul className="genresBox">
                    <GenreButton handleGenres={handleGenres} idName="platformer" color="#5DD9C1" genreName="Platformer" />
                    <GenreButton handleGenres={handleGenres} idName="racing" color="#F51AA4" genreName="Racing" />
                    <GenreButton handleGenres={handleGenres} idName="" color="#B084CC" genreName="MMO" />
                    <GenreButton handleGenres={handleGenres} idName="" color="#665687" genreName="MMORPG" />
                    <GenreButton handleGenres={handleGenres} idName="fighting" color="#190933" genreName="Fighting" />
                </ul>

                <ul className="genresBox">
                    <GenreButton handleGenres={handleGenres} idName="family" color="#003844" genreName="Family" />
                    <GenreButton handleGenres={handleGenres} idName="board-games" color="#006C67" genreName="Board Games" />
                    <GenreButton handleGenres={handleGenres} idName="educational" color="#F194B4" genreName="Educational" />
                    <GenreButton handleGenres={handleGenres} idName="card" color="#FFB100" genreName="Card" />
                    <GenreButton handleGenres={handleGenres} idName="indie" color="#A31621" genreName="Indie" />
                </ul>
            </ul>
            <Link to="phaseThree" spy={true} smooth={true} offset={50} duration={1000}><button type="button" id="proceedButton">Proceed</button></Link>
        </section>
    );
}

export default GenreContainer;