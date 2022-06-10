import React from 'react';
import "./Pagination.css";

function Pagination({pageList, changePage, currentPage, games}) {

    const handleClick = (e) => {
        changePage(e);
    }

    return (
        <nav className="pagination" style={{display: games.length === 0 && "none"}}>
            <ul>
            {pageList.map(page => (
                    <li><button onClick={handleClick} style={{backgroundColor: page === currentPage && "lightgray", color: page === currentPage && "black"}} className="pagesBox">
                        <h2>{page}</h2>
                    </button></li>
            ))}
            </ul>
        </nav>
    );
}

export default Pagination;