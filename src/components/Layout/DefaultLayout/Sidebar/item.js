import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.scss';

function Item({ children }) {
    const location = useLocation();
    return (
        <Link to={children?.to} className={`${styles.container} + ${location.pathname === children?.checkPage ?  styles.Page : ""}`}>
            <img src={children?.logo} className={styles.logo}/>
            <div className={styles.title}>{children?.title}</div>
        </Link>
    );
}

export default Item;
