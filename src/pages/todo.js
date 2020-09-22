import React, {useState} from 'react'
import TodoApp from '../features/todo-app';
import TodoForm from '../features/todo-form';
import TodoList from '../features/todo-list';

export default function Todo() {
  const [todos, setTodos] = useState(
    [
      {id: 1, title: "Learn Elm", completed: true},
      {id: 2, title: "Learn GoLang",completed: false},
      {id: 3, title: "Learn Rust", completed: false},
      {id: 4, title: "Learn to build a compiler",completed: false}
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

  function onTodoEdit(title, todoId) {
    let updatedTodos = todos.map(todo => {
      if (todo.id == todoId) {
        todo.title = title;
      }
      return todo;
    });

    setTodos([...updatedTodos])
  }

  return (
    <TodoApp>
      <div className="container mt-5 vh-100">
        <h2>Todos</h2>
        <TodoForm onTodoAdded={onTodoAdded} />
        <TodoList data={todos} 
          onTodoEdit={onTodoEdit}
          onTodoDelete={onTodoDelete} />
      </div>
    </TodoApp>
  )
}
