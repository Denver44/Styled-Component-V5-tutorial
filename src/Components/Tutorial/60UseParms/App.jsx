import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import Menu from "./Menu";
import Service from "./Service";
import User from "./User";

// use params
// when we want to send the prop then it good to use the render than the component.
const App = () => {
  return (
    <>
      <Menu></Menu>
      <Switch>
        <Route exact path="/" render={() => <About name="About" age="25" />} />
        <Route exact path="/contact" component={Contact} />
        <Route
          exact
          path="/services"
          component={() => <Service name="Durgesh" age="21" />}
        />
        <Route path="/user/:fname/:lname" component={() => <User />} />
        <Route component={Error} />
      </Switch>
    </>
  );
};
export default App;
