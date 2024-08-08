import styles from "components/icon/icon.module.scss";

// LogoIcon function:
export function LogoIcon({ ...props }) {
    const vectors = require.context('../../assets/vectors', true);
    const LogoName = props.name;
    const cleanName =  props.cleanName;

    return (
        <>
        <div className={styles.logoIcon}>
            <img 
                src={vectors(`./${LogoName}.svg`)} 
                alt={cleanName || LogoName} 
                title={cleanName || LogoName} 
                loading="lazy"
            />
            <p>{cleanName || LogoName}</p>
        </div>
        </>
    );
}