import { Outlet } from "react-router-dom";
import { TopNavigation } from "components/navigation/TopNavigation";
import { BottomFooter } from "components/navigation/BottomFooter";
import styles from "pages/layouts/mainLayout.module.scss"; 

// Layout function:
export function MainLayout({ ...props }) {
    console.log('[Debug Layout] rendered:', { props })

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

