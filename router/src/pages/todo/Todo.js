import React from "react";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import style from './Todo.module.css'

function Todo() {
  let id = 0;
  const taskList = ["Learn react", "Learn javascript"];
  const [text, setText] = useState("");
  const [task, setTask] = useState(taskList);
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    if (text) {
      setTask([...task,text]);
      // console.log('in submit',task);
    }
    setText("");
    event.preventDefault();
    // console.log('in submit out',task);
    return task;
  };
  return (
    <>
    <Navbar/>
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task to add"
          value={text}
          onChange={handleChange}
        ></input>
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {/* {console.log('in ul',task)} */}
        {task.map((task) => (
          <li className={style.lists} key={++id}>{task}</li>
        ))}
      </ul>
    </div>
    <div>
        <Link to='completed'>Completed</Link>
        <Link to='pending'>Pending</Link>
        <Outlet/>
      </div>
    </>
  );
}

export default Todo;
