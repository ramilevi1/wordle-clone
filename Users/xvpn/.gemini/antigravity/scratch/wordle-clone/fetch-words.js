import fs from 'fs';
import https from 'https';

const url = 'https://raw.githubusercontent.com/tabatkins/wordle-list/main/words';
const outputPath = './src/data/words.js';

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        const words = data.split('\n').filter(w => w.length === 5);
        const fileContent = `export const WORDS = ${JSON.stringify(words, null, 2)};`;

        fs.writeFileSync(outputPath, fileContent);
        console.log(`Successfully wrote ${words.length} words to ${outputPath}`);
    });

}).on('error', (err) => {
    console.error('Error fetching word list:', err);
});
