import { Link } from 'react-router-dom';
import { ActionButton } from 'components/inputs/ActionButton';

const styles = {
    container: {
        display: 'flex',
        flexFlow: "column nowrap",
        justifyItems: "center",
        alignItems: "center",
        gap: "3rem",
        height: "100%",
    }
};

console.log(styles.container);

// ErrorPage function:
export function ErrorPage() {
    return (
        <section style={styles.container}>
            <h1>wait a second...</h1>
            <h2>This is not an active page?!</h2>
            <ActionButton path="/">
                <h2>Help, go back to home. </h2>
            </ActionButton>
        </section>
    );
}
