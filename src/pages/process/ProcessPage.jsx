
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
                        <p>...to my methods</p>
                    </div>
                    <article>
                        <div>
                            <h2>My process</h2>
                            <p className='popout'>
                                like everyone I personally have my own methods to design, setup, and develop my digital works.
                            </p>
                            <p className='popout'>
                                Here you can find how I tackle problems and how I approach my projects. from the humble beginnings to a final product ready for the world to see.
                            </p>
                            <p className='popout'>
                                I might best show off how I work with this portfolio as concept, proof, and final result.
                            </p>
                            <p className='popout'>
                                Of course there will be some visuals for those who arent here for the big read...
                            </p>
                        </div>
                        <figure>
                            <img src={images(`./${"workspot-mediacafe"}.jpg`)} alt="" />
                            <figcaption>
                                <h2>Great workspots</h2>
                                <p>And the plants</p>
                            </figcaption>
                        </figure>
                    </article>
                </div>
            </section>
            <section className={`${styles.define} ${styles.containerSection} mountain-blue`}>
                <div className={`${styles.widthSetter} `}>
                    <div className={`${styles.titleSection}`}>
                        <h1>Define</h1>
                        <p>...the project vibes</p>
                    </div>
                    <article>
                        <figure>
                            <img src={images(`./${"me-train"}.jpg`)} alt="" />
                            <figcaption>
                                <h2>hello</h2>
                                <p>to you</p>
                            </figcaption>
                        </figure>
                        <div>
                            <h2>Defenition and tone</h2>
                            <p className='popout'>
                                First some questions go around what feelings the end result should encompass. What do you feel best fits this project idea: summer, soft, lively, thoughtful...
                            </p>
                            <p className='popout'>
                                Before working out anything on feelings alone, we must keep in mind what cultures and standards the project will be placed under.
                            </p>
                            <p className='popout'>
                                Then we look for a list of (mostly positive) adjectives that fit together. At first, there is no limit to how many adjectives there can be noted down for a project. Although at the end it should be slimmed down to 3–5 adjectives to really focus on the core of these.
                            </p>
                            <p className='popout'>
                                Some good examples of adjectives are: trustworthy, openmindend, friendly, professional, helpful, lively, ...
                            </p>
                        </div>
                    </article>
                </div>
            </section>
            <section className={`${styles.introduction} ${styles.containerSection}`}>
                <div className={`${styles.widthSetter}`}>
                    <div className={`${styles.titleSection}`}>
                        <h1>Inspire</h1>
                        <p>...by seeing.</p>
                    </div>
                    <article>
                        <div>
                            <h2>Correlate and inspiration</h2>
                            <p className='popout'>
                                We take the adjectives and look for what colours are associated with them. Most results will be primary and secondary colours, but sometimes very specific colours derrived from a main colour.
                            </p>
                            <p className='popout'>
                                Keep a point score which colour is mentioned most in the results. If a very specific colour is given like "maroon" give the main colour (red) a half point. If you work with an existing brand and colours, give those colours an extra point for consideration. 
                            </p>
                            <p className='popout'>
                                With a good base of colours in mind we let the ideas flow. But that is never done better with external sources to inspire, like images, art pieces, illustrations, everyday items and the like, no limits to how and what.
                            </p>
                            <p className='popout'>
                                Saving images as references from all sources should yield an array of different art styles; these can give a good nudge to a desired art style but do not necessarily have to. In fact, the images do not have to match at all, that gives us the best and most unbiased look. 
                            </p>
                        </div>
                        <figure>
                            <img src={images(`./${"workspot-mediacafe"}.jpg`)} alt="" />
                            <figcaption>
                                <h2>Great workspots</h2>
                                <p>And the plants</p>
                            </figcaption>
                        </figure>
                    </article>
                </div>
            </section>
            <section className={`${styles.define} ${styles.containerSection} mountain-blue`}>
                <div className={`${styles.widthSetter} `}>
                    <div className={`${styles.titleSection}`}>
                        <h1>Combine</h1>
                        <p>...like building blocks.</p>
                    </div>
                    <article>
                        <figure>
                            <img src={images(`./${"me-train"}.jpg`)} alt="" />
                            <figcaption>
                                <h2>hello</h2>
                                <p>to you</p>
                            </figcaption>
                        </figure>
                        <div>
                            <h2>Match and association</h2>
                            <p className='popout'>
                                Find existing colour palettes  that associate closely to to the colours that are tend to be used for our project. It is not bad to keep different shades or odd combinations.
                            </p>
                            <p className='popout'>
                                Colour pallets can also be extracted from interesting images. With tools we can be sure that colours matched together are complemntary.
                            </p>
                            <p className='popout'>
                                As soon as we have the right colours and the wealth of inspiration we combine elements together to make a moodboard or collage.
                            </p>
                            <p className='popout'>
                                More moodboards can be made with different styles and colours.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
            <section className={`${styles.introduction} ${styles.containerSection}`}>
                <div className={`${styles.widthSetter}`}>
                    <div className={`${styles.titleSection}`}>
                        <h1>Extract</h1>
                        <p>...the little details.</p>
                    </div>
                    <article>
                        <div>
                            <h2>Obtain and tweak</h2>
                            <p className='popout'>
                                Now we have ourself a moodboard, and from that moodboard we will take the wanted colours that now fit together and the project.
                            </p>
                            <p className='popout'>
                                 Colours can be take manually or by tools that give the best combination of colours. With these, we can still slightly tweak to get just the right shade.
                            </p>
                            <p className='popout'>
                                If the need arrives we best select off colours, positive, and negative colours to represent texts, states, errors, and success visualizations. These will not be clearly visible initially but take up a large portion of a project.
                            </p>
                            <p className='popout'>
                                As last step we must check the colours for contrast. Which colours are texts and which are backgrounds. Does the call to action colour stand out and is the main colour not to heavy on the eyes.
                            </p>
                        </div>
                        <figure>
                            <img src={images(`./${"workspot-mediacafe"}.jpg`)} alt="" />
                            <figcaption>
                                <h2>Great workspots</h2>
                                <p>And the plants</p>
                            </figcaption>
                        </figure>
                    </article>
                </div>
            </section>
        </>
    );
}