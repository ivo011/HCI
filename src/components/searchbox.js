import React from 'react';

const SearchBox = ({callback}) => {   
    
    return (
        <input className = "form-control search-bar"
            type = "search"
            placeholder = "Search"
            // Kad se pocne pisat pokrece se funkcija iz news komponente
            onChange = {callback}
        ></input>
    )
}

export default SearchBox;