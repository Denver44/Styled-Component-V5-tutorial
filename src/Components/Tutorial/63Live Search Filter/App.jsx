import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./About";
import Menu from "./Menu";
import Search from "./Serach";

// use params
const App = () => {
  return (
    <>
      <Menu></Menu>
      <Switch>
        <Route exact path="/" render={() => <About />} />
        <Route exact path="/search" component={Search} />
        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
};
export default App;
