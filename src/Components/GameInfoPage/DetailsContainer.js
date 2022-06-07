import React from 'react';
import "./DetailsContainer.css";

function DetailsContainer({release, genres, developers}) {
    return (
            <div className="detailsContainer" style={{marginTop: "1rem"}}>
                <div className="detailsBox">
                    <h2>Released</h2>
                    <div className="tags">
                        <p>{release}</p>
                    </div>
                </div>
                <div className="detailsBox"  style={{display: genres?.length <= 0 && "none"}}>
                    <h2>Genres</h2>
                    <div className="tags">
                        {genres?.map(genre => (
                            <p key={genre.id}>{genre.name}</p>
                        ))}
                    </div>
                </div>
                <div className="detailsBox" style={{display: developers?.length <= 0 && "none"}}>
                    <h2>Developers</h2>
                    <div className="tags">
                    {developers?.map(developer => (
                        <p key={developer.id}>{developer.name}</p>
                    ))}
                    </div>
                </div>
            </div>
    );
}

export default DetailsContainer;