import React from 'react';
import Button from "@mui/material/Button";
import "./FinishContainer.css";
import { useNavigate } from "react-router-dom";

function FinishContainer({createAPI}) {

    let navigate = useNavigate();

    const handleClick = () => {
        createAPI();
        navigate("/games");
    }

    return (
        <div className="finishContainer">
            <h1>You are now ready to begin your search!</h1>
            <Button onClick={handleClick} variant="contained">Find the perfect game</Button>
        </div>
    );
}

export default FinishContainer;