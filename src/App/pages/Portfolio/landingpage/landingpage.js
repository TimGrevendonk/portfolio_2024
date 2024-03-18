import './landingpage.css';
import PortfolioNavigation from '../../../components/portfolio/navigation/navigation';
import { Outlet } from 'react-router-dom';

const PortfoliolandingPage = () => {
  return (
    <div className="PortfolioLandingPage">
      <PortfolioNavigation></PortfolioNavigation>
      <p>portfolio landings page</p>
      {/* <Outlet></Outlet> */}
    </div>
  );
}

export default PortfoliolandingPage;