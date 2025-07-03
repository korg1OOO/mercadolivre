import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import Product from "./components/Product";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/product" component={Header} />
          <Route exact path="/login" component={Header} />
          <Route exact path="/checkout" component={Header} />
        </Switch>
        <Layout>
          <Switch>
            <Route exact path="/" component={Product} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/checkout" component={Login} />
          </Switch>
        </Layout>
        <GlobalStyles />
      </div>
    </Router>
  );
}

export default App;