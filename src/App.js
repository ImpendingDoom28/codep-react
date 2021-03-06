import React, {Suspense} from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Container from "./components/container/Container";
import HeaderContainer from "./components/header/HeaderContainer";
import Loader from "./components/common/loader/Loader";

const App = (props) => {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
};

export default App;
