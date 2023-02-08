import Slider from "../UI/Slider/Slider";
import SliderItem from "../UI/Slider/SliderItem";
import productsData from "./ProductsData";

import AppContainer from "../UI/AppContainer";

const AvailableProducts = () => {

  const shopProducts = productsData.map((product) => (
    <SliderItem
      key={product.id}
      title={product.title}
      price={product.price}
      salePrice={product.salePrice}
      prdImage={product.prdImage}
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
