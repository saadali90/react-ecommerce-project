import "./Card.css";

const Card = (props) => {

  const cardDescription = props.description;

  return (
    <li className="card-listitem">
        <img src={props.imageUrl} alt={props.title} />
        <div className="card-description-wrap">
          <div className="card-title"> {props.title} </div>
          {cardDescription && <p>{props.description}</p> }
        </div>
    </li>
  );
};

export default Card;
