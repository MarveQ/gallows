import React from 'react';

type WordProps = {
    wordToGuess: string,
    guessedLetters: string[]
}
const Word = ({wordToGuess, guessedLetters}: WordProps) => {

    return (
        <div>
            {wordToGuess.split('').map((letter, index) => (
                <span key={index} style={{borderBottom: ".1em solid black", margin: "4px"}}>{letter}</span>
            ))}
        </div>
    );
};

export default Word;