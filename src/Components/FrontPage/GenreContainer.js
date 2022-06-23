import React from 'react';
import "./GenreContainer.css";
import GenreButton from "./GenreButton";

function GenreContainer({handleGenres}) {

    return (
        <section className="genreContainer" id="phaseTwo">
            <h1>Choose genres</h1>
            <ul className="genres">
                <ul className="genresBox">
                    <GenreButton handleGenres={handleGenres} idName="sports" genreName="Sports" />
                    <GenreButton handleGenres={handleGenres} idName="action" genreName="Action" />
                    <GenreButton handleGenres={handleGenres} idName="adventure" genreName="Adventure" />
                    <GenreButton handleGenres={handleGenres} idName="rpg" genreName="RPG" />
                    <GenreButton handleGenres={handleGenres} idName="strategy" genreName="Strategy" />
                </ul>

                <ul className="genresBox">
                    <GenreButton handleGenres={handleGenres} idName="shooter" genreName="Shooter" />
                    <GenreButton handleGenres={handleGenres} idName="casual" genreName="Casual" />
                    <GenreButton handleGenres={handleGenres} idName="simulation" genreName="Simulation" />
                    <GenreButton handleGenres={handleGenres} idName="puzzle" genreName="Puzzle" />
                    <GenreButton handleGenres={handleGenres} idName="arcade" genreName="Arcade" />
                </ul>

                <ul className="genresBox">
                    <GenreButton handleGenres={handleGenres} idName="platformer" genreName="Platformer" />
                    <GenreButton handleGenres={handleGenres} idName="racing" genreName="Racing" />
                    <GenreButton handleGenres={handleGenres} idName="" genreName="MMO" />
                    <GenreButton handleGenres={handleGenres} idName="" genreName="MMORPG" />
                    <GenreButton handleGenres={handleGenres} idName="fighting" genreName="Fighting" />
                </ul>

                <ul className="genresBox">
                    <GenreButton handleGenres={handleGenres} idName="family" genreName="Family" />
                    <GenreButton handleGenres={handleGenres} idName="board-games" genreName="Board Games" />
                    <GenreButton handleGenres={handleGenres} idName="educational" genreName="Educational" />
                    <GenreButton handleGenres={handleGenres} idName="card" genreName="Card" />
                    <GenreButton handleGenres={handleGenres} idName="indie" genreName="Indie" />
                </ul>
            </ul>
        </section>
    );
}

export default GenreContainer;