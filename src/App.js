import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponents"; // 匯入 Menu的資訊
import { DISHES } from "./shared/dishes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // define the state here
      dishes: DISHES // JS Object
    };
  }

  render() {
    return (
      // there are two part UI here: 1. navbar; 2. Menu.
      // Menu dishes => make dishes available as props to the menu component
      // Menu "dishes" that is defined in the state (as above "this.state =") for App component
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
