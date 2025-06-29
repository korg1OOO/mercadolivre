import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import Product from "./components/Product";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Login from "./components/Login"; // New component

function App() {
  return (
    <Router>
      <div>
        {/* Render Header only for non-Checkout routes */}
        <Route path={["/", "/product", "/login"]} exact>
          <Header />
        </Route>
        <Layout>
          <Switch>
            <Route exact path="/" component={Product} />
            <Route exact path="/product" component={Product} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/login" component={Login} /> {/* New route */}
          </Switch>
        </Layout>
      </div>
      <GlobalStyles />
    </Router>
  );
}

export default App;