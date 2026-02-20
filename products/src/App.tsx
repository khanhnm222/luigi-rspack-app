import { BrowserRouter, Routes, Route } from 'react-router-dom';

function ProductList() {
  return <h2>📦 Danh sách sản phẩm</h2>;
}

function AddProduct() {
  return <h2>➕ Thêm sản phẩm</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
