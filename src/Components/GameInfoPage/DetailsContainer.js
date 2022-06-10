import React from 'react';
import "./DetailsContainer.css";

function DetailsContainer({release, genres, developers}) {
    return (
            <section className="detailsContainer" style={{marginTop: "1rem"}}>
                <div className="detailsBox">
                    <h2>Released</h2>
                    <ul className="tags">
                        <li>{release}</li>
                    </ul>
                </div>
                <div className="detailsBox"  style={{display: genres?.length <= 0 && "none"}}>
                    <h2>Genres</h2>
                    <ul className="tags">
                        {genres?.map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="detailsBox" style={{display: developers?.length <= 0 && "none"}}>
                    <h2>Developers</h2>
                    <ul className="tags">
                    {developers?.map(developer => (
                        <li key={developer.id}>{developer.name}</li>
                    ))}
                    </ul>
                </div>
            </section>
    );
}

export default DetailsContainer;