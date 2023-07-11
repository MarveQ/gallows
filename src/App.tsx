import React, {useState} from 'react';
import './App.css';
import words from './words.json';
import Man from "./components/Man";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });
  const [guessedLetters, setguessedLetters] = useState<string[]>([]);
  const incorectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

  return (
    <div className="App">
      <Man numberOfMistakes={incorectLetters.length}/>
      <Word/>
      <Keyboard/>
    </div>
  );
}

export default App;
