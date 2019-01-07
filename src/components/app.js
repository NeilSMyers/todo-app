import React, { Component } from 'react';

import TodoItem from './todo-item';
import AddTodo from './add-todo';


export default class App extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      todo: "",
      addedTodo: [],
    }
  }

  renderTodos = () => {
    return this.state.addedTodo.map((item, index) => {
      return <TodoItem title={this.state.todos[index]} key={index} state={this.state}/>
    })
  }

  render() {
    return (
      <div className='app'>
        <h1>ToDo List</h1>
        <AddTodo state={this.state}/>
        {this.renderTodos()}
      </div>
    );
  }
}