import "./ProductDetail.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import productsData from "../../components/Products/ProductsData";
import AppContainer from "../../components/UI/AppContainer";
import MainBanner from "../Landing/MainBanner";

const FIREBASE_DOMAIN = "https://react-http-f842c-default-rtdb.asia-southeast1.firebasedatabase.app";

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Here when components loads, we load the loader because fetch will RUN on startup
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`${FIREBASE_DOMAIN}/products.json`);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error("Something went wrong!");
        // if above is true, lines below won't executes
      }

      console.log("response Data =>", responseData);

      // In firebase we have products objects with Id's, but we want in Array form so:
      const loadedProducts = [];

      for (const key in responseData) {
        loadedProducts.push({
          id: key,
          title: responseData[key].title,
          description: responseData[key].description,
          price: responseData[key].price,
          salePrice: responseData[key].saleprice,
          imageUrl: responseData[key].imgUrl,
        });
      }

      //console.log("loadedProducts =>", loadedProducts);

      setProducts(loadedProducts);
      setIsLoading(false);
    };

    fetchProducts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message); // get the error in descriptive form
    });
  }, []);


  const { productId } = useParams();
  const currentProduct = products.find(
    (product) => product.id === productId
  );

  console.log(currentProduct);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (httpError) {
    return <p> {httpError} </p>;
  }

  if (products.length === 0) {
    return <p>No data found in the database!</p>;
  }

  return (
    <>
      <AppContainer>
        <h2 className="section-title">Product Detail Page</h2>
        <div className="prd-detail-wrap">
          <p className="prd-title">{currentProduct.title}</p>
          <div className="left-half">
            <div className="prd-img-wrap">
              <img src={currentProduct.imageUrl} alt={currentProduct.title} />
            </div>
          </div>
          <div className="right-half">
            <h3 className="prd-price">
              ${currentProduct.salePrice} <span>${currentProduct.price}</span>
            </h3>
            <p> {productId} </p>
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
