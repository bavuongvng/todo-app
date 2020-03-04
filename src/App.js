import React, { useState, useCallback } from "react";

import { AddForm, TodoItem } from "./components";

function App() {
  const [todos, setTodo] = useState([]);

  const handleAdd = useCallback(todo => {
    setTodo(todos => [...todos, todo]);
  }, []);

  const handleDelete = useCallback(id => {
    setTodo(todos => {
      const clone = [...todos];
      const idx = todos.findIndex(todo => todo.id === id);
      if (idx >= 0) {
        clone.splice(idx, 1);
        return clone;
      }
      return todos;
    });
  }, []);

  const handleUpdate = useCallback(todo => {
    setTodo(todos => {
      const clone = [...todos];
      const idx = todos.findIndex(item => item.id === todo.id);
      if (idx >= 0) {
        clone.splice(idx, 1, todo);
        return clone;
      }
      return todos;
    });
  }, []);

  console.log("Render App");
  return (
    <div>
      <div>Toto app</div>
      <AddForm onAdd={handleAdd} />
      <div>
        <div style={{ width: "45%", float: "left" }}>
          <p>Todo</p>
          {todos
            .filter(todo => !todo.done)
            .map(todo => {
              return (
                <TodoItem
                  key={todo.id}
                  item={todo}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              );
            })}
        </div>

        <div style={{ width: "45%", float: "left" }}>
          <p>Done</p>
          {todos
            .filter(todo => todo.done)
            .map(todo => {
              return (
                <TodoItem
                  key={todo.id}
                  item={todo}
                  onDelete={handleDelete}
                  onUpdate={handleUpdate}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
