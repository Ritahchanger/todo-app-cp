import React from "react";

const TodoApp = () => {

  c


  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
        <p className="text-center" >TODO APP</p>
      <div className="container w-[500px] shadow-lg  flex justify-center items-center  p-2 flex-col">
        <form action="#"> 
          <input
            type="text"
            name="input"
            id=""
            placeholder="Add todo item...."
            className="mr-2 outline-none border-b border-gray-500"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-1 px-4 rounded-sm "
          >
            ADD
          </button>
        </form>

        <ul >
            <li>Codding some application</li>
            <li>Designing some application</li>
            <li>Taking Tea</li>
            <li>Doing some serious application</li>
        </ul>

      </div>
    </div>
  );
};

export default TodoApp;
