"use client";
//converts page to client component
import React, { useState } from "react";
//imports useState and react
type perimeter = {
  text: string;
  completed: boolean;
  id: number;
};
//type generated to give to the perimeter of a todo
export default function page() {
  const [todos, setTodos] = useState([{ text: `a`, completed: true, id: 0 }]);
  //useState of todos initiated and its given initial todos of page
  const changeCheckboxHandler = (mera_Elem: perimeter) => {
    const newTodos = todos.map((todo) => {
      if (todo.id == mera_Elem.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  //this function changes checkbox by changing the state of todos

  const [effect, setEffect] = useState(false);
//use state for effects on button
  const [value, setValue] = useState("");
  //use state of input text initiated and given initail value

  const changeInputText = (e: any) => {
    setValue(e.target.value);
  };
  //this function changes the state of input text

  const addHandler = () => {
    const newTodo = value;
    const newTodos = [
      ...todos,
      { text: newTodo, completed: false, id: Math.random() },
    ];
    setTodos(newTodos);
    setValue('')
  };
  //this function add todos by changing the state of todos

  const deleteHandler = (mera_Elem: perimeter) => {
    const newTodos = todos.filter((todo) => {
      if (todo.id == mera_Elem.id) {
        return false;
      }
      return true;
    });
    setTodos(newTodos);
  };
  //this function delete todos by changing the state of todos

const keyUpHandler=(e:any)=>{
  if (e.key=='Enter'){addHandler()}
  console.log(e.key)}
//this function add value on pressing enter key in input text section  
  return (
    <main className="pb-10 pt-10">
      <center>
      <h1 className="font-medium pt-4 pb-4 text-2xl">Todo App </h1>
      
    <ul className="mt-4 m-2 border-4  mx-auto space-x-2 space-y-4 max-w-2xl bg-gradient-to-t from-green-100 to-amber-100 rounded-xl pt-8 pb-8">
      <div className="space-x-5  p-2 justify-center">
        <input
          className="border-solid border-2 space-y-5 rounded-2xl p-2"
          type="text"
          placeholder="Enter"
          value={value}
          onChange={(e) => {
            changeInputText(e);
          }}
          onKeyUp={(e)=>{keyUpHandler(e)}}
        />
        <button
         className={`${
          effect && "animate-wiggle"
        } bg-blue-500 p-2 text-white rounded-lg hover:bg-blue-700 hover:shadow-xl`}
        
        onAnimationEnd={() => setEffect(false)}
          onClick={() => {
            addHandler();
            setEffect(true);
          }}
           
        >
          Add
        </button>
        {}
      </div>

      {todos.map((elem) => {
        return (
          <li
            className="border-2 border-indigo-200 rounded-lg"
            style={elem.completed ? { color: "green" } : { color: "red" }}
          >
            {" "}
            <input
              type="checkbox"
              checked={elem.completed}
              onClick={() => {
                changeCheckboxHandler(elem);
              }}
             
            />{" "}
            {elem.text}{" "}
            <button
              className={`${
                effect && "animate-wiggle"
              } bg-blue-500 ml-2 p-2 mt-1 mb-1 text-white rounded-lg hover:bg-blue-700 hover:shadow-xl`}
              
              onAnimationEnd={() => setEffect(false)}
                onClick={() => {
                  deleteHandler(elem);
                  setEffect(true);
                  
                }}
              
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
    </center>
    </main>
  );
}



