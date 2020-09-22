import React, {useState, useEffect} from 'react'
import TodoApp from '../features/todo-app';
import TodoForm from '../features/todo-form';
import TodoList from '../features/todo-list';

const API_TODOS = "https://jsonplaceholder.typicode.com/todos/";

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

  //1. Let's get the data from the API
  //   We can use third party library like "axios"
  //   or we can use built in FETCH API
  useEffect(()=> {
    // let resultPromise = fetch(API_TODOS);
    // let response = resultPromise.then(response => {
    //   return response.json();  // This is also a promise
    // })
    // let data = response.then(data => {
    //   console.log("data: ", data);
    // })

    fetch(API_TODOS)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let transformedData = data.map(d => {
          d.percentage_completed = Math.floor(Math.random() * 100) + 25
          return d;
        })
        setTodos([...transformedData]);
      })

  },[])

  
  const onTodoAdded = (todoTitle) => {
    let newTodo = {
      title: todoTitle,
      completed: false,
      id: +new Date()
    }

    setTodos([newTodo, ...todos]);
  }

  const onTodoDelete = (todo) => {
    let remainingTodos = todos.filter(t => {
      return t.id != todo.id
    });

    setTodos([...remainingTodos]);
  }

  function onTodoEdit(title, todoId) {
    // alert(`${title} - ${todoId}`);
    let updatedTodos = todos.map(todo => {
      if (todo.id == todoId) {
        todo.title = title;
      }
      return todo;
    });

    setTodos([...updatedTodos])
  }

  // Toggle todo between completed and not completed
  const onToggleTodo = (todo) => {
    let updatedTodos = todos.map(t => {
      if (todo.id == t.id) {
        todo.completed = !todo.completed;
      }
      return t;
    });

    setTodos([...updatedTodos]);
  }

  return (
    <TodoApp>
      <div className="container mt-5 vh-100">
        <h2>Todos</h2>
        <TodoForm onTodoAdded={onTodoAdded} />
        <TodoList 
          data={todos} 
          onTodoEdit={onTodoEdit}
          onToggleTodo = {onToggleTodo}
          onTodoDelete={onTodoDelete} />
      </div>
    </TodoApp>
  )
}
