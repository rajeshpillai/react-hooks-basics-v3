import React, {useState} from 'react'
import TodoApp from '../features/todo-app';
import TodoForm from '../features/todo-form';
import TodoList from '../features/todo-list';

export default function Todo() {
  const [todos, setTodos] = useState(
    [
      {id: 1, title: "Learn Elm", completed: true},
      {id: 2, title: "Learn GoLang",completed: true},
      {id: 3, title: "Learn Rust", completed: true},
      {id: 4, title: "Learn to build a compiler",completed: true}
    ]
  )

  const onTodoAdded = (todoTitle) => {
    let newTodo = {
      title: todoTitle,
      completed: false,
      id: +new Date()
    }

    setTodos([newTodo, ...todos]);
  }

  const onTodoDelete = (todo) => {
    let remainingTodos = todos.filter(t => {
      return t.id != todo.id
    });

    setTodos([...remainingTodos]);
  }

  return (
    <TodoApp>
      <div className="container">
        <h2>Todos</h2>
        <TodoForm onTodoAdded={onTodoAdded} />
        <TodoList data={todos} onTodoDelete={onTodoDelete} />
      </div>
    </TodoApp>
  )
}
