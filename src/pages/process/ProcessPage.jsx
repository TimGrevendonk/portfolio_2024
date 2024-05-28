
import styles from 'pages/process/processPage.module.scss';

// Process function:
export function ProcessPage({ ...props }) {
    const images = require.context('../../assets/images', true);


    return (
        <>
            <section className={`${styles.introduction} ${styles.containerSection}`}>
                <div className={`${styles.widthSetter}`}>
                    <div className={`${styles.titleSection}`}>
                        <h1>Introduction</h1>
                        <p>to my methods</p>
                    </div>
                    <article>
                        <div>
                            <h2>My process</h2>
                            <p></p>
                        </div>
                        <figure>
                            <img src={images(`./${"me-train"}.jpg`)} alt="" />
                            <figcaption>
                                <h2>hello</h2>
                                <p>to you</p>
                            </figcaption>
                        </figure>
                    </article>
                </div>
            </section>
            <section className={`${styles.define} ${styles.containerSection} mountain-blue`}>
                <div className={`${styles.widthSetter} `}>
                    <h1>world</h1>
                </div>
            </section>
            <section  className={`${styles.introduction} ${styles.containerSection}`}>
                <div className={`${styles.widthSetter}`}>
                    
                </div>
            </section>
        </>
    );
}