import { Link } from "react-router-dom";
import AppContainer from "../../components/UI/AppContainer";

import './NotFound.css';

const NotFound = () => {
  return (
    <>
      <AppContainer>
        <div className="notfound-page">
          <h2>Page Not Found!</h2>
          <Link to="/"> Go back Home</Link>
        </div>
      </AppContainer>
    </>
  );
};

export default NotFound;
