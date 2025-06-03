import { useParams, useNavigate } from 'react-router-dom';
import data from '../data';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = data.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button className="btn" onClick={() => navigate("/")}>Back</button>
    </div>
  );
}

export default ProductDetails;
