import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    "Codding some application",
    "Designing some application",
    "Taking Tea",
    "Doing some serious application",
  ]);

  const [input, setInput] = useState("");

  const addTodo = (event) => {
    event.preventDefault();

    setTodos([...todos, input]);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <p className="text-center">TODO APP</p>
      <div className="container w-[500px] shadow-lg  flex justify-center items-center  p-2 flex-col">
        <form onSubmit={addTodo} className="flex justify-between items-cente">
          <input
            type="text"
            name="input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Add todo item...."
            className="mr-2 outline-none border-b border-gray-500"
          />

          <button
            type="submit"
            disabled={!input}
            className={`text-white py-1 cursor-pointer px-4 rounded-sm  ${
              !input ? "bg-gray-500" : "bg-blue-600"
            }`}
          >
            ADD
          </button>
        </form>

        <ul className="flex flex-col items-start ">
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
