import { Link } from "react-router-dom";
import inputStyles from "components/inputs/inputs.module.scss";

/**
 * @param {string} path - the routing path to take. 
 * @param {string} startContent - react element at the start of the text 
 * @param {string} endContent - react element at the end of the text 
 * @returns react element
 */
export function LinkText({ ...props }) {
    const pdfs = require.context('../../assets/pdfs', true);
    const isPdf = props.pdf ? true : false;
    const path = props.path || "#";

    return (
        <>
        {isPdf ?
            <a
                className={`${inputStyles.LinkText}`} 
                href={pdfs(`./${path}.pdf`)}
            >
                {props.startContent ? props.startContent : <span></span>}
                {props.children}
                {props.endContent ? props.endContent : <span></span>}
            </a>
            :
            <Link
                className={`${inputStyles.LinkText}`} 
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

