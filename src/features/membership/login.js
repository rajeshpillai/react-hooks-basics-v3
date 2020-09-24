import React,{useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import {useFetch} from '../../hooks/use-fetch';

const API_SESSIONS = "http://localhost:4000/sessions";

export default function Login() {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const {isLoading, response, error, doFetch} = 
      useFetch(API_SESSIONS);


  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  // useEffect(() => {

  // },[response])

  // API succeeded
  if (response?.email && !error) {
    // TODO: Move hardcoded values to constant in separate file
    localStorage.setItem("MEM_AUTH_TOKEN", response.token)
    return <Redirect to="/userlist" />
  }

  const handleSubmit = (e) => {
    // VERY IMPORTANT: SO THAT PAGE IS NOT FULLY REFRESHED
    e.preventDefault(); 
    
    doFetch({
      method: "post",
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    })
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      {response && JSON.stringify(response)}
      {error && JSON.stringify(error)}
      <div className="form-group">
        <label>Email</label>
        <input type="email"  
          onChange= {handleChange}
          value={user.email}
          name="email"
          className="form-control"  />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" 
          value={user.password}
          onChange= {handleChange}
          name="password"
          className="form-control" />
      </div>
      <button>Sign in</button>
    </form>
  )
}
