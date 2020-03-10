import React, { useContext } from "react";

// Components
import Product from "./Product";

//contexts
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

const Products = () => {
  const [products] = useContext(ProductContext);
  const [, addToCart] = useContext(CartContext);

  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addItem={addToCart} />
      ))}
    </div>
  );
};

export default Products;
