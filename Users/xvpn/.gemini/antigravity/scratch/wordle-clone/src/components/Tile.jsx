import React from 'react';

export default function Tile({ letter, color }) {
    let className = 'tile';

    if (color) {
        className += ' ' + color;
    }

    return (
        <div className={className}>
            {letter}
        </div>
    );
}
