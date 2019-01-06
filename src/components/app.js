import React, { Component } from 'react';

import TodoItem from './todo-item';
import AddTodo from './add-todo';


export default class App extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      todos: ["get bacon for breakfast", "build a todo list app cuz i'm cool", "Impress all my friends"]
    }
  }

  renderTodos = () => {
    return this.state.todos.map((item, index) => {
      return <TodoItem title={this.state.todos[index]} key={index}/>
    })
  }

  render() {
    return (
      <div className='app'>
        <h1>ToDo List</h1>
        <AddTodo/>
        {this.renderTodos()}
      </div>
    );
  }
}