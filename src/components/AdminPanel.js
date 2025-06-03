import { useState } from 'react';
import initialProducts from './data';

function AdminPanel() {
  const [products, setProducts] = useState(initialProducts);
  const [form, setForm] = useState({ name: "", price: "", description: "", image: "" });

  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      ...form,
      price: parseFloat(form.price),
    };
    setProducts([...products, newProduct]);
    setForm({ name: "", price: "", description: "", image: "" });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const editProduct = (id, updatedPrice) => {
    setProducts(products.map(p =>
      p.id === id ? { ...p, price: parseFloat(updatedPrice) } : p
    ));
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input className="form-control" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" />
      <input className="form-control" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Description" />
      <input className="form-control" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="Image URL" />
      <input className="form-control" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="Price" />
      <button onClick={addProduct}>Add</button>

      {products.map((product, idx) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <input
            className="form-control"
            defaultValue={product.price}
            onBlur={(e) => editProduct(product.id, e.target.value)}
          />
          <button className="float-right" onClick={() => editProduct(product.id, product.price)}>Save</button>
          <button className="float-right" onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
