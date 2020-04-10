import React from 'react';
import FilteredTodoList from './FilteredTodoList';
import TodoEntry from './TodoEntry';

const TODOS = [
  {isComplete: false, id: 1, text: "go get some katsup from the store"},
  {isComplete: false, id: 2, text: "get some exercise"},
  {isComplete: true, id: 3, text: "do a full and rewarding work day"},
  {isComplete: false, id: 4, text: "eat pizza and other health food"},
  {isComplete: true, id: 5, text: "find out about underwater airplanes"}
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: TODOS,
      nextId: 6
    };

    this.onAddTodo = this.onAddTodo.bind(this);
  }

  onAddTodo(text) {
    console.log(text);
    this.setState((state, props) => {
      const newTodo = {isComplete: false, id: state.nextId, text: text};
      const newNextId = state.nextId + 1;
      return {todos: state.todos.concat([newTodo]), nextId: newNextId};
    });
  }

  render() {
    return (
      <div className="App">
        <TodoEntry onAddTodo={this.onAddTodo} value/>
        <FilteredTodoList todos={this.state.todos} />
      </div>
    );
  }
  
}