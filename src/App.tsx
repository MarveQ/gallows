import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import words from './data/words.json';
import Man from "./components/Man";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

function App() {
    const [wordToGuess, setWordToGuess] = useState<string>(() => {
        return words[Math.floor(Math.random() * words.length)]
    });
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

    const addGuessedLetters = useCallback((letter: string) => {
        if (guessedLetters.includes(letter)) return
        setGuessedLetters(currentLetters => [...currentLetters, letter]);
    }, [guessedLetters])

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            const key = event.key;
            console.log(key)
            if (!key.match(/^[a-z]/)) return
            event.preventDefault();
            addGuessedLetters(key);
        }
        document.addEventListener("keypress", handler);
        return () => {document.removeEventListener("keypress", handler)}
    }, [guessedLetters])

    return (
        <div className="App">
            <Man numberOfMistakes={incorrectLetters.length}/>
            <Word
                wordToGuess={wordToGuess}
                guessedLetters={guessedLetters}
            />
            <Keyboard/>
        </div>
    );
}

export default App;