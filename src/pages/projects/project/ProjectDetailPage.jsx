import { useParams } from 'react-router-dom';
import { useState } from 'react';
import projectsJson from 'assets/projects.json';
import carouselStyles from "components/carousel/carousel.module.scss";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { Helmet } from 'react-helmet-async';
import styles from "pages/projects/project/projectDetailPage.module.scss";


// ProjectDetailPage function:
export function ProjectDetailPage() {
    const images = require.context('../../../assets/images', true);

    const { id } = useParams();
    const [project, setProject] = useState(projectsJson.find(project => String(project.id) === id));
    const date = new Date(project.datetime);

    return (
        <>
        <Helmet>
            <title>{"TimG: " + project.title}</title>
            <meta
                name="description"
                content={project.introduction}
                data-rh="true"
            />
            <link rel="canonical" href={"/project/" + project.title}></link>
        </Helmet>
        <section className={styles.introduction}>
            <div className={styles.contentSetter}>
                <div className={styles.info}>
                    <div>
                        <h2><AssignmentOutlinedIcon />{project.title}</h2>
                        <div className={styles.subtitle}>
                            <h3>{project.subject}</h3>
                            <p>{date.toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div>
                        <h3>introduction</h3>
                        <p>{project.introduction}</p>
                    </div>
                </div>
                <div className={`${carouselStyles.carouselItem} ${styles.images}`}>
                    {project.imageLinks.map((image, index) => (
                        <figure key={index}>
                            <img src={images(`./${image}`)} title={image} alt={image} />
                            {console.log("image:")}
                            {console.log(image)}
                        </figure>
                    ))}

                </div>
            </div>
        </section>

        <section className={`${styles.explanation} mountain-blue`}>
            <div className={styles.contentSetter}>
                <h2><ChecklistRtlOutlinedIcon/>explaination</h2>
                <div>
                    <div  className={styles.tags}>
                        <h3>Quick tags</h3>
                        <ul>
                            {project.tags.map((tag, index) =>
                                <li key={index}>{tag}</li>
                            )};
                        </ul>
                    </div>
                    <div  className={styles.text}>
                        <h3>Project content</h3>
                        {project.texts.map((text, index) => 
                            <p key={index}>{text}</p>
                        )}
                    </div>
                </div>
            </div>
        </section>

        <section className={`${styles.learned}`}>
            <div className={styles.contentSetter}>
                <h2><SchoolOutlinedIcon />Learned</h2>
                <div>
                    <div>
                        <p>{project.summary}</p>
                    </div>
                    <ul>
                        {project.learned.map((text, index) =>
                                <li key={index}>
                                    {text}
                                </li>
                            )}
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
}