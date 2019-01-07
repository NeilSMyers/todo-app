import React, {Component} from 'react'

class AddTodo extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      
    }
  }

  handleChange = event => {
    this.props.state.todo = event.target.value
    console.log(this.props.state.todo)
  }

  addTodo = () => {
    this.props.state.addedTodo = this.props.state.todo
    console.log(this.props.state.addedTodo)
  }

  render() {
    return (
      <div className="add-todo">
        <input type="text" placeholder=" Add ToDo" onChange={this.handleChange}></input>
        <button onClick={() => this.addTodo()}>Add</button>
        {this.props.state.addedTodo}
      </div>
    );
  }
}

export default AddTodo