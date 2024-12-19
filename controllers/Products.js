const db = require('../db');

// Mendapatkan semua produk
exports.getAllProducts = (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to get products' });
    }
    res.status(200).json(results);
  });
};

// Menambahkan produk baru
exports.listProduct = (req, res) => {
  // Ambil id dari parameter request
  const { id } = req.params;

  // Query untuk mengambil data produk berdasarkan id
  const query = `
    SELECT * 
    FROM list_product
    WHERE list_product.id_product = ?
  `;

  // Eksekusi query
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to get products', details: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'No product found for the given id' });
    }
    res.status(200).json(results);
  });
};

exports.listProductDetail = (req, res) => {
  const { id, productId } = req.params; // Pastikan kedua ID diterima

  const query = `
    SELECT * 
    FROM list_product
    WHERE id_product = ? AND id = ?;
  `;

  db.query(query, [id, productId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error', details: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(results[0]); // Kirimkan produk yang ditemukan
  });
};

