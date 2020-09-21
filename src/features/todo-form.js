import React, {useState} from 'react'

export default function TodoForm(prop) {
  const [todoTitle, setTodoTitle] =  useState("");
  
  const handleChange = (e) => {
    setTodoTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    prop.onTodoAdded(todoTitle);
    setTodoTitle("");
  }

  return (
   <form onSubmit={handleSubmit} >
     <input type="text" 
      onChange={handleChange}
      value={todoTitle}
      placeholder="what do you want to do today?"/>
     <button type="submit">submit</button>
   </form>
  )
}
