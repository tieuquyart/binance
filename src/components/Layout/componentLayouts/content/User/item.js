import { ArrowRightOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import styles from './User.module.scss';

function Item({ children }) {
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem('accessToken');
        navigate('/', { replace: true });
    };

    return (
        <Link to={children?.to} className={styles.container} onClick={logOut}>
            <div className={styles.logoItem}>
                <img src={children?.logo} className={styles.logo} alt="Logo" />
            </div>
            <div className={styles.detailItem}>
                <div className={styles.title}>{children?.title}</div>
                <div className={styles.description}>{children?.description}</div>
            </div>
            <div className={styles.btn}>
                <ArrowRightOutlined className={styles.arrowRight} />
            </div>
        </Link>
    );
}

export default Item;
