import { useState, useEffect } from "react";
import "./Add-task-input.css"

import Api from "../Api.js";
import Button from "./Button";



const AddTaskInput = () => {
  const [task, setTask] = useState();

    const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
      task,
      done: false,
    };

    console.log(newTask, "enviado");

    

    setTask(" ");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          name="task"
          placeholder="Adicionar uma tarefa"
          onChange={(e) => setTask(e.target.value)}
          value={task || " "}
        />
        <Button />
      </form>
    </div>
  );
};

export default AddTaskInput;
