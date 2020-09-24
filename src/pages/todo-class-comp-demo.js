import React, {useState, Component } from 'react'

const DEFAULT_STATE = [
  {id: 1, title: " Task 1", completed: false},
  {id: 2, title: " Task 2", completed: false},
  {id: 3, title: " Task 3", completed: true},
]

function TodoComponent () {
  const [todos, setTodos] = useState(DEFAULT_STATE)

  const onClick = (todo) => {
    alert(todo);
  }
  return (
    <div>
        <h2>Todo App</h2>      
        <ul>
        {
          todos.map(todo => {
            return (
              <li onClick={() => {onClick(todo)}}>
                {todo.title}
              </li>
            )
          })
        }
        </ul>
    </div>
  )
}

export default class TodoClassComponent extends Component {
  
  // state = {
  //   todos: DEFAULT_STATE
  // }
  // OR
  constructor() {
    super();
    this.state = {
      todos: DEFAULT_STATE
    }

    // this.onToggleCompleted = this.onToggleCompleted.bind(this);
  }

  onToggleCompleted = (todo) => {
    //alert(todo.title);
    const updatedStates = this.state.todos.map(t => {
      if (t.id == todo.id) {
        t.completed = !t.completed;
      }
      return t;
    });
    this.setState(updatedStates)
  }

  render() {
    return (
      <div>
        <h2>Todo App</h2>      
        <ul>
        {
          this.state.todos.map(todo => {
            return (
              <li 
                onDoubleClick={()=> this.onToggleCompleted(todo)}>
                {todo.title}
                | <span>{todo.completed.toString()}</span>
              </li>
            )
          })
        }
        </ul>
    </div>
    )
  }
}
