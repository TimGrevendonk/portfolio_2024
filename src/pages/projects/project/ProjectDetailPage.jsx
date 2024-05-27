import { useParams } from 'react-router-dom';
import { useState } from 'react';
import projectsJson from 'assets/projects.json';

// ProjectDetailPage function:
export function ProjectDetailPage() {
    console.log('[Debug ProjectDetailPage] rendered:')
    const { id } = useParams();
    const [project, setProject] = useState(projectsJson.find(project => String(project.id) === id));

    return (
        <>
            <h2>{project.title}</h2>
        </>
    );
}