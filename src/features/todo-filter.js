import React, {useState} from 'react'

export default function TodoFilter({
  onFilterCompleted, onFilterInComplete,
  onFilterBookmark, onFilterClear}) {

  const [filter, setFilter] = useState("all");

  const handleAllClick = (e) => {
    setFilter(e.target.name);
    onFilterClear();
  }

  const handleBookmarkClick = (e) => {
    setFilter(e.target.name)
    onFilterBookmark();
  }

  const handleCompletedClick = (e) => {
    setFilter(e.target.name)
    onFilterCompleted();
  }

  const handleInCompleteClick = (e) => {
    setFilter(e.target.name)
    onFilterInComplete();
  }

  function activeClass(action) {
    return action == filter ? "bg-success" : "";
  }
    
  return (
    <div className="mt-4 d-flex">
        <button name="all" 
          className={`m-1 ${activeClass("all")}`} 
          onClick={handleAllClick}>ALL</button>
        <button name="bookmark" 
          className={`m-1 ${activeClass("bookmark")}`}  
          onClick={handleBookmarkClick}>BOOKMARKED</button>
        <button name="completed" 
          onClick = {handleCompletedClick}
          className={`m-1 ${activeClass("completed")}`} >COMPLETED</button>
        <button name="incomplete" 
          onClick={handleInCompleteClick}
          className={`m-1 ${activeClass("incomplete")}`} >IN-COMPLETE</button>
    </div>
  )
}
