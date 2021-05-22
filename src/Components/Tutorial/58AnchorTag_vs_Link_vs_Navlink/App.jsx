import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import Menu from "./Menu";

// Switch help us to select the path whihc match with the path
// exact is must othere eveypage starting form / will be matched and only / the first will render.

const App = () => {
  return (
    <>
      <Menu></Menu>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
        {/* This for only the error page as error page doesnt have any fix router so just wrote the compoment. only. */}
      </Switch>
    </>
  );
};
export default App;
