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
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import styles from "pages/home/homePage.module.scss";

import { LogoIcon } from 'components/icon/LogoIcon';

// Home function:
export function HomePage() {
    const images = require.context('../../assets/images', true);
    const vectors = require.context('../../assets/vectors', true);
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
                        <LinkButton path="mailto:Tim.grevendonk@Hotmail.com">
                            Email
                        </LinkButton>
                    </li>
                    <li>
                        <LinkButton path="https://www.linkedin.com/in/tim-grevendonk/">
                            Linkdin
                        </LinkButton>
                    </li>
                    <li>
                        <LinkButton path="tel:+32475346484">
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
                    <p className={styles.popout}>Een grote lange Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto esse exercitationem quae ut minus quam est corporis optio, veniam consequuntur qui. Earum animi voluptatem, deserunt veniam totam quisquam repudiandae in.</p>
                    <p className={styles.popout}>Een grote lange Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto esse exercitationem quae ut minus quam est corporis optio, veniam consequuntur qui. Earum animi voluptatem, deserunt veniam totam quisquam repudiandae in.</p>
                    <p className={styles.popout}>Een grote lange Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto esse exercitationem quae ut minus quam est corporis optio, veniam consequuntur qui. Earum animi voluptatem, deserunt veniam totam quisquam repudiandae in.</p>
                </div>
                <div className={`${styles.carouselItem}`}>
                    <figure>
                        <img src={images(`./${"me-train"}.jpg`)} alt="thats me" />
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
            <div className={`${styles.skillContent}`}>
                <div className={styles.skillCard}>
                    <h3>Programming</h3>
                    <div>
                        <LogoIcon name="Java"></LogoIcon>
                        <LogoIcon name="Csharp" cleanName="C#"></LogoIcon>
                        <LogoIcon name="Angular"></LogoIcon>
                        <LogoIcon name="React"></LogoIcon>
                    </div>
                </div>
                <div className={styles.skillCard}>
                    <h3>Tools</h3>
                    <div>
                        <LogoIcon name="Figma"></LogoIcon>
                        <LogoIcon name="Illustrator"></LogoIcon>
                        <LogoIcon name="Git"></LogoIcon>
                        <LogoIcon name="Tailwind"></LogoIcon>
                        <LogoIcon name="Photoshop"></LogoIcon>
                    </div>
                </div>
                <div className={styles.skillCard}>
                    <h3>Soft skills</h3>
                    <div>
                        <LogoIcon name="Handshake" cleanName="Social"></LogoIcon>
                        <LogoIcon name="Learn" cleanName="Learner"></LogoIcon>
                        <LogoIcon name="Brain"cleanName="technical"></LogoIcon>
                        <LogoIcon name="Wizard" cleanName="Creative"></LogoIcon>
                    </div>
                </div>
            </div>
        </section>

        <section id="journeys" className={`${styles.journeys}`}>
            <div className={styles.title}>
                <h2><AutoStoriesOutlinedIcon />journeys</h2>
            </div>
            <div className={`${styles.journeyContent}`}>
                <LinkButton pdf={true} path="CV_Tim_Grevendonk" endContent={<PictureAsPdfOutlinedIcon />}>
                    CV (old)
                </LinkButton>
                <LinkButton path={"https://thomasmore.be/nl/opleidingen/professionele-bachelor/toegepaste-informatica/application-development/geel/basistraject"} endContent={<LaunchOutlinedIcon />}>
                    Application development
                </LinkButton>
                <LinkButton path={"https://thomasmore.be/nl/opleidingen/professionele-bachelor/informatiemanagement-en-multimedia/digital-experience-design/mechelen/verkort-traject"} endContent={<LaunchOutlinedIcon />}>
                    Digital Experience Design
                </LinkButton>
                <LinkButton path={"https://en.rodekruis.be/wat-kan-jij-doen/leer-eerste-hulp/volg-een-opleiding/#wat-leer-je-tijdens-een-opleiding-ehbp"} endContent={<LaunchOutlinedIcon />}>
                    First Aid
                </LinkButton>
                <LinkButton path={"https://www.provil.be/nl/studie/operator-cnc-gestuurde-houtbewerkingsmachines-duaal"} endContent={<LaunchOutlinedIcon />}>
                    Industrial Woodworking
                </LinkButton>
            </div>

        </section>
        </>
    );
}

export default HomePage;
