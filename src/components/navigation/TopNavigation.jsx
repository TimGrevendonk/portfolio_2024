import { LinkButton } from "components/inputs/LinkButton";
import styles from "components/navigation/topNavigation.module.scss";

// TopNavigation function:
export function TopNavigation({ ...props }) {

    return (
        <nav className={`${styles.navigation} mountain-blue`}>
          <h1>TimG</h1>
          <ul>
            <li>
              <LinkButton path="/#home">
                Home
              </LinkButton>
            </li>
            <li>
              <LinkButton  path="/#works" >
                Works
              </LinkButton>
            </li>
            <li>
              <LinkButton path="/#about">
                About
              </LinkButton>
            </li>
            <li>
              <LinkButton path="/#skills">
                Skills
              </LinkButton>
            </li>
        </ul>
      </nav>
    );
}
