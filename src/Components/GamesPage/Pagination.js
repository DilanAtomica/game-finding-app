import React from 'react';
import "./Pagination.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Pagination({pageList, changePage, nextPage, prevPage, currentPage, games}) {

    const handleClick = (e) => {
        changePage(e);
    }

    return (
        <nav className="pagination" style={{display: games.length === 0 && "none"}}>
            <ul>
                {currentPage > 1 && <li><button onClick={handleClick} id={currentPage} className="prevPage"><ArrowBackIcon /></button></li>}

            {pageList.map(page => (
                    <li key={page}><button onClick={handleClick} className="changePage" style={{backgroundColor: page === currentPage && "lightgray", color: page === currentPage && "black"}}>
                        {page}
                    </button></li>
            ))}
                <li><button onClick={handleClick} id={currentPage} className="nextPage"><ArrowForwardIcon /></button></li>
            </ul>
        </nav>
    );
}

export default Pagination;