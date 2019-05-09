import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Search from "./pages/Search/search"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
