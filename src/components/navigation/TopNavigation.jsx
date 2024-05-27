import { Link } from "react-router-dom";
import styles from "components/navigation/topNavigation.module.scss";

// TopNavigation function:
export function TopNavigation({ ...props }) {
    console.log('[Debug topNavigation] rendered:', { props })

    return (
        <nav className={`${styles.navigation} mountain-blue`}>
          <h1>TimG</h1>
          <ul>
            <li>
              <Link className="big" to="/">Home</Link>
            </li>
            <li>
              <Link className="big" to="/#works">Works</Link>
            </li>
            <li>
              <Link className="big" to="/#about">About</Link>
            </li>
            <li>
              <Link className="big" to="/#skills">Skills</Link>
            </li>
        </ul>
      </nav>
    );
}
