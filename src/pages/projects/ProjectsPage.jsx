import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import projectsJson from 'assets/projects.json';

// ProjectsPage function:
export function ProjectsPage() {
    const [allProjects, setAllProjects] = useState(projectsJson)

    return (
        <>
            <h2>All Projects</h2>
            {allProjects.map(project => {
                return ( 
                    <Link key={project.id} to={`/projects/project/${project.id}`}>
                        {project.id} {project.title} 
                    </Link>
                )
            })}
        </>
    );
}
