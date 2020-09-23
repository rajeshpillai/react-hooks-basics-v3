import React, { useState, useEffect, useContext } from "react";
import TodoApp from "../features/todo-app";
import TodoForm from "../features/todo-form";
import TodoList from "../features/todo-list";
import TodoFilter from "../features/todo-filter";

import TodoContext from "../context/todo-context";

const API_TODOS = "https://jsonplaceholder.typicode.com/todos/";

const randomFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const APP_DATA = {
  theme: "dark", // dark or light
  language: "english"
};

export default function Todo() {

  // const [todos, setTodos] = useState(
  //   [
  //     {id: 1, title: "Learn Elm", completed: true, percentage_completed: 100},
  //     {id: 2, title: "Learn GoLang",completed: false, percentage_completed:25},
  //     {id: 3, title: "Learn Rust", completed: false, percentage_completed: 75},
  //     {id: 4, title: "Learn to build a compiler",completed: false, percentage_completed: 20}
  //   ]
  // )

  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const [isLoaded, setIsLoaded] = useState(false);
  
  const [global_data, setGlobalData] = useState(APP_DATA);
  

  //1. Let's get the data from the API
  //   We can use third party library like "axios"
  //   or we can use built in FETCH API
  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(API_TODOS);
      const data = await response.json();

      let transformedData = data.map(d => {
        d.percentage_completed = randomFromRange(25, 100);
        d.bookmarked = false;
        return d;
      });
      setTodos([...transformedData]);
      setIsLoaded(true);
    };

    fetchData();

  }, []);

  const onTodoAdded = todoTitle => {
    let newTodo = {
      title: todoTitle,
      completed: false,
      id: +new Date()
    };

    setTodos([newTodo, ...todos]);
  };

  const onTodoDelete = todo => {
    let remainingTodos = todos.filter(t => {
      return t.id != todo.id;
    });

    setTodos([...remainingTodos]);
  };

  function onTodoEdit(title, todoId) {
    // alert(`${title} - ${todoId}`);
    let updatedTodos = todos.map(todo => {
      if (todo.id == todoId) {
        todo.title = title;
      }
      return todo;
    });

    setTodos([...updatedTodos]);
  }

  // Toggle todo between completed and not completed
  const onToggleTodo = todo => {
    let updatedTodos = todos.map(t => {
      if (todo.id == t.id) {
        todo.completed = !todo.completed;
      }
      return t;
    });

    setTodos([...updatedTodos]);
  };

  const onToggleBookmark = todo => {
    let updatedTodos = todos.map(t => {
      if (todo.id == t.id) {
        todo.bookmarked = !todo.bookmarked;
      }
      return t;
    });

    setTodos([...updatedTodos]);
  };

  const onFilterClear = () => {
    setFilteredTodos([]);
    setFilter("all");
  };

  const onFilterBookmark = () => {
    const bookmarkedTodos = todos.filter(t => t.bookmarked);
    setFilteredTodos([...bookmarkedTodos]);
    setFilter("bookmarked");
  };

  const onFilterCompleted = () => {
    const completedTodos = todos.filter(t => t.completed);
    setFilteredTodos([...completedTodos]);
    setFilter("completed");
  };

  const onFilterInComplete = () => {
    const incompleteTodos = todos.filter(t => !t.completed);
    setFilteredTodos([...incompleteTodos]);
    setFilter("incomplete");
  };

  // Refresh filters if todos/ changes like added,
  //  bookmarked, mark as complete etc.
  //  (any code with if/else can be optimized using common patterns)
  useEffect(() => {
    if (filter == "bookmarked") {
      onFilterBookmark();
    } else if (filter == "completed") {
      onFilterCompleted();
    } else if (filter == "incomplete") {
      onFilterInComplete();
    }
  }, [todos]);

  const toggleTheme = () => {
    //This should update the theme in context
    setGlobalData({
      ...global_data,
      theme: global_data.theme === "dark" ? "light" : "dark"
    });
  };

  let todoData = filter == "all" ? todos : filteredTodos;

  const todoProvider = {
    onTodoDelete: onTodoDelete,
    onToggleTodo: onToggleTodo,
    onTodoEdit,
    onToggleBookmark
  }

  return (

    <TodoContext.Provider value={todoProvider}>
      <TodoApp>
        {global_data.language} - {global_data.theme}

        <div className="container mt-5 vh-100">
          <div>
            <input
              type="button"
              value={`Toggle Theme- ${global_data.theme}`}
              onClick={toggleTheme}
            />
          </div>
          <h2><i className="fas fa-shopping-basket"></i>BUCKET LIST</h2>
          <TodoForm onTodoAdded={onTodoAdded} />
          <TodoFilter
            onFilterBookmark={onFilterBookmark}
            onFilterClear={onFilterClear}
            onFilterCompleted={onFilterCompleted}
            onFilterInComplete={onFilterInComplete}
          />

          {!isLoaded && <h4>Loading...</h4>}
          {isLoaded && (
            <TodoList
              className="animate__animated animate__swing"
              data={todoData}
              onTodoEdit={onTodoEdit}
              onToggleTodo={onToggleTodo}
              onToggleBookmark={onToggleBookmark}
            />
          )}
        </div>
      </TodoApp>
    </TodoContext.Provider>
  );
}
