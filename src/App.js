import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "pages/home/HomePage";
import { MainLayout } from "pages/layouts/MainLayout";
import { ProjectsPage } from "pages/projects/ProjectsPage";
import { ProjectDetailPage } from "pages/projects/project/ProjectDetailPage";
import { ProcessPage } from "pages/process/ProcessPage";
import { ErrorPage } from "pages/error/ErrorPage";
import ReactGA from 'react-ga4';
import './App.css';
import 'styles/globals.scss';

ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID);

function App() {

  return (    
      <BrowserRouter basename="/portfolio_2024">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" >
              <Route index element={<ProjectsPage />} />
              <Route path="project/:id" element={<ProjectDetailPage />} />
            </Route>
            <Route path="process" >
              <Route index element={<ProcessPage />} />
              {/* <Route path="process/:id" element={<ProcessDetailPage />} /> */}
            </Route>
            <Route path="*" element={<ErrorPage/> } />
          </Route>
        </Routes>
      </BrowserRouter>
 
  );
}

export default App;
