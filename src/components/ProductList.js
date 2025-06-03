import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../data';

function ProductList() {
  const [products, setProducts] = useState(data);

  return (
    <div>
      <h2>Mobile Store</h2>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;