import React from 'react';
import "./HeaderContainer.css";
import questionMark from "../../Images/Links/questionMark.png";

function HeaderContainer({name, background, description}) {
    return (
        <section className="headerContainer">
            <h1>{name}</h1>
            <img src={background ? background : questionMark} alt={name} />
            <h2>Description</h2>
            <p style={{textAlign: "start"}}>{description}</p>
        </section>

    );
}

export default HeaderContainer;