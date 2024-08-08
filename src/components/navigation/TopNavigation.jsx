import { LinkButton } from "components/inputs/LinkButton";
import { Link } from 'react-router-dom';
import styles from "components/navigation/topNavigation.module.scss";
import { useContext } from "react";
import { NavigationContext } from "utils/contexts/navigationContext";


// TopNavigation function:
export function TopNavigation({ ...props }) {
  const { worksRef } = useContext(NavigationContext);
  const { aboutRef } = useContext(NavigationContext);
  const { skillsRef } = useContext(NavigationContext);


    return (
        <nav className={`${styles.navigation} mountain-blue`}>
          <Link to="/">
            <div className={styles.logo}>TimG</div>
          </Link>
          <ul>
            <li>
              <LinkButton reference={worksRef} path="/#works" >
                Works
              </LinkButton>
            </li>
            <li>
              <LinkButton reference={aboutRef} path="/#about">
                About
              </LinkButton>
            </li>
            <li>
              <LinkButton reference={skillsRef}  path="/#skills">
                Skills
              </LinkButton>
            </li>
            <li>
              <LinkButton path="/process">
                Approach
              </LinkButton>
            </li>
            
        </ul>
      </nav>
    );
}
