import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Provider} from 'react-redux'
// Pages
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import CartIcon from './Components/CartIcon';
import store from './Store/Store';

function App() {
  return (
    <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">CatsStore</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            {/* <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
          </ul>
          <CartIcon />
        </div>
        </div>
      </nav>

      <div className="container">
        
        {/* <Route path="/" component={Home} exact /> */}
        <Route path="/" component={Products} exact/>
        <Route path="/products/:id" component={Product} />
        <Route path="/cart" component={Cart} />
      </div>

    </div>
    </Router>
  );
}

function AppWithStore() {
  return <Provider store={store}>
    <App />
  </Provider>
}

export default AppWithStore;


