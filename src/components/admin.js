// src/components/Home.js
import React from "react";

import products from "../constants/products";
import { Link } from "react-router-dom";
function Admin() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        <p key={products[0].id}>Add commentMore actions
          <Link to={`/admin/products/${products[0].id}`}>
            {products[0].name} - ${products[0].price}
          </Link>
        </p>
      </ul>
    </div>
  );
}

export default Admin; // Ensure this export is correct