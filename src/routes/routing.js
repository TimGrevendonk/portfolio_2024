import { Routes, Route } from "react-router-dom";
import GeneralHomepage from "../app/pages/general/homepage.js";
import PortfoliolandingPage from "../app/pages/portfolio/landingpage.js";
import PortfolioProjects from "../app/pages/portfolio/projects/projects.js";
import Project from "../app/pages/portfolio/projects/project/project.js";
import Error from "../app/pages/error/error.js";

const Routing  = () => {
  return (
      <Routes>
        <Route path="/" exact element={<GeneralHomepage/>}></Route>
        <Route path="/portfolio" >
          {/* Index is default render for page */}
          <Route index element={<PortfoliolandingPage/>}></Route>
          <Route path="projects" >
            <Route index element={<PortfolioProjects/>}></Route>
            <Route path=":id" element={<Project/>}></Route>
          </Route>
        </Route>
        <Route path="/error" element={<Error/>}></Route>
      </Routes>
  );
}

export default Routing;