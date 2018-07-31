import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import FavoritePage from "./pages/favoritePage";
import Header from "./components/header";
import registerServiceWorker from "./registerServiceWorker";
import Topstories from "./pages/topStories";

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/favorites" component={FavoritePage} />
        <Route exact path="/topstories" component={Topstories} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
