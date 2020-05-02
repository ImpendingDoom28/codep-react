import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Container from "./components/container/Container";
import HeaderContainer from "./components/header/HeaderContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <Provider store={props.store}>
        <div className="app-wrapper">
          <>
            <HeaderContainer />
            <Container />
          </>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
