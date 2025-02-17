import React, { useState, useEffect } from "react";
import "../TaskForm.css";

interface GuessFormProps {
  onGuess: (guess: number) => void;
  gameOver: boolean;
}

const GuessForm: React.FC<GuessFormProps> = ({ onGuess, gameOver }) => {
  const [guess, setGuess] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGuess(Number(guess));
    setGuess("");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "Enter" &&
        !gameOver &&
        guess.trim() &&
        Number(guess) >= 1 &&
        Number(guess) <= 100
      ) {
        handleSubmit(e as unknown as React.FormEvent);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guess, gameOver]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mb-3">
        <div>
          <label htmlFor="guess" className="form-label">
            Įveskite skaičių:
          </label>
        </div>
        <div className="col-1">
          <input
            type="number"
            min="1"
            max="100"
            className="form-control"
            id="guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            disabled={gameOver}
          />
        </div>
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={
              gameOver ||
              !guess.trim() ||
              Number(guess) < 1 ||
              Number(guess) > 100
            }
          >
            Spėti
          </button>
        </div>
      </div>
    </form>
  );
};

export default GuessForm;
