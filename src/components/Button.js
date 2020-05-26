import React from 'react';

function Button ({ className, textContent, onClick, path }) {
    return (
        <button type='button' className={className} onClick={onClick}>
            {textContent}
        </button>
    )
}

export default Button;
