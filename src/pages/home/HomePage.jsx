import { Link } from 'react-router-dom';

// Home function:
export function HomePage() {
    console.log('[Debug Home] rendered:')

    return (
        <>
        <h2>Tim G</h2>
        <Link to="projects">All projects</Link>
        </>
    );
}

export default HomePage;
