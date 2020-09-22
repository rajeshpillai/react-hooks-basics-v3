import React from 'react';
import TodoItem from './todo-item';
import PropTypes from 'prop-types';

export default function TodoList({data, onTodoDelete, onTodoEdit, onToggleTodo}) {
  return (
    <div className="todos container">
      { data.length <= 0 && <h4>No todos! Please create some.</h4>}
      { data.map(todo => {
          return (
           <TodoItem key={todo.id} 
            todo={todo} 
            onTodoDelete = {onTodoDelete}
            onToggleTodo = {onToggleTodo}
            onTodoEdit={onTodoEdit}
            />
          )
      })
      }
    </div>
  )
}


TodoList.propTypes = {
  data: PropTypes.array.isRequired,
  onTodoDelete: PropTypes.func
}
