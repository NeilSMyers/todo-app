import React, { Component } from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      done: false
    }
  }

  render() {
    return (
      <div className="todo-item">
        <input onClick={() => this.setState({ done: !this.state.done })} type="checkbox"/>
        <p className={ this.state.done ? "done" : null }>{this.props.state.addedTodo}</p>
      </div>
    );
  }
}

export default TodoItem