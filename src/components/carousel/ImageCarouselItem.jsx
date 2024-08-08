import { useRef } from 'react';
import { Link } from "react-router-dom";
import styles from "components/carousel/carousel.module.scss";

// ImageCarouselItem function:
export function ImageCarouselItem({project, ...props }) {
    // Set a context so react knows wich images are possible to load.
    const images = require.context('../../assets/images', true);
    const itemRef = useRef(null)

    const scollhere = () => itemRef.current?.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center' })
    // const scollhere = () => console.log('clicked', itemRef);

    return (
        <div onClick={scollhere} onDrag={scollhere} ref={itemRef} className={`${styles.carouselItem} carouselItem`}>
                <Link to={`projects/project/${project.id}`} className={styles.headers} alt={project.title}>
                    <h4>{project.title}</h4>
                    <p>{project.introduction}</p>
                </Link>
                <figure>
                    {/* Set the name of the image only in the JSON. */}
                    {project.imageLinks ?
                        <img 
                            src={images(`./${project.imageLinks[0]}`)} 
                            alt={project.imageLinks[0]} 
                            title={project.imageLinks[0]} 
                            loading='eager'
                        />
                        : null 
                    }
                </figure>
                <Link to={`projects/project/${project.id}`} className={styles.headers}>
                    <h4>{project.title}</h4>
                    <p>{project.introduction}</p>
                </Link>
        </div>
    );
}