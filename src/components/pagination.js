import React from 'react'
import "./pagination.css"

const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumbers = [];

    for (let i=1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
            <ul className = "pagination">
            {pageNumbers.map(number => 
                <div className = "pagination-item" key={number}   onClick={() => { window.scrollTo(0,0); paginate(number)}}>{number}</div>)}
            </ul>   
    )
}

export default Pagination


