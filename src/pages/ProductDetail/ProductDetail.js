import "./ProductDetail.css";

import { useParams } from "react-router-dom";
import productsData from "../../components/Products/ProductsData";
import AppContainer from "../../components/UI/AppContainer";
import MainBanner from "../Landing/MainBanner";

const ProductDetail = () => {
  
  const { productId } = useParams();
  const currentProduct = productsData.find(
    (product) => product.id === productId
  );

  console.log(currentProduct);

  return (
    <>
      <AppContainer>
        <h2 className="section-title">Product Detail Page</h2>
        <div className="prd-detail-wrap">
          <p className="prd-title">{currentProduct.title}</p>
          <div className="left-half">
            <div className="prd-img-wrap">
              <img src={currentProduct.prdImage} alt={currentProduct.title} />
            </div>
          </div>
          <div className="right-half">
            <h3 className="prd-price">
              ${currentProduct.salePrice} <span>${currentProduct.price}</span>
            </h3>
            {/* <p> {productId} </p> */}
            <button className="blu-btn add-cart-btn">Add to cart</button>
          </div>
          <div className="clearfix"></div>
        </div>
      </AppContainer>
      <MainBanner />
    </>
  );
};

export default ProductDetail;
