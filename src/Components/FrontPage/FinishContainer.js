import React from 'react';
import Button from "@mui/material/Button";
import "./FinishContainer.css";

function FinishContainer(props) {
    return (
        <div className="finishContainer">
            <h1>You are now ready to begin your search!</h1>
            <Button variant="contained">Find the perfect game</Button>
        </div>
    );
}

export default FinishContainer;