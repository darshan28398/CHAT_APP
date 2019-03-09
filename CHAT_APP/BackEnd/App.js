import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Containers/layout";
import Header from "../FrontEnd/build/Header";
var express = require('express');

app.use(express.static(path.join(__dirname, 'frontend/build')))

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
