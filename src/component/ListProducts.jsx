import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Make sure to use useNavigate
import '../styles/Product.css'; // Make sure the CSS file is available

function ListProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams(); // Get the 'id' from the URL params
  const navigate = useNavigate(); // Initialize useNavigate to handle navigation

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}/menu`);
        if (!response.ok) {
          throw new Error('Failed to fetch data from server');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]); // Re-fetch data if the 'id' changes

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  if (products.length === 0) {
    return <div className="no-products">No products found for this ID.</div>;
  }

  const handleClick = (productId, idProduct) => {
    // Navigate to the product detail page with productId and idProduct
    navigate(`/products/${idProduct}/menu/${productId}/detail`);
  };

  return (
    <>
      <h2>Menu </h2>
    <ul className="product-list">
      {products.map((product) => (
        <li
          key={product.id}
          className="product-item"
          onClick={() => handleClick(product.id, product.id_product)} // Pass both product.id and product.id_product
        >
          <h4>{product.name}</h4>
          <p>Rp.{product.price}</p>
        </li>
      ))}
    </ul>
      </>
  );
}

export default ListProducts;
