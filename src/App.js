import React, { Component } from "react";
import Navbar from "./components/Navbar";
import User from "./components/User";
import './App.css';
import logo from "./logo.svg";






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  render() {

    return (
      <div className="container-fluid">
        <img src={logo}></img>
      </div>
      
    );
  }
  }


export default App;
