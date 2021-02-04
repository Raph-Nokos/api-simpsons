import React from "react";

function Quote ({ simpsonQuote }) {
    return (
        <div>
            <p>{simpsonQuote.quote}</p>
            <p><strong>{simpsonQuote.character}</strong></p>
            <img src={simpsonQuote.image} alt={simpsonQuote.name} /> 
        </div>
    )
    
}

export default Quote