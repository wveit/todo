import React from 'react';
import FilteredTodoList from './FilteredTodoList';
import NewTodoEntry from './NewTodoEntry';
import LocalStorageTodoSaver from './LocalStorageTodoSaver';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      nextId: 0
    };

    this.onAddTodo = this.onAddTodo.bind(this);
    this.handleTodoToggle = this.handleTodoToggle.bind(this);
    this.handleTodosLocalStorageRead = this.handleTodosLocalStorageRead.bind(this);
  }

  onAddTodo(text) {
    this.setState((state) => {
      const newTodo = {isComplete: false, id: state.nextId, text: text};
      const newNextId = state.nextId + 1;
      return {todos: state.todos.concat([newTodo]), nextId: newNextId};
    });
  }

  handleTodoToggle(id) {
    this.setState((state, props) => {
      const todoIndex = state.todos.findIndex(todo => todo.id === id);
      if(todoIndex === -1)
        return state;
      const oldTodo = state.todos[todoIndex];
      const newTodo = {id, text: oldTodo.text, isComplete: !oldTodo.isComplete};
      const newTodos = [...state.todos];
      newTodos[todoIndex] = newTodo;
      return {todos: newTodos};
    });
  }

  handleTodosLocalStorageRead(todos) {
    const highestId = todos.reduce((highestId, todo) => todo.id > highestId ? todo.id : highestId, -1);
    const nextId = highestId + 1;
    this.setState({todos, nextId});
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <NewTodoEntry onAddTodo={this.onAddTodo} value/>
        <FilteredTodoList todos={this.state.todos} onToggleIsComplete={this.handleTodoToggle}/>
        <LocalStorageTodoSaver todos={this.state.todos} onRead={this.handleTodosLocalStorageRead}/>
      </div>
    );
  }
  
}