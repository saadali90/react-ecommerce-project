import { Route, Routes } from "react-router-dom";
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
          
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />

        </Route>
        
      </Routes>
    </>
  );
}

export default App;
