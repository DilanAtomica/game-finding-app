import React from 'react';
import "./ImportanceContainer.css";
import ImportanceButton from "./ImportanceButton";


function ImportanceContainer({handlePreferences}) {

    return (
        <section className="importanceContainer" id="phaseFour">
            <h1>Choose preferences</h1>
            <ul className="importanceOptions">
                <ImportanceButton handlePreferences={handlePreferences} idName="great-soundtrack" color="#00ABBD" importanceName="Great Soundtrack" />
                <ImportanceButton handlePreferences={handlePreferences} idName="atmospheric" color="#0099DD" importanceName="Atmospheric" />
                <ImportanceButton handlePreferences={handlePreferences} idName="full-controller-support" color="#FF9933" importanceName="Controller support" />
            </ul>

        </section>
    );
}

export default ImportanceContainer;