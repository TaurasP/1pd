import React from "react";
import { Task } from "../interfaces/Task";

interface TaskItemProps {
  task: Task;
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleTaskCompletion,
  deleteTask,
}) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        task.completed ? "list-group-item-success" : ""
      }`}
    >
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <div>
        <button
          className="btn btn-sm btn-success me-2"
          onClick={() => toggleTaskCompletion(task.id)}
        >
          {task.completed ? "Atlikta" : "Pažymėti kaip atliktą"}
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => deleteTask(task.id)}
        >
          Ištrinti
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
