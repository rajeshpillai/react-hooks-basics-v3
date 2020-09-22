import React from 'react'

export default function TodoItem({todo,onTodoDelete, onTodoEdit}) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      onTodoDelete(todo);
    }
  }

  const handleEdit = (modifiedTodo) => {
    let title = prompt("Enter new value: ",modifiedTodo.title); 
    if (!title) return;
    onTodoEdit(title, todo.id);
  }

  return (
    <div key={todo.id} className="card todo-item">
      {todo.title}
      <div class="d-flex justify-content-between">
        <div>
         {todo.completed 
          ? <span className="badge badge-success">completed</span> 
          : <span className="badge badge-warning">pending</span>}
        </div>
        <div className="d-flex justify-content-between">
          <i onClick={handleDelete} className="p-4 fas fa-trash"></i>
          <i onClick={()=>handleEdit(todo)} 
             class="fas fa-edit p-4"></i>
          
          {/* <i onClick={handleEdit(todo)}  
             class="fas fa-edit p-4"></i> */}
                          
          {/* <i onClick={function () { handleEdit(todo)}} 
             class="fas fa-edit p-4"></i> */}
        </div>
      </div>
    </div>
  )
}


