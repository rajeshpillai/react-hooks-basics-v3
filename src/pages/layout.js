import React from 'react';

import {
  NavLink, Redirect
} from 'react-router-dom';


export default function Layout() {
  let token = localStorage.getItem("MEM_AUTH_TOKEN");

  const handleLogout = () => {
    localStorage.removeItem("MEM_AUTH_TOKEN");
    // return <Redirect to="/membership" />
  }

  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-success">
      <NavLink  exact className="navbar-brand" to="/">Home</NavLink>
      { token && <a onClick={handleLogout} className="btn btn-warning" href="#">logout</a>}
      <button class="navbar-toggler" type="button" 
          data-toggle="collapse" 
          data-target="#top-nav" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div id="top-nav" className="collapse navbar-collapse">
        <NavLink className="navbar-brand" to="/todo">Todo</NavLink>
        <NavLink className="navbar-brand" to="/membership">Membership</NavLink>
        <NavLink className="navbar-brand" to="/usereducer">useReducer Demo</NavLink>
        <NavLink className="navbar-brand" to="/classcomp">Class Component Demo</NavLink>
        <NavLink className="navbar-brand" to="/counter">Counter</NavLink>
        <NavLink className="navbar-brand" to="/multple-state">Multiple State Update</NavLink>
        <NavLink className="navbar-brand" to="/multple-state-props">Multiple State Props Update</NavLink>
        <NavLink className="navbar-brand" to="/useeffect">useEffect Demo</NavLink>
      </div>
    </nav>
  )
}