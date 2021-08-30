import React, { Component } from "react";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import FavCoffe from "./components/FavCoffe";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <div>

        <Router>
        <Header />
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/favCoffe">
              <FavCoffe/>
            </Route>
            
          </Switch>
          
          
        </Router>
      </div>
    );
  }
}

export default App;
