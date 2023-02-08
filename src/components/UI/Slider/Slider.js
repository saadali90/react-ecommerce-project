import Carousel from "react-multi-carousel";

import ButtonGroup from "./ButtonGroup";

import "react-multi-carousel/lib/styles.css";

import "./Slider.css";

const sliderResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 0,
  },
};


const Slider = (props) => {

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      arrows={false}
      responsive={sliderResponsive}
      ssr={true} // means to render carousel on server-side.
      infinite={false}
      //autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlay={true}
      autoPlaySpeed={2500}
      keyBoardControl={true}
      customTransition="transform 1000ms ease-in-out"
      transitionDuration={500}
      containerClass="slider-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      //deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      centerMode={false}
      additionalTransfrom={0}
      //renderArrowsWhenDisabled={true}
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroup />}
    >
      {props.children}
      
    </Carousel>
  );
};

export default Slider;
