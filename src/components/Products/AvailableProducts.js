import Slider from "../UI/Slider/Slider";
import SliderItem from "../UI/Slider/SliderItem";
import { useEffect, useState } from "react";
//import ProductsData from "./ProductsData";

import AppContainer from "../UI/AppContainer";

const FIREBASE_DOMAIN = "https://react-http-f842c-default-rtdb.asia-southeast1.firebasedatabase.app";

const AvailableProducts = () => {
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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (httpError) {
    return <p> {httpError} </p>;
  }

  if (products.length === 0) {
    return <p>No data found in the database!</p>;
  }

  const shopProducts = products.map((product) => (
    <SliderItem
      key={product.id}
      title={product.title}
      price={product.price}
      salePrice={product.salePrice}
      prdImage={product.imageUrl}
      prdLink={product.id}
    />
  ));

  return (
    <>
      <AppContainer>
        <h2 className="section-title">Available Products</h2>
        <Slider>{shopProducts}</Slider>
      </AppContainer>
    </>
  );
};

export default AvailableProducts;
