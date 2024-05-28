import { Link } from "react-router-dom";
import styles from "components/inputs/inputs.module.scss";


/**
 * 
 * @param {string} path - the routing path to take. 
 * @param {string} size - default big, normal 
 * @param {string} startContent - react element at the start of the text 
 * @param {string} endContent - react element at the end of the text 
 * @returns react element
 */
export function LinkButton({ ...props }) {
    const size = props.size;


    return (
        <>
        <Link
            className={`${styles.linkButton} ${props.size ? styles[size] : styles.big}`} 
            to={props.path}
        >
            {props.startContent ? props.startContent : <span></span>}
            {props.children}
            {props.endContent ? props.endContent : <span></span>}
        </Link>
        </>
    );
}
// TODO: path to link component
