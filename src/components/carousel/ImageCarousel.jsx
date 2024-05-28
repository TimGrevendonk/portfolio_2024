import { useRef, useEffect } from 'react';
import styles from "components/carousel/carousel.module.scss";

// ImageCarousel function:
export function ImageCarousel({ ...props }) {
    const carouselRef = useRef(null); 
    // let scrolledAmount = 0;
    
    // function scroll() {
    //     setInterval(() => {
    //         console.log(carouselRef.current.children[0].clientWidth);
    //         carouselRef.current.scrollTo({
    //             left: scrolledAmount <= (carouselRef.current.children[0].clientWidth * carouselRef.current.children.length) ? scrolledAmount += carouselRef.current.children[0].clientWidth : scrolledAmount = 0,
    //             behavior: 'smooth'
    //         });
    //     }, 3000);
    // };

    // useEffect(() => {
    //     if (carouselRef.current) {
    //         scroll();
    //     }
    // });
    
    return (
        <div ref={carouselRef} id="workscarousel" className={styles.carousel} >
                {props.children}
        </div>
    );
}