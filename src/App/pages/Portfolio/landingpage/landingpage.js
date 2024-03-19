import './landingpage.css';
import PortfolioNavigation from '../../../components/portfolio/navigation/navigation';
import { Outlet } from 'react-router-dom';

const PortfoliolandingPage = () => {
  return (
    <div className="PortfolioLandingPage">
      <PortfolioNavigation></PortfolioNavigation>
      <main>
        <p>portfolio landings page</p>
      </main>
    </div>
  );
}

export default PortfoliolandingPage;