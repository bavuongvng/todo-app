import React from "react";

import { AddForm, TodoItem } from "./components";

class App extends React.Component {
  state = {
    todos: []
  };
  handleAdd = todo => {
    const todos = this.state.todos;
    todos.push(todo);
    this.setState({ todos });
  };
  handleDelete = id => {
    const todos = [...this.state.todos];
    const idx = todos.findIndex(todo => todo.id === id);
    if (idx >= 0) {
      todos.splice(idx, 1);
      this.setState({ todos });
    }
  };
  handleUpdate = todo => {
    const todos = [...this.state.todos];
    const idx = todos.findIndex(item => item.id === todo.id);
    if (idx >= 0) {
      todos.splice(idx, 1, todo);
      this.setState({ todos });
    }
  };

  render() {
    console.log("Render App");
    return (
      <div>
        <div>Toto app</div>
        <AddForm onAdd={this.handleAdd} />
        <div>
          <div style={{ width: "45%", float: "left" }}>
            <p>Todo</p>
            {this.state.todos
              .filter(todo => !todo.done)
              .map(todo => {
                return (
                  <TodoItem
                    key={todo.id}
                    item={todo}
                    onDelete={this.handleDelete}
                    onUpdate={this.handleUpdate}
                  />
                );
              })}
          </div>

          <div style={{ width: "45%", float: "left" }}>
            <p>Done</p>
            {this.state.todos
              .filter(todo => todo.done)
              .map(todo => {
                return (
                  <TodoItem
                    key={todo.id}
                    item={todo}
                    onDelete={this.handleDelete}
                    onUpdate={this.handleUpdate}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
