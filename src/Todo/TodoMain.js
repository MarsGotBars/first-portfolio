import TodoList from "./TodoList";
import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const LOCAL_STORAGE_KEY = "de-keys";

export default function TodoMain() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }

  function handleRm() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }
  return (
    <div className="todoBody">
      <main className="todomain">
        <section className="todoContainer">
          <h1 className="todoh1">Mijn todo list</h1>
          <form>
            <input type="text" name="todo" className="add" ref={todoNameRef} />
            <label className="label">
              <span className="content">Wat moet ik doen?</span>
            </label>
          </form>
          <button className="btn" onClick={handleAddTodo}>
            Add Todo
          </button>
          <button className="btn" onClick={handleRm}>
            Clear completed Todos
          </button>
          <h2 className="todoh2">
            {todos.filter((todo) => !todo.complete).length} left to do
          </h2>
          <ul>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
          </ul>
        </section>
      </main>
      {/* footer */}
      <footer className="absolute">
        <p>
          © <span>Marcin</span>
        </p>
      </footer>
    </div>
  );
}
