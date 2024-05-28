import { useState, useEffect } from 'react';
import styles from "components/carousel/carousel.module.scss";

// ImageCarouselItem function:
export function ImageCarouselItem({project, ...props }) {
    console.log(props.project);
    // Set a context so react knows wich images are possible to load.
    const images = require.context('../../assets/images', true);

    return (
        <div className={`${styles.carouselItem} carouselItem`}>
                <div className={styles.headers}>
                    <h3>{project.title}</h3>
                    <p>{project.introduction}</p>
                </div>
                <figure>
                    {/* Set the name of the image only in the JSON. */}
                    {project.imageLinks ?
                        <img src={images(`./${project.imageLinks[0]}`)} alt="imag" />
                        : null 
                    }
                </figure>
                <div className={styles.headers}>
                    <h3>{project.title}</h3>
                    <p>{project.introduction}</p>
                </div>
        </div>
    );
}