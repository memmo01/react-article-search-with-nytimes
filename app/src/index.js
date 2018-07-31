import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/header";
import FavoritePage from "./pages/favoritePage";
import registerServiceWorker from "./registerServiceWorker";
import Topstories from "./pages/topStories";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div className="Header">
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
