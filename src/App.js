import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Container from "./components/container/Container";
import Header from "./components/header/Header";

const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={props.store}>
        <div className="app-wrapper">
          <Header />
          <Container />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
