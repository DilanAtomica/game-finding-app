import React from 'react';
import "./Footer.css";
import {useContext} from "react";
import {AppContext} from "../../App";

function Footer(props) {

    const {loading} = useContext(AppContext);

    return (
        <footer style={{display: loading && "none"}}>
            <p>Big thanks to RAWG for supplying the data on all the games. You can find them at <a href="https://rawg.io/">Rawg.io</a></p>
        </footer>
    );
}

export default Footer;