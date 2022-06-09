import React, {useEffect, useContext} from 'react';
import "./NoResultsPage.css";
import NoResults from "../../Components/NoResultsPage/NoResults";
import {AppContext} from "../../App";

function NoResultsPage(props) {

    const {deActiveLoader} = useContext(AppContext);

    useEffect(() => {
        deActiveLoader();
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="noResultsPage">
            <NoResults />
        </div>
    );
}

export default NoResultsPage;