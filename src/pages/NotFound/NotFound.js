import { Link } from "react-router-dom";
import AppContainer from "../../components/UI/AppContainer";

const NotFound = () => {
  return (
    <>
      <AppContainer>
        <p>page not found!</p>
        <Link to="/">Go back Home</Link>
      </AppContainer>
    </>
  );
};

export default NotFound;
