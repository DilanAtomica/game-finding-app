import React from 'react';
import "./GameInfo.css";
import { useParams } from "react-router-dom";

function GameInfo(props) {
    let { id } = useParams();


    return (
        <div className="gameInfo">
            <h1>{id}</h1>
        </div>
    );
}

export default GameInfo;