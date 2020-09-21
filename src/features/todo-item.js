import React from 'react'

export default function TodoItem({todo}) {
  return (
    <li key={todo.id}>{todo.title}</li>
  )
}
