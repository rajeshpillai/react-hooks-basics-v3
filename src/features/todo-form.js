import React, {useState, useRef, useEffect} from 'react';

export default function TodoForm(prop) {
  const [todoTitle, setTodoTitle] =  useState("");
  const titleRef = useRef();

  // Run only once : Set focus to title input
  useEffect(() => {
    titleRef.current.focus();
  }, [])
  
  const handleChange = (e) => {
    setTodoTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoTitle.length <= 0) return;
    prop.onTodoAdded(todoTitle);
    setTodoTitle("");
  }

  return (
   <form onSubmit={handleSubmit} >
     <input type="text"
      ref = {titleRef}
      className="w-75" 
      onChange={handleChange}
      value={todoTitle}
      placeholder="what do you want to do today?"/>

     <button type="submit">submit</button>
   </form>
  )
}
