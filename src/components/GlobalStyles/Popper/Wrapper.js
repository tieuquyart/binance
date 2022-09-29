import styles from './Popper.module.scss';

function wrapper({ children }) {
    return <div className={styles.wrapper}>{children}</div>;
}

export default wrapper;
