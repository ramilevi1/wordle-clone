import React, { useEffect, useState } from 'react';

export default function Keyboard({ usedKeys, handleKeyup }) {
    const [letters, setLetters] = useState(null);

    useEffect(() => {
        const l = [
            { key: 'q' },
            { key: 'w' },
            { key: 'e' },
            { key: 'r' },
            { key: 't' },
            { key: 'y' },
            { key: 'u' },
            { key: 'i' },
            { key: 'o' },
            { key: 'p' },
            { key: 'a' },
            { key: 's' },
            { key: 'd' },
            { key: 'f' },
            { key: 'g' },
            { key: 'h' },
            { key: 'j' },
            { key: 'k' },
            { key: 'l' },
            { key: 'Enter' },
            { key: 'z' },
            { key: 'x' },
            { key: 'c' },
            { key: 'v' },
            { key: 'b' },
            { key: 'n' },
            { key: 'm' },
            { key: 'Backspace' },
        ];
        setLetters(l);
    }, []);

    return (
        <div className="keyboard">
            {letters &&
                letters.map((l) => {
                    const color = usedKeys[l.key];
                    return (
                        <div
                            key={l.key}
                            className={l.key === 'Enter' || l.key === 'Backspace' ? 'wide' : color}
                            onClick={() => handleKeyup({ key: l.key })}
                        >
                            {l.key === 'Backspace' ? 'Del' : l.key}
                        </div>
                    );
                })}
        </div>
    );
}
