import React from 'react';
import "./NoResults.css";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

function NoResults({games}) {
    let navigate = useNavigate();

    return (
        <div className="noResults">
            <h1>Sorry, but we could not find anything that met your requirements... 😔 </h1>
            <Button variant="contained" onClick={() => navigate("/")}>Back to homepage</Button>
        </div>
    );
}

export default NoResults;