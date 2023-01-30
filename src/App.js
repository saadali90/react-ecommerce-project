import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/UI/Layout/Layout";
import { Landing } from "./pages/Landing";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

import Products from "./pages/Shop/Products";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Landing />} />

          <Route path="shop">
            <Route index element={<Products />} />
            <Route path=":productId" element={<ProductDetail />} />
          </Route>

          {/* <Route path="/shop" element={<Products />} />
          <Route path="/shop/:productId" element={<ProductDetail />} /> */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
