import Item from './item';
import { menu } from './service';
import styles from './User.module.scss';

function User({ children }) {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.email}>th***@gmail.com</div>
                <div  className={styles.des}>
                    <div  className={styles.regular}>
                        <div className={styles.iconRegular}></div>
                        <div className={styles.textRegular}>regular user</div>
                    </div>
                    <div className={styles.unverified}>
                        <div className={styles.iconUnverified}></div>
                        <div  className={styles.textUnverified}>unverified</div>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                {menu ? menu.map((item, index) => <Item key={index} children={item} />) : null}
            </div>
        </>
    );
}

export default User;
