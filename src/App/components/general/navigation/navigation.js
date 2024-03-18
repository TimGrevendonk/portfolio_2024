import { Link } from "react-router-dom";
import './navigation.css';

const GeneralNavigation = () => {
  return (
    <>
      <Link to="/">General</Link>
      <Link to="/portfolio">Portfolio</Link>
    </>
  );
}

export default GeneralNavigation;