import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <p>page not found!</p>
            <Link to="/">Go back Home</Link>
        </>
    );
};