import React, { useState, createContext } from "react";

import data from "../data";

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [products, addProduct] = useState(data);

  const addItem = item => {
    // add the given item to the cart
    addProduct([...products, item]);
  };

  return (
    <ProductContext.Provider value={[products, addItem]}>
      {props.children}
    </ProductContext.Provider>
  );
};
