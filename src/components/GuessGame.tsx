import React, { useState, useEffect } from "react";
import GuessForm from "./GuessForm";
import Message from "./Message";

const GuessGame: React.FC = () => {
  const [targetNumber, setTargetNumber] = useState<number>(0);
  const [attempts, setAttempts] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [guesses, setGuesses] = useState<number[]>([]);

  useEffect(() => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = (guess: number) => {
    setAttempts((prev) => prev + 1);
    setGuesses((prev) => [...prev, guess]);

    if (guess > targetNumber) {
      setMessage(`Bandyk mažesnį nei ${guess}`);
    } else if (guess < targetNumber) {
      setMessage(`Bandyk didesnį nei ${guess}`);
    } else {
      setMessage(`Teisingai! Skaičius buvo ${guess}`);
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setAttempts(0);
    setMessage("");
    setGameOver(false);
    setGuesses([]);
  };

  return (
    <div>
      <h2>Žaidimas - atspėk skaičių nuo 1 iki 100</h2>
      <GuessForm onGuess={handleGuess} gameOver={gameOver} />
      <Message message={message} />
      {guesses.length > 0 && <p>Spėjimai: {guesses.join(", ")}</p>}
      <p>Bandymų skaičius: {attempts}</p>
      {gameOver && (
        <button className="btn btn-primary" onClick={resetGame}>
          Žaisti iš naujo
        </button>
      )}
    </div>
  );
};

export default GuessGame;
