import React from 'react';
import TodoItem from './todo-item';

export default function TodoList({data, onTodoDelete, onTodoEdit}) {
  return (
    <div className="todos container">
      { data.map(todo => {
          return (
           <TodoItem key={todo.id} 
            todo={todo} 
            onTodoDelete = {onTodoDelete}
            onTodoEdit={onTodoEdit}
            />
          )
      })
      }
    </div>
  )
}
