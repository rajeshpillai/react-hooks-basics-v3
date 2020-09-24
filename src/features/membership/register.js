import React,{useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import {useFetch} from '../../hooks/use-fetch';

const API_SESSIONS = "http://localhost:4000/sessions";

export default function Register() {

  const [user, setUser] = useState({
    email: "",
    password: "",
    phone: "",
    date_of_birth: "",
    country: ""
  });

  const {isLoading, response, error, doFetch} = 
      useFetch(API_SESSIONS);

  let token = localStorage.getItem("MEM_AUTH_TOKEN");


  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  // useEffect(() => {

  // },[response])


  // IF already logged in
  if (token) {
    return <Redirect to="/userlist" />
  }

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

      <div className="form-group">
        <label>Country</label>
        <input type="text" 
          value={user.phone}
          onChange= {handleChange}
          name="phone"
          className="form-control" />
      </div>

      <div className="form-group">
        <label>Country</label>
        <input type="text" 
          value={user.country}
          onChange= {handleChange}
          name="country"
          className="form-control" />
      </div>
      <div className="form-group">
        <label>Country</label>
        <input type="date" 
          value={user.date_of_birth}
          onChange= {handleChange}
          name="date_of_birth"
          className="form-control" />
      </div>
      <button>Register</button>
    </form>
  )
}
