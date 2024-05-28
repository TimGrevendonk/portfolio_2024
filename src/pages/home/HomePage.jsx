import { Link } from 'react-router-dom';
import { ActionButton } from 'components/inputs/ActionButton';
import { LinkButton } from "components/inputs/LinkButton";
import { ImageCarousel } from "components/carousel/ImageCarousel";
import { ImageCarouselItem } from "components/carousel/ImageCarouselItem";
import projectsJSon from "assets/projects.json"
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import styles from "pages/home/homePage.module.scss";

// Home function:
export function HomePage() {
    const images = require.context('../../assets/images', true);
    const allProjectsShuffeled = projectsJSon
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

    return (
        <>
        <section id='home' className={styles.hero}>
            <div>
                <h1>All the things...</h1>
                <ActionButton path="/projects">
                    <h2>All projects</h2>
                </ActionButton>
            </div>
            <div>
                <ul>
                    <li>
                        <LinkButton path="/">
                            Email
                        </LinkButton>
                    </li>
                    <li>
                        <LinkButton path="/">
                            Linkdin
                        </LinkButton>
                    </li>
                    <li>
                        <LinkButton path="/">
                            Phone
                        </LinkButton>
                    </li>
                </ul>
            </div>
        </section>

        <section id="works" className={`${styles.works} mountain-blue`}>
            <div className={styles.title}>
                <h2><HomeRepairServiceOutlinedIcon />Works</h2>
                <LinkButton path={"/projects"} size="small" endContent={<ArrowRightOutlinedIcon/>}>
                    All projects 
                </LinkButton>
                <ImageCarousel>
                {allProjectsShuffeled.map((project, index) => {
                    return (
                        <ImageCarouselItem key={project.id} project={project}>

                        </ImageCarouselItem>
                    );
                })}
                </ImageCarousel>
            </div>
            <div>

            </div>
        </section>

        <section id="about" className={`${styles.about}`}>
            <div className={styles.title}>
                <h2><BadgeOutlinedIcon/>About</h2>
            </div>
            <article>
                <div>
                    <h3>This is me</h3>
                    <p>Een grote lange Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto esse exercitationem quae ut minus quam est corporis optio, veniam consequuntur qui. Earum animi voluptatem, deserunt veniam totam quisquam repudiandae in.</p>
                    <p>Een grote lange Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto esse exercitationem quae ut minus quam est corporis optio, veniam consequuntur qui. Earum animi voluptatem, deserunt veniam totam quisquam repudiandae in.</p>
                    <p>Een grote lange Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto esse exercitationem quae ut minus quam est corporis optio, veniam consequuntur qui. Earum animi voluptatem, deserunt veniam totam quisquam repudiandae in.</p>
                </div>
                <div className={`${styles.carouselItem}`}>
                    <figure>
                        <img src={images(`./${"mediacafe-me 1.png"}`)} alt="imag" />
                    </figure>
                    <div className={styles.headers}>
                        <h3>This is me</h3>
                        <p>Helloz?</p>
                    </div>
                </div>
            </article>
        </section>

        <section id="skills" className={`${styles.skills} mountain-blue`}>
            <div className={styles.title}>
                <h2><TipsAndUpdatesOutlinedIcon />Skills</h2>
            </div>
            <p>Some text to read</p>
        </section>

        <section id="journeys" className={`${styles.journeys}`}>
            <div className={styles.title}>
                <h2><AutoStoriesOutlinedIcon />journeys</h2>
            </div>
            <p>Some text to read</p>
        </section>
        </>
    );
}

export default HomePage;
