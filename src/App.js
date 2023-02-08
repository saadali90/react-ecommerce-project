import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/UI/Layout/Layout";
import { Landing } from "./pages/Landing";
import NotFound from "./pages/NotFound/NotFound";
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
          <Route path="*" element={<NotFound />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
