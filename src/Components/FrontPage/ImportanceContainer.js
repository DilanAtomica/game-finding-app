import React from 'react';
import "./ImportanceContainer.css";
import ImportanceButton from "./ImportanceButton";


function ImportanceContainer({handlePreferences}) {

    return (
        <section className="importanceContainer" id="phaseFour">
            <h1>Choose preferences</h1>
            <ul className="importanceOptions">
                <ImportanceButton handlePreferences={handlePreferences} idName="great-soundtrack" importanceName="Great Soundtrack" />
                <ImportanceButton handlePreferences={handlePreferences} idName="atmospheric" importanceName="Atmospheric" />
                <ImportanceButton handlePreferences={handlePreferences} idName="full-controller-support" importanceName="Controller support" />
            </ul>

        </section>
    );
}

export default ImportanceContainer;