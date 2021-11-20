import { Switch, Route } from "react-router-dom";
import { useState } from "react";

import Home from "../pages/Home";
import Singup from "../pages/Singup";
import User from "../pages/User";

const Routes = () => {
  const [user, setUser] = useState([]);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/singup">
        <Singup setUser={setUser} />
      </Route>
      <Route exact path="/user">
        <User user={user} />
      </Route>
    </Switch>
  );
};

export default Routes;
