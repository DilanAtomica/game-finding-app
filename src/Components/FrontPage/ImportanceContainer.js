import React from 'react';
import {motion} from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./ImportanceContainer.css";
import ImportanceButton from "./ImportanceButton";
import {Link} from "react-scroll";


function ImportanceContainer({handlePreferences}) {

    return (
        <section className="importanceContainer" id="phaseFour">
            <h1>Choose preferences</h1>
            <ul className="importanceOptions">
                <ImportanceButton handlePreferences={handlePreferences} idName="great-soundtrack" color="#00ABBD" importanceName="Great Soundtrack" />
                <ImportanceButton handlePreferences={handlePreferences} idName="atmospheric" color="#0099DD" importanceName="Atmospheric" />
                <ImportanceButton handlePreferences={handlePreferences} idName="full-controller-support" color="#FF9933" importanceName="Controller support" />
            </ul>
            <Link to="phaseFive" spy={true} smooth={true} offset={50} duration={1000}><button type="button" id="proceedButton">Proceed</button></Link>

        </section>
    );
}

export default ImportanceContainer;