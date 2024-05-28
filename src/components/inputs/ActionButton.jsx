import { Link } from 'react-router-dom';
import styles from "components/inputs/inputs.module.scss";

/**
 * Call to action button with navigation capabilities
 * @param {string} path - The path to navigate to when the button is clicked. 
 * @returns a link button that navigates to the specified path.
 */
export function ActionButton({ ...props }) {

    return (
        <Link to={props.path || "#"} className={styles.actionButton}>
            {props.children}
        </Link>
    );
}

export default ActionButton