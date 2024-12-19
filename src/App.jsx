
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Product from './component/Product';
import Home from './component/Home';
import ListProducts from './component/ListProducts';
import ProductDetail from './component/DetailProduct';
import TaskDetail from './component/DetailTask';

import Pulsa from './component/Pulsa';  

 // Contoh komponen Products
 // Contoh komponen Blog

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Product />} />
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id/menu" element={<ListProducts />} />
        <Route path="/products/:id/menu/:id_list/detail" element={<ProductDetail />} />
        <Route path="/products/task" element={<TaskDetail />} />
        <Route path="/products/pulsa" element={<Pulsa />} />
        


      </Routes>
    </Router>
  );
}

export default App;
