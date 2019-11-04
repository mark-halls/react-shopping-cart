import React, { useState } from "react";
import { Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

//contexts
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  const [cart, setCart] = useState([]);

  const addItem = () => {};

  return (
    <div className="App">
      <ProductProvider>
        <Navigation cart={cart} />

        {/* Routes */}
        <Route exact path="/" render={() => <Products />} />

        <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
      </ProductProvider>
    </div>
  );
}

export default App;
