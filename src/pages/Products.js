import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Book</Link>
        </li>
        <li>
          <Link to="/products/p2">Stuff</Link>
        </li>
        <li>
          <Link to="/products/p3">Things</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
