import React from 'react'

export default function TodoItem({todo,onTodoDelete}) {
  const handleDelete = () => {
    onTodoDelete(todo);
  }
  return (
    <div key={todo.id} className="card todo-item">
      {todo.title}
      <div class="d-flex justify-content-between">
        <div>
          { todo.completed 
              ? <span className="badge badge-success">completed</span> 
              : <span className="badge badge-warning">pending</span>}
        </div>
        <div className="d-flex justify-content-between">
          <i onClick={handleDelete} className="p-4 fas fa-trash"></i>
          <i class="fas fa-edit p-4"></i>
        </div>
      </div>
    </div>
  )
}
