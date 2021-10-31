import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import "./App.css";

import AboutDetail from "./AboutDetail";
import Home from "./Home";
import Navbarr from "./Navbarr";
import EducationDet from "./EducationDet";
import WorkDet from "./WorkDet";
import StackDet from "./StackDet";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home />;
          }}
        />
        <>
          <Route
            exact
            path="/about"
            render={() => {
              return <AboutDetail />;
            }}
          />
          <Route
            exact
            path="/education"
            render={() => {
              return <EducationDet />;
            }}
          />
          <Route
            exact
            path="/work"
            render={() => {
              return <WorkDet />;
            }}
          />
          <Route
            exact
            path="/stack"
            render={() => {
              return <StackDet />;
            }}
          />
        </>
      </Switch>
    </div>
  );
}

export default withRouter(App);
