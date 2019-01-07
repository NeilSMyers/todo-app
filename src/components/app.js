import React, { Component } from 'react';

import TodoItem from './todo-item';


export default class App extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      todos: []
    }
  }

  addTodo = () => {
    this.setState({ todos: [...this.state.todos, document.getElementById("add").value] })
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
        <div className="add-todo">
          <input type="text" placeholder=" Add ToDo" id="add"/>
          <button onClick={() => this.addTodo()}>Add</button>
        </div>
        {this.renderTodos()}
      </div>
    );
  }
}