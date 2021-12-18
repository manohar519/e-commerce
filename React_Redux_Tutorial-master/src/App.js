import React from "react";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
//import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import Login from "./containers/Login";
import { Route} from "react-router-dom";
import cart from "./containers/cart"

function App() {
  return (
    
    <div className="App">
    
          <Route exact path="/" component={Login}/>
          <Route exact path="/product"  component={ProductListing} />
          <Route exact path="/product/:productId" component={ProductDetails} />
          <Route path="/cart" component={cart}></Route>
    </div>
    
  );
}

export default App;
