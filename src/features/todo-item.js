import React, {useState, useRef} from 'react'

export default function TodoItem({todo,onTodoDelete, onTodoEdit, onToggleTodo}) {
  
  const [edit, toggleEdit] = useState(false);

  const titleRef = useRef();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      onTodoDelete(todo);
    }
  }

  const handleEdit = (modifiedTodo) => {
    // let title = prompt("Enter new value: ",modifiedTodo.title); 
    // if (!title) return;
    // onTodoEdit(title, todo.id);
    toggleEdit(ps => !ps);
  }

  const toggleTodo = () => {
    onToggleTodo(todo);
  }

  const handleKeyUp = (e) => {
    // enter key = 13
    // esc key = 27
    console.log(e.keyCode);
    if (e.keyCode == 13) {
      onTodoEdit(titleRef.current.value, todo.id);
      toggleEdit(ps => !ps);
    } else if (e.keyCode == 27) {
      // toggleEdit(!edit)
      // toggleEdit(p => {return !p});
      toggleEdit(ps => !ps);
    }
  }

  return (
    <div key={todo.id} className="card todo-item">
      {
        !edit  &&
        <span onDoubleClick={toggleTodo} className="todo-title">{todo.title}</span>
      }

      {
        edit  &&
        <input onKeyUp={handleKeyUp} ref={titleRef} type="text" defaultValue={todo.title} />
      }

      <div className="d-flex justify-content-between">
        <div>
         {todo.completed 
          ? <span className="badge badge-success">completed</span> 
          : <span className="badge badge-warning">pending</span>}
        </div>
        <div className="d-flex justify-content-between">
          <i onClick={handleDelete} className="p-4 fas fa-trash"></i>
          <i onClick={()=>handleEdit(todo)} 
             className="fas fa-edit p-4"></i>
          
          {/* <i onClick={handleEdit(todo)}  
             class="fas fa-edit p-4"></i> */}
                          
          {/* <i onClick={function () { handleEdit(todo)}} 
             class="fas fa-edit p-4"></i> */}
        </div>
      </div>
    </div>
  )
}


