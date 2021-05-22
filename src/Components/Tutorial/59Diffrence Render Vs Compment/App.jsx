import React from "react";
import { Route, Switch } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import Menu from "./Menu";
import Service from "./Service";

// React Route Render Method Difference
// how to send prop.

// There is no much difference in render and component.
// If u want to send some props then use render otherwise component.
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
        <Route component={Error} />
      </Switch>
    </>
  );
};
export default App;
