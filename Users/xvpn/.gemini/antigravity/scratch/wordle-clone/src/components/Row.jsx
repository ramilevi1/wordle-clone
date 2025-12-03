import React from 'react';
import Tile from './Tile';

export default function Row({ guess, currentGuess, hints = {} }) {
    if (guess) {
        return (
            <div className="row past">
                {guess.map((l, i) => (
                    <Tile key={i} letter={l.key} color={l.color} />
                ))}
            </div>
        );
    }

    if (currentGuess) {
        let letters = currentGuess.split('');

        return (
            <div className="row current">
                {letters.map((letter, i) => (
                    <Tile key={i} letter={letter} />
                ))}
                {[...Array(5 - letters.length)].map((_, i) => {
                    const tileIndex = letters.length + i;
                    const hintLetter = hints[tileIndex];
                    return (
                        <Tile key={i} letter={hintLetter} color={hintLetter ? 'hint' : undefined} />
                    );
                })}
            </div>
        );
    }

    return (
        <div className="row">
            {[...Array(5)].map((_, i) => (
                <Tile key={i} />
            ))}
        </div>
    );
}
