import React from "react";

function Quote ({ simpsonsQuote }) {
    return (
        <div>
            <p>{simpsonsQuote.quote}</p>
            <p><strong>{simpsonsQuote.character}</strong></p>
            <img src={simpsonsQuote.image} alt={simpsonsQuote.name} /> 
        </div>
    )
    
}

export default Quote