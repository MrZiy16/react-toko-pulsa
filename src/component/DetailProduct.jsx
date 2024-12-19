import{ useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/Product.css';

function ProductDetail() {
  const { id, id_list } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${id}/menu/${id_list}/detail`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id, id_list]);

  // Fungsi untuk membuat pesan WhatsApp
  const createWhatsAppMessage = () => {
    if (!product) return '';
    
    const message = `Halo, saya ingin beli dengan produk ${product.name}

Detail Produk:
- Nama: ${product.name}
- Harga: Rp ${product.price}
- Deskripsi: ${product.description || 'Tidak ada deskripsi'}
- Nomor : (nomor hp kamu)

Apakah produk ini masih tersedia?`;

    // Nomor WhatsApp (ganti dengan nomor yang sesuai)
    const phoneNumber = '6283168867815'; // Contoh nomor, ganti dengan nomor WhatsApp Anda
    
    // Encode pesan untuk URL
    const encodedMessage = encodeURIComponent(message);
    
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  if (!product) {
    return <div className="no-product">Product not found.</div>;
  }

  return (
    <div className="product-detail">
      <h2>Product Details</h2>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p><strong>Description:</strong> {product.description || 'No description available'}</p>
        <p><strong>Price:</strong> Rp {product.price}</p>

        
        {/* Tombol WhatsApp */}
        <a 
          href={createWhatsAppMessage()} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="buy-button"
          style={{display: 'flex', alignItems: 'center'}}
        >

          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" alt="WhatsApp" width="20" height="20" style={{marginRight: '5px'}}/>
          Beli via WhatsApp
      

        </a>
        
        <Link to={`/products/${id}/menu`} className="card-button">
          Kembali ke Daftar Produk
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;