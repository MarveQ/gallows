import React from 'react';
import styles from "../Keyboard.module.css"


const KEYS = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

type KeyboardProps = {
    disabled: boolean,
    activeLetters: string[],
    inActiveLetters: string[],
    addGuessedLetters: (letter: string) => void //nothing to return
}

export function Keyboard({disabled, activeLetters, inActiveLetters, addGuessedLetters}: KeyboardProps) {
    return <div style={{display: "grid", gridTemplateColumns: "repeat(13, 1fr)" , gap: ".5rem"}}>
        {KEYS.map(key => {
            const isActive = activeLetters.includes(key);
            const isInActive = inActiveLetters.includes(key);
            return (
                <button key={key} onClick={() => addGuessedLetters(key)}
                        className={`${styles.btn} ${isActive ? styles.active : ""}
                        ${isInActive ? styles.inactive : ""}`}
                        disabled={isActive || isInActive || disabled}
                >
                    {key}
                </button>
            )
        })}
    </div>
};

export default Keyboard;

// /style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(50px, 1fr))", gap: ".5rem"}}