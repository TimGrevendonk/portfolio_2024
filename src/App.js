import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "pages/home/HomePage";
import { MainLayout } from "pages/layouts/MainLayout";
import { ProjectsPage } from "pages/projects/ProjectsPage";
import { ProjectDetailPage } from "pages/projects/project/ProjectDetailPage";

import './App.css';
import 'styles/globals.scss';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" >
              <Route index element={<ProjectsPage />} />
              <Route path="project/:id" element={<ProjectDetailPage />} />
            </Route>
            {/* <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
