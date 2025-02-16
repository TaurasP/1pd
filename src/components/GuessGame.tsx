import React, { useState, useEffect } from "react";
import GuessForm from "./GuessForm";
import Message from "./Message";

const GuessGame: React.FC = () => {
  const [targetNumber, setTargetNumber] = useState<number>(0);
  const [userGuess, setUserGuess] = useState<number | null>(null);
  const [attempts, setAttempts] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = (guess: number) => {
    setUserGuess(guess);
    setAttempts(attempts + 1);

    if (guess > targetNumber) {
      setMessage("Bandyk mažesnį nei " + guess);
    } else if (guess < targetNumber) {
      setMessage("Bandyk didesnį nei " + guess);
    } else {
      setMessage("Teisingai! Skaičius buvo " + guess);
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setUserGuess(null);
    setAttempts(0);
    setMessage("");
    setGameOver(false);
  };

  return (
    <div>
      <h2>Žaidimas - atspėk skaičių nuo 1 iki 100</h2>
      <GuessForm onGuess={handleGuess} gameOver={gameOver} />
      <Message message={message} />
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
