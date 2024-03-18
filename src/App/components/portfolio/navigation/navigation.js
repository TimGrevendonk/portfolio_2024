import { Outlet, Link } from "react-router-dom";
import './navigation.css';

const PortfolioNavigation = () => {
  return (
    <div className="PortfolioNavigation">
      <h1>PortfolioNavigation</h1>

      <Link to="/">Logo</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/portfolio/projects">projects</Link>

    </div>
  );
}

export default PortfolioNavigation;