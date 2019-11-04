import React, { useContext } from "react";

// Components
import Product from "./Product";

//contexts
import { ProductContext } from "../contexts/ProductContext";

const Products = () => {
  const [products, addProduct] = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addItem={addProduct} />
      ))}
    </div>
  );
};

export default Products;
