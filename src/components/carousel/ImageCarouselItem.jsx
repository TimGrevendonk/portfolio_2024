import { useState, useEffect } from 'react';
import styles from "components/carousel/carousel.module.scss";

// ImageCarouselItem function:
export function ImageCarouselItem({ ...props }) {
    // Set a context so react knows wich images are possible to load.
    const images = require.context('../../assets/images', true);

    return (
        <div className={`${styles.carouselItem} carouselItem`}>
            <div>
                <div>
                    <h3>text</h3>
                    <p>Explaination</p>
                </div>
                <figure>
                    {/* Set the name of the image only in the JSON. */}
                    {props.imageLinks ?
                        <img src={images(`./${props.imageLinks[0]}`)} alt="imag" />
                        : null 
                    }
                </figure>
                <div>
                    <h3>text</h3>
                    <p>Explaination</p>
                </div>
            </div>
        </div>
    );
}