import React from 'react';
import "./Pagination.css";

function Pagination({pageList, changePage, currentPage, games}) {

    const handleClick = (e) => {
        changePage(e);
    }

    return (
        <div className="pagination" style={{display: games.length === 0 && "none"}}>
            {pageList.map(page => (
                <button key={page} type="button">
                    <div onClick={handleClick} style={{backgroundColor: page === currentPage && "lightgray", color: page === currentPage && "black"}} className="pagesBox">
                        {page}</div>
                </button>
            ))}
        </div>
    );
}

export default Pagination;