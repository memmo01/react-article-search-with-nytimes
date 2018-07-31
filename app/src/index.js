import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FavoritePage from "./pages/favoritePage";
import registerServiceWorker from "./registerServiceWorker";
import Topstories from "./pages/topStories";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/favorites" component={FavoritePage} />
      <Route exact path="/topstories" component={Topstories} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
