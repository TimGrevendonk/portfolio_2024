import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import projectsJson from 'assets/projects.json';
import { Helmet } from 'react-helmet-async';
import styles from "pages/projects/projectsPage.module.scss";

// ProjectsPage function:
export function ProjectsPage() {
    const [allProjects, setAllProjects] = useState(projectsJson)

    return (
        <>
        <Helmet>
            <title>Projects</title>
            <meta
                name="description"
                content="All teh projects and events the I have made or been to. Each item describes the project in detail what I have learned, technologies i used, and what has been realised."
                data-rh="true"
            />
            <link rel="canonical" href="/projects"></link>
        </Helmet>
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
