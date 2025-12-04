import fs from 'fs';
import https from 'https';

const answersUrl = 'https://raw.githubusercontent.com/3b1b/videos/master/_2022/wordle/data/possible_words.txt';
const allowedUrl = 'https://raw.githubusercontent.com/3b1b/videos/master/_2022/wordle/data/allowed_words.txt';
const outputPath = './src/data/words.js';

const fetchWords = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
};

console.log('Fetching word lists...');

Promise.all([fetchWords(answersUrl), fetchWords(allowedUrl)])
    .then(([answersData, allowedData]) => {
        console.log('Fetched data lengths:', answersData.length, allowedData.length);

        const answers = answersData.split(/\r?\n/).filter(w => w.length === 5 && /^[a-z]+$/.test(w));
        const allowed = allowedData.split(/\r?\n/).filter(w => w.length === 5 && /^[a-z]+$/.test(w));

        console.log('Parsed words:', answers.length, allowed.length);

        // Combine and deduplicate
        const allWords = [...new Set([...answers, ...allowed])].sort();

        const fileContent = `export const WORDS = ${JSON.stringify(allWords, null, 2)};`;
        fs.writeFileSync(outputPath, fileContent);
        console.log(`Successfully wrote ${allWords.length} words to ${outputPath}`);
    })
    .catch(err => console.error('Error updating word list:', err));
