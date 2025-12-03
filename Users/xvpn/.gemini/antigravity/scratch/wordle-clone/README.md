# Wordle Clone

A React-based clone of the popular word game Wordle, built with Vite.

## Features

- 🎮 **Classic Wordle Gameplay**: Guess the 5-letter word in 6 attempts
- ✅ **Word Validation**: Only accepts valid English words from a comprehensive word list
- 💡 **Hint System**: Click the hint button to reveal a correct letter at a random position
- 🎨 **Color-Coded Feedback**: 
  - Green: Letter is correct and in the right position
  - Yellow: Letter is in the word but wrong position
  - Grey: Letter is not in the word
- ⌨️ **Keyboard Support**: Type directly or use the on-screen keyboard
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Demo

Try it live: [Wordle Clone](https://ramilevi1.github.io/wordle-clone)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ramilevi1/wordle-clone.git
cd wordle-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## How to Play

1. Type a 5-letter word using your keyboard or the on-screen keyboard
2. Press Enter to submit your guess
3. The tiles will change color to show how close your guess was:
   - **Green**: Correct letter in the correct position
   - **Yellow**: Correct letter in the wrong position
   - **Grey**: Letter not in the word
4. Use the **Hint** button if you need help - it will reveal one correct letter
5. You have 6 attempts to guess the word

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations
- **JavaScript (ES6+)** - Game logic

## Project Structure

```
wordle-clone/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Grid.jsx        # Game grid container
│   │   ├── Row.jsx         # Individual row component
│   │   ├── Tile.jsx        # Letter tile component
│   │   ├── Keyboard.jsx    # On-screen keyboard
│   │   └── Modal.jsx       # Win/lose modal
│   ├── data/
│   │   └── words.js        # Word list
│   ├── hooks/
│   │   └── useWordle.js    # Game logic hook
│   ├── App.jsx             # Main app component
│   ├── App.css             # App styles
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Inspired by the original [Wordle](https://www.nytimes.com/games/wordle/index.html) by Josh Wardle
- Built as a learning project to practice React and game development
