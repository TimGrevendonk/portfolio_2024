import { Link } from "react-router-dom";
import styles from "components/navigation/bottomFooter.module.scss";

// BottomFooter function:
export function BottomFooter({ ...props }) {

    return (
        <footer className={styles.footer}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                </ul>
                <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
      </footer>
    );
}
