import { data } from 'autoprefixer';
import React,{useState} from 'react'
import './Todo.css'

import './Todo.css';

function Todo() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [status, setStatus] = useState("");

  function Createtodo() {
    if (input.length === 0) {
      setStatus("Error: Task cannot be empty");
    } else {
      const updatedTodo = [...todo, input];
      setTodo(updatedTodo);
      setStatus(""); // Reset status after successful addition
      setInput(""); // Clear the input field after adding the task
    }
  }

  function Delete(i) {
    const newArr = [...todo];
    newArr.splice(i, 1);
    setTodo(newArr);
  }

  function Edit(i) {
    const edited = [...todo];
    edited[i] = input;
    setTodo(edited);
    setInput(""); // Clear input after editing
  }

  return (
    <div id='app' className='w-96 rounded-lg border border-sky-950 bg-slate-400'>
      <div>{status && <p className="error-text">{status}</p>}</div>
      <input
        value={input}
        className='border border-zinc-900 rounded-full leading-8 pl-4 w-60 ml-2'
        type="text"
        placeholder="Add Task..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button 
        onClick={Createtodo} 
        className="rounded-full leading-8 border border-sky-950 p-2 ml-2 bg-lime-300 hover:bg-lime-800 hover:text-white">
        Add
      </button>
      <br />
      {todo.map((data, i) => {
        return (
          <div className="ml-2 mr-2 border-b-2 border-black " key={i}>
            {i}. <span className='border border-black bg-white rounded-md p-0.5 w-96'>{data}</span>
            <button 
              className='border border-black rounded-lg p-0.5 text-white bg-red-400 hover:bg-red-700' 
              onClick={() => Delete(i)}>
              Delete
            </button>
            <button 
              className='border border-black rounded-lg p-0.5 text-white bg-indigo-400 hover:bg-indigo-700' 
              onClick={() => Edit(i)}>
              Edit
            </button>
          </div>
        )
      })}
    </div>
  );
}

export default Todo;
