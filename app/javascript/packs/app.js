import React, { createContext, useReducer, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import reducer, { INITIAL_STATE } from "./hooks/reducers";
import GlobalStyles from "./styles/global-style";
import LoginPage from "./pages/login";
import EditorPage from "./pages/editor";
export const Context = createContext();
export const history = createBrowserHistory();
import "./styles/styles.css";
import HomePage from "./pages/home";
import ArticlePage from "./pages/article";
const App = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const value = {
    ...state,
    dispatch,
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("__cred");
  //   if (token === null) {
  //     history.push("/login");
  //   }
  // }, []);

  return (
    <Context.Provider value={value}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/editor" component={EditorPage} />
          <Route exact path="/article" component={ArticlePage} />
        </Switch>
        <GlobalStyles />
      </Router>
    </Context.Provider>
  );
};

export default App;
