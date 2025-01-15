import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Product.css";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products") // Ganti dengan URL API backend Anda
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Filter data produk
  const kuotaProducts = products.filter((product) => product.id >= 1 && product.id <= 6);
  const pulsaProduct = products.filter((product) => product.id === 7);

  return (
    <div className="layanan">
      <h1 className="section-title">Pulsa</h1>
      <div className="product">
        {pulsaProduct.map((product) => (
          <div key={product.id} className="card">
            <div className="card-img-container">
              <img
                src={product.photo || "default-image.jpg"} // Ganti dengan properti imageUrl dari data Anda
                alt={product.name}
                className="card-img"
              />
            </div>
            <div className="card-content">
              <h2 className="card-title">{product.name}</h2>
              <p className="card-description">{product.provider}</p>
              <Link to={`/products/pulsa`} className="card-button">
                Order Via WhatsApp
              </Link>
            </div>
          </div>
        ))}
      </div>

      <h1 className="section-title">Kuota Internet</h1>
      <div className="product">
        {kuotaProducts.map((product) => (
          <div key={product.id} className="card">
            <div className="card-img-container">
              <img
                src={product.photo || "default-image.jpg"} // Ganti dengan properti imageUrl dari data Anda
                alt={product.name}
                className="card-img"
   
              />
            </div>
            <div className="card-content">
              <h2 className="card-title">{product.name}</h2>
              <p className="card-description">{product.provider}</p>
              <Link to={`/products/${product.id}/menu`} className="card-button">
                Lihat Menu
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Product;
