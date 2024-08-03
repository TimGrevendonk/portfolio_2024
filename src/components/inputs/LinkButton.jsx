import { Link, useLocation } from "react-router-dom";
import styles from "components/inputs/inputs.module.scss";
import { useContext } from "react";
import { NavigationContext } from "utils/contexts/navigationContext";


/**
 * 
 * @param {string} path - the routing path to take. 
 * @param {string} size - default big, normal 
 * @param {string} startContent - react element at the start of the text 
 * @param {string} endContent - react element at the end of the text 
 * @returns react element
 */
export function LinkButton({ ...props }) {
    const pdfs = require.context('../../assets/pdfs', true);
    const isPdf = props.pdf ? true : false;
    const size = props.size;
    const path = props.path || "#";
    const incommingRef = props.reference;
    const location = useLocation();
    const highlighted = props.highlighted;
    const attentionGrabbing = props.attentionGrabbing;

    const scrollToSection = (sectionRef) => {
      sectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
        {incommingRef && location.pathname === "/"?
            <Link
            onClick={() => scrollToSection(incommingRef)}
            className={`
                ${styles.linkButton} 
                ${props.size ? styles[size] : styles.big} 
                ${highlighted ? styles.highlighted : null} 
                ${attentionGrabbing ? styles.attentionGrabbing : null}`} 
    
            >
                {props.startContent ? props.startContent : <span></span>}
                {props.children}
                {props.endContent ? props.endContent : <span></span>}
            </Link>
        : // else check for pdf
        isPdf ?
            <a
                className={`
                    ${styles.linkButton} 
                    ${props.size ? styles[size] : styles.big} 
                    ${highlighted ? styles.highlighted : null}
                    ${attentionGrabbing ? styles.attentionGrabbing : null}`} 
                href={pdfs(`./${path}.pdf`)}
            >
                            {props.startContent ? props.startContent : <span></span>}
                {props.children}
                {props.endContent ? props.endContent : <span></span>}
            </a>
            :
            <Link
                className={`
                    ${styles.linkButton} 
                    ${props.size ? styles[size] : styles.big} 
                    ${highlighted ? styles.highlighted : null}
                    ${attentionGrabbing ? styles.attentionGrabbing : null}`} 
                to={path}
            >
                {props.startContent ? props.startContent : <span></span>}
                {props.children}
                {props.endContent ? props.endContent : <span></span>}
            </Link>
        }
        </>
    );
}
// TODO: path to link component
