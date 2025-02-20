import React, { useState } from "react";
import "../TaskForm.css";

interface TaskFormProps {
  addTask: (text: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Įrašykite naują užduotį"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!text.trim()}
        >
          Pridėti užduotį
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
