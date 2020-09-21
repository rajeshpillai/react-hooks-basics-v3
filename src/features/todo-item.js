import React from 'react'

export default function TodoItem({todo,onTodoDelete}) {
  const handleDelete = () => {
    onTodoDelete(todo);
  }
  return (
    <li key={todo.id}>
      {todo.title}
      <i onClick={handleDelete} className="fas fa-trash"></i>
    </li>
  )
}
