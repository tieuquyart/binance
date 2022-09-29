import { Link } from 'react-router-dom';
import styles from './Contact.module.scss';

function Coin({ children }) {
    return (
        <Link className={styles.coin}>
            <div className={styles.detail}>
                <img src={children?.logo} className={styles.coinLogo} />
                <div className={styles.coinTitle}>{children?.title}</div>
                <span className={styles.sub}>{children?.sub}</span>
            </div>

            <div className={styles.price}>{children?.price}</div>
            <div
                className={`${styles.change}  ${
                    children?.changeType === true
                        ? styles.changeTrue
                        : children?.changeType === false
                        ? styles.changeFalse
                        : children?.changeType === 0
                        ? styles.changeDefaul
                        : null
                } `}
            >
                {children?.change}
            </div>
            <div  className={`${styles.transaction}  ${
                    children?.transaction === "Buy"
                        ? styles.transactionBuy
                        : children?.transaction === "Coming soon"
                        ? styles.transactionComingSoon
                        : null
                } `}>{children?.transaction}</div>
        </Link>
    );
}

export default Coin;
