import React, { useState } from "react";
import { Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

//contexts
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <CartProvider>
          <Navigation />
          {/* Routes */}
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={ShoppingCart} />
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
