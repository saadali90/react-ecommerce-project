import { Link } from 'react-router-dom';
import './SliderItem.css';

const SliderItem = (props) => {

    //className={`${containerFluid ? `${containerFluid}` : "container"}`}
    const productTitle = props.title;

    return(
        <>       
        <div className="slider-item">
            <Link to={`/shop/${props.prdLink}`}>
            <img src={props.prdImage} alt={props.title} />
            <div className="slider-cnt-box">
                <h3>${props.salePrice}</h3>
                <h4>was ${props.price}</h4>
                <p> {productTitle.length > 40 ? `${productTitle.substring(0, 40)}...` : productTitle } </p>
            </div>
            </Link>
        </div>
        </>

    );
};

export default SliderItem;