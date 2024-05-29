import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import projectsJson from 'assets/projects.json';
import styles from "pages/projects/projectsPage.module.scss";

// ProjectsPage function:
export function ProjectsPage() {
    const [allProjects, setAllProjects] = useState(projectsJson)

    return (
        <>
        <section className={styles.projectsList}>
            <div>
                <h2>All Projects</h2>
                {allProjects.toReversed().map(project => {
                    return (
                        <Link
                            key={project.id}
                            to={`/projects/project/${project.id}`}
                        >
                            {project.title}
                            <p>{project.summary}</p>
                        </Link>
                    )
                })}
            </div>
        </section>
        </>
    );
}
