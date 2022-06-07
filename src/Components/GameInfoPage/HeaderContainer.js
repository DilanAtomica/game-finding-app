import React from 'react';
import "./HeaderContainer.css";

function HeaderContainer({name, background, description}) {
    return (
        <div className="headerContainer">
            <h1>{name}</h1>
            <img src={background} />
            <h2>Description</h2>
            <p style={{textAlign: "start"}}>{description}</p>
        </div>

    );
}

export default HeaderContainer;