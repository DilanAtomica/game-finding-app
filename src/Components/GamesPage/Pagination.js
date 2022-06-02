import React from 'react';
import "./Pagination.css";
import {useContext} from "react";
import {AppContext} from "../../App";

function Pagination({pageList, changePage, currentPage}) {

    const {loading} = useContext(AppContext);

    const handleClick = (e) => {
        changePage(e);
    }

    return (
        <div className="pagination" style={{display: loading && "none"}}>
            {pageList.map(page => (
                <div onClick={handleClick} key={page} style={{backgroundColor: page === currentPage && "lightgray", color: page === currentPage && "black"}} className="pagesBox">{page}</div>
            ))}
        </div>
    );
}

export default Pagination;