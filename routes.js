const express = require('express');
const router = express.Router();
const { getAllProducts, listProduct, listProductDetail } = require('./controllers/Products');

router.get('/products', getAllProducts); // Rute untuk semua produk
router.get('/products/:id/menu', listProduct); // Rute untuk produk berdasarkan ID
router.get('/products/:id/menu/:productId/detail',listProductDetail);
       

module.exports = router;
