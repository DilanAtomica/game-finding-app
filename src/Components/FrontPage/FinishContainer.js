import React from 'react';
import Button from "@mui/material/Button";
import "./FinishContainer.css";

function FinishContainer({createAPI}) {

    const handleClick = () => {
        createAPI();
    }

    return (
        <div className="finishContainer" id="phaseFive">
            <h1>You are now ready to begin your search!</h1>
            <Button onClick={handleClick} variant="contained">Find the perfect game</Button>
        </div>
    );
}

export default FinishContainer;