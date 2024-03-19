import { Outlet, Link, NavLink } from "react-router-dom";
import { useState } from "react";
import './navigation.css';
import home_house from "../../../../assets/images/portfolio/navigation/home_house.jpg"
import about_myself from "../../../../assets/images/portfolio/navigation/about_myself.jpg"
import internship_team from "../../../../assets/images/portfolio/navigation/internship_team.jpg"
import projects_team from "../../../../assets/images/portfolio/navigation/projects_team.jpg"




    // <div className="PortfolioNavigation">
    //   <h1>PortfolioNavigation</h1>

    //   <Link to="/">Logo</Link>
    //   <Link to="/portfolio">Portfolio</Link>
    //   <Link to="/portfolio/projects">projects</Link>

    // </div>
const PortfolioNavigation = () => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function toggleMenu() {
    setIsNavigationOpen(!isNavigationOpen);
    console.log('[debug]', isNavigationOpen);
  }

  return (
    <>
      <div  className={`pulse ${isNavigationOpen === true ? 'isNavigationOpen' : ''}`}></div>
      <button
        id="menu-toggle" type="button"
        onClick={event => toggleMenu(event)} className={isNavigationOpen === true ? 'isNavigationOpen' : ''}
      >
        <i className="fa-solid fa-arrow-up arrowUp"></i>
        <i className="fa-solid fa-bars menuBars"></i>
      </button>
      <nav onClick={event => toggleMenu(event)} className={isNavigationOpen === true ? 'isNavigationOpen' : ''}>
        <div id="nav-items">
          <NavLink  to="/portfolio"
            end={true}
            activeClassName='active'
            className="nav-item"
          >
            <figure>
              <figcaption>Home</figcaption>
              
              <img src={home_house} alt="Author house"></img>
            </figure>
          </NavLink>
          <NavLink  to="/portfolio"
            activeClassName='active'
            end={true}
            className="nav-item"
          >
            <figure>
              <figcaption>About</figcaption>
              <img src={about_myself} alt="Portfolio author"></img>
            </figure>
          </NavLink>
          <NavLink  to="/portfolio/projects"
            activeClassName='active'
            end={true}
            className="nav-item"
          >
            <figure>
              <figcaption>Internship</figcaption>
              <img src={internship_team} alt="Project group"></img>
            </figure>
          </NavLink>
          <NavLink  to="/portfolio/projects"
            activeClassName='active'
            end={true}
            className="nav-item"
          >
            <figure>
              <figcaption>Projects</figcaption>
              <img src={projects_team} alt="Internship Team"></img>
            </figure>
          </NavLink>
          {/* <!-- <a routerLink="/portfolio/error" class="nav-item">
            <figure>
              <figcaption>X</figcaption>
              <img src="" alt="">
            </figure>
          </a> --> */}
        </div>
      </nav>
    </>
  );
}

export default PortfolioNavigation;