import styles from './Contact.module.scss';

function Contact({ children }) {
    return (
        <div className={styles.descriptionItem}>
            <div className={styles.descriptionTextLow}>{children?.title}</div>
            <div className={styles.descriptionTextHight}>{children?.value}</div>
        </div>
    );
}

export default Contact;
