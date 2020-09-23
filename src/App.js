import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Counter from "./components/counter";
import Layout from "./pages/layout";
import MultipleStateUpdate from "./components/stateupdate-multiple";
import MultipleStatePropsUpdate from "./components/state-multiple-props-update";
import UseEffectDemo from "./components/useeffect-demo";
import Todo from "./pages/todo";
import UseReducerDemo from "./pages/usereducer-demo";

import GlobalContext from "./context/global-context";

// const APP_DATA = {
//   theme: "dark", // dark or light
//   language: "english"
// };

function App() {
  const GlobalData = useContext(GlobalContext);

  // useEffect(() => {
  //   setGlobalData({
  //     ...global_data,
  //     theme: "new Theme"
  //   });
  // }, []);

  return (
    <div className="container-fluid">
      {GlobalData.language} - {GlobalData.theme}
      {/* {APP_DATA.language} - {APP_DATA.theme} */}
      <Router>
        <Layout />

        <div className="content">
          <Switch>
            <Route path="/" exact>
              <h1>Hello React</h1>
            </Route>

            <Route path="/todo">
              <Todo />
            </Route>

            <Route path="/usereducer">
              <UseReducerDemo />
            </Route>

            <Route path="/multple-state">
              <MultipleStateUpdate />
            </Route>

            <Route path="/multple-state-props">
              <MultipleStatePropsUpdate />
            </Route>

            <Route path="/useeffect">
              <UseEffectDemo />
            </Route>

            <Route path="/counter">
              <Counter />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
