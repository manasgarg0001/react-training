import React, { useState } from "react";
import "./App.css";
import Card from "./components/card/index";
import Button from "./components/button/index";
import Input from "./components/input/index";
import Todolist from "./components/todo/index";

function App() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);

  const [currentTodo, setCurrentTodo] = useState({});

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };
  console.log(userInput);
  const addTodo = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 100),
      task: userInput,
    };
    setTodos([newTodo, ...todos]);
    setUserInput("");
  };
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((item, index) => item.id !== id);
    setTodos(updatedTodos);
  };
  // const handleEdit = (id) => {
  //   const newEditItem = todos.find((elem) => {
  //     return elem.id === id;
  //   });
  //   console.log(newEditItem);
  // };
  // function handleEdit(e) {
  //   setCurrentTodo({ ...currentTodo, text: e.target.value });
  //   console.log(currentTodo);
  // }

  const clearAll = () => {
    setTodos([]);
  };
  return (
    <div className="App">
      <Card>
        <div className="card">
          <h1>Todo App</h1>
          <div className="todo-input">
            <Input
              value={userInput}
              type="text"
              placeholder={"add your new todo"}
              onChange={handleChange}
              className="todo-text"
            />
            <Button onClick={addTodo} />
          </div>
          <div className="map">
            {todos.map((todo, index) => {
              return (
                <Todolist
                  onDelete={handleDelete}
                  key={index}
                  task={todo.task}
                  id={todo.id}
                />
              );
            })}
          </div>

          {/* <div className="edit">
            {todos.map((todo, index) => {
              return (
                <Todolist
                  onEdit={handleEdit}
                  key={index}
                  task={todo.task}
                  id={todo.id}
                />
              );
            })}
          </div> */}

          <div className="footer">
            <p>{`you have ${todos.length} pending tasks`}</p>
            <button className="clear-btn" onClick={clearAll}>
              Clear All
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
