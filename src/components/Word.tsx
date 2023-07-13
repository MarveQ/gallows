import React from 'react';

type WordProps = {
    wordToGuess: string,
    guessedLetters: string[],
    reveal: boolean
}
const Word = ({wordToGuess, guessedLetters, reveal = false}: WordProps) => {

    return (
        <div style={{
            display: "flex",
            gap: ".5em",
            fontSize: "3rem",
            fontWeight: "bold",
            textTransform: "uppercase",
            fontFamily: "monospace"
        }}>
            {wordToGuess.split('').map((letter, index) => (
                <span  style={{borderBottom: ".1em solid black"}}>
                    <span key={index} style={{
                            visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                            color: guessedLetters.includes(letter) && reveal ? 'red' : "green"
                        }}
                        >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
};

export default Word;

//