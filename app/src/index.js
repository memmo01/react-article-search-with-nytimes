import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FavoritePage from "./pages/favoritePage";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/favorites" component={FavoritePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
