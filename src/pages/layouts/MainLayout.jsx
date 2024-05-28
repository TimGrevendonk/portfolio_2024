import { useRef } from 'react';
import { Outlet } from "react-router-dom";
import { TopNavigation } from "components/navigation/TopNavigation";
import { BottomFooter } from "components/navigation/BottomFooter";
import { NavigationProvider } from "utils/contexts/navigationContext";
import styles from "pages/layouts/mainLayout.module.scss"; 

// Layout function:
export function MainLayout({ ...props }) {
    const worksRef = useRef(null)

    const scrollToSection = () => {
        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
            <div className={styles.contentContainer}>
                <header>
                    <TopNavigation />
                </header>
                <main>
                    <Outlet />
                </main>
                <BottomFooter />
            </div>
    );
}

