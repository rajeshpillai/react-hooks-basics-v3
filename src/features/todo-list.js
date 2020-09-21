import React from 'react'

export default function TodoList(props) {
  return (
    <ul>
      { props.data.map(todo => {
          return (
            <li key={todo.id}>{todo.title}</li>
          )
      })
      }
    </ul>
  )
}
