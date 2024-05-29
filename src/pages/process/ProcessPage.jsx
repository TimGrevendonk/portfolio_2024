
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
                            <img src={images(`./${"workspot-mediacafe"}.jpg`)} alt="workspace" />
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
                            <img src={images(`./${"word_to_colour_psycology"}.jpg`)} alt="colours for words" />
                            <figcaption>
                                <h2>Adjectives</h2>
                                <p>important words</p>
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
                            <img src={images(`./${"inspiring_images"}.jpg`)} alt="a lot of images" />
                            <figcaption>
                                <h2>A mix of images</h2>
                                <p>A fine selection</p>
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
                            <img src={images(`./${"moodboard"}.jpg`)} alt="" />
                            <figcaption>
                                <h2>A moodboard</h2>
                                <p>Telling the vibes</p>
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
                            <img src={images(`./${"extracting_colours"}.jpg`)} alt="" />
                            <figcaption>
                                <h2>Colour extraction</h2>
                                <p>The off colours too</p>
                            </figcaption>
                        </figure>
                    </article>
                </div>
            </section>
            <section className={`${styles.define} ${styles.containerSection} mountain-blue`}>
                <div className={`${styles.widthSetter} `}>
                    <div className={`${styles.titleSection}`}>
                        <h1>Wireframe</h1>
                        <p>gray, greyish, and great.</p>
                    </div>
                    <article>
                        <figure>
                            <img src={images(`./${"wireframe_hoppin"}.jpg`)} alt="" />
                            <figcaption>
                                <h2>Screens and components</h2>
                                <p>no colours included</p>
                            </figcaption>
                        </figure>
                        <div>
                            <h2>Layout and conceptualizing</h2>
                            <p className='popout'>
                                With wireframes we can get a feeling of layout and find the first oversights in design and form. it is a quick way without wasting toà much time picking on the details.
                            </p>
                            <p className='popout'>
                                Texts can be placeholders or preferably just different grey squares. It signifies the spacing and size of each element. Images and icons are not filled in, but the space is reserved by shapes with big crosses in them.
                            </p>
                            <p className='popout'>
                                A good estimation of the amount of needed screens is gathered from creating wireframes. They do not focus on the details like different modals or CRUD actions.
                            </p>
                            <p className='popout'>
                                It is sometimes more important to keep it minimalistic. Texts or details can sometimes distract from the purpose of a good wireframe.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
            <section className={`${styles.introduction} ${styles.containerSection}`}>
                <div className={`${styles.widthSetter}`}>
                    <div className={`${styles.titleSection}`}>
                        <h1>Prototype</h1>
                        <p>adding those colours.</p>
                    </div>
                    <article>
                        <div>
                            <h2>Look and feel</h2>
                            <p className='popout'>
                                A prototype is the first steps into a a clickable and interactive design. It is the first time we can see the design in action and feel the flow of the project.
                            </p>
                            <p className='popout'>
                                The prototype is a good way to test the design and layout. It is also a good first view to see how the colours and elements work together.
                            </p>
                            <p className='popout'>
                                Here is the first time images are used to see how they blend in with other elements. A prototype gives a good representation of how the view is scaled according to the used elements.
                            </p>
                            <p className='popout'>
                                In a prototype the details of interaction can be worked out as reference in development and user control.
                            </p>
                        </div>
                        <figure>
                            <img src={images(`./${"prototype_portfolio_home"}.jpg`)} alt="" />
                            <figcaption>
                                <h2>Protoypes</h2>
                                <p>Do you recognise these!?</p>
                            </figcaption>
                        </figure>
                    </article>
                </div>
            </section>
            <section className={`${styles.define} ${styles.containerSection} mountain-blue`}>
                <div className={`${styles.widthSetter} `}>
                    <div className={`${styles.titleSection}`}>
                        <h1>Testing</h1>
                        <p>Mom can you do this...</p>
                    </div>
                    <article>
                        <figure>
                            <img src={images(`./${"hoppin_live_test"}.jpg`)} alt="" />
                            <figcaption>
                                <h2>User test</h2>
                                <p>How does this work</p>
                            </figcaption>
                        </figure>
                        <div>
                            <h2>Input and feedback</h2>
                            <p className='popout'>
                                The input of a client or end-user is the most important part of a good project. With feedback we can find oversights that where not easily found in development.
                            </p>
                            <p className='popout'>
                                Testing can be done via live user test or simply sending the design files to a friend or family member that has no knowhouw of the project. there are tools that support detailed testing insights.
                            </p>
                            <p className='popout'>
                                The speed and ease of acces can give a good indication as to where there are bottleneks in the design. Assumptions can be made on how the user will interact with the design, but a user will always surprise you.
                            </p>
                            <p className='popout'>
                                Testing is not done once in a single stage, it is a continues process and done in many forms.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
            <section className={`${styles.introduction} ${styles.containerSection}`}>
                <div className={`${styles.widthSetter}`}>
                    <div className={`${styles.titleSection}`}>
                        <h1>Programming</h1>
                        <p>make it look easy.</p>
                    </div>
                    <article>
                        <div>
                            <h2>Problem to product</h2>
                            <p className='popout'>
                                Choosing the right technologies is key to a working end result. All the preperation is for nothing if the wrong tools are used. 
                            </p>
                            <p className='popout'>
                                A framewok helps out in a lot of ways but can be cumbersome in other ways. The desision to go more lightweight depends on the project.
                            </p>
                            <p className='popout'>
                                Programming based on the designs gives a enormous speed boost in development. The designs are the blueprint and the programmed result is the construction.
                            </p>
                            <p className='popout'>
                                Responsive pages and dynamically loaded elements are practices of the present. The "works on my machine" is sometimes the hardest problem to work around. 
                            </p>
                        </div>
                        <figure>
                            <img src={images(`./${"me_programming"}.jpg`)} alt="" />
                            <figcaption>
                                <h2>A programmer</h2>
                                <p>Meticulously programming</p>
                            </figcaption>
                        </figure>
                    </article>
                </div>
            </section>
            <section className={`${styles.define} ${styles.containerSection} mountain-blue`}>
                <div className={`${styles.widthSetter} `}>
                    <div className={`${styles.titleSection}`}>
                        <h1>Extras</h1>
                        <p>there was more.</p>
                    </div>
                    <article>
                        <figure>
                            <img src={images(`./${"lessons_school"}.jpg`)} alt="" />
                            <figcaption>
                                <h2>Learning course</h2>
                                <p>Happy times</p>
                            </figcaption>
                        </figure>
                        <div>
                            <h2>Important and necessary</h2>
                            <p className='popout'>
                                Other topics that are important and deserve mentioning:
                            </p>
                            <p className='popout'>
                                Typography is an important part of a design and can give a different feeling to a product. The cycle of finding the right typography is done in the setops of finding inspiration, making moodboards, and colours, they are al connected. 
                            </p>
                            <p className='popout'>
                                Some projects need extensive branding and the creation of a logo. this could even come as late as the prototype stage. Branding provides help for colours and typography.
                            </p>
                            <p className='popout'>
                                A final product must stay alive of course. A way to make it available to the public i not always easy. A side project can not sustain a high costed hosting platform.
                            </p>
                        </div>
                    </article>
                </div>
            </section>
            <section className={`${styles.introduction} ${styles.containerSection}`}>
                <div className={`${styles.widthSetter}`}>
                    <div className={`${styles.titleSection}`}>
                        <h1>reflecting</h1>
                        <p>never making faults again.</p>
                    </div>
                    <article>
                        <div>
                        <h2>Input and feedback</h2>
                            <p className='popout'>
                                There is always something you learn, some stupid mistake you made that you will never forget now (until you do it again).
                            </p>
                            <p className='popout'>
                                Every project and experience is a learning process. the more we do and experiment the better we get.
                            </p>
                            <p className='popout'>
                                Sometimes it is good to look back at the finished project before moving to the next. take every step as a victory, no matter how hard the journy.
                            </p>
                        </div>
                        <figure>
                            <img src={images(`./${"dorm_nighttime"}.jpg`)} alt="" />
                            <figcaption>
                                <h2>After a project</h2>
                                <p>Goodnight</p>
                            </figcaption>
                        </figure>
                    </article>
                </div>
            </section>
        </>
    );
}