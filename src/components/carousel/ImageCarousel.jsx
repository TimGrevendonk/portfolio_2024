import styles from "components/carousel/carousel.module.scss";

// ImageCarousel function:
export function ImageCarousel({ ...props }) {
    // const scollBody = document.getElementById("workcarousel").scrollLeft += 1;
    // const scollAmount = document.getElementsByClassName("carouselItem")[0]
    
    (function scoll(params) {
        setInterval(() => {
            document.getElementById("workcarousel").scrollLeft += 240;
            // document.getElementsByClassName("carouselItem")[0]
        }, 2000);  
    })();

    return (
        <div id="workcarousel" className={styles.carousel} >
            {props.children}
        </div>
    );
}