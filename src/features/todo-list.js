import React from 'react';
import TodoItem from './todo-item';
import PropTypes from 'prop-types';

export default function TodoList({className,data}) {

  if (!data) {
     return (<h4>No data provided!</h4>)
  }

  return (
    <div className={`todos container ${className}`}>
      { data.length <= 0 && <h4>No todos! Please create some.</h4>}
      { data.map(todo => {
          return (
           <TodoItem key={todo.id} todo={todo} />
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
