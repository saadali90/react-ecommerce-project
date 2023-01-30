import './ButtonGroup.css';

import LeftArrow from '../../../assets/img/left-arrow.png'
import RightArrow from '../../../assets/img/right-arrow.png'

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    
    return (
      <div className="carousel-button-group"> 
        <button className={currentSlide === 0 ? 'slider-btn btn-prev disable' : 'slider-btn btn-prev'} onClick={() => previous()} >
          <img src={LeftArrow} alt="left arrow" />
        </button>
        <button className='slider-btn btn-next' onClick={() => next()} >
          <img src={RightArrow} alt="right arrow" />
        </button>
        {/* <button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </button> */}
      </div>
    );
  };

  export default ButtonGroup;