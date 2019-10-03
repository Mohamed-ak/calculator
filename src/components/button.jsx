import React from 'react'

export default function Button({classes, value, display, onClick}) {
    return (
        <button className={`key ${classes}`}
            onClick={()=>onClick(value)}
            >
            {display}
        </button>
    );
}
