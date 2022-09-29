import Item from './item';
import { itemBuyCrypto } from './service';
import styles from './buyCrypto.module.scss';
import { CaretRightOutlined } from '@ant-design/icons';

function BuyCrypto({ children }) {
    return (
        <>
            <div className={styles.titleCurrent}>
                <div className={styles.payWith}>Pay with</div>
                <div className={styles.currency}>
                    <div className={styles.img}>
                        <img
                            src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Euro-EUR-icon.png"
                            className={styles.imgTitle}
                        />
                    </div>
                    <div className={styles.textCurrency}>EUR</div>
                    <CaretRightOutlined className={styles.caretRightOutlined} />
                </div>
            </div>
            <div className={styles.content}>
                {itemBuyCrypto ? itemBuyCrypto.map((item, index) => <Item key={index} children={item} />) : null}
            </div>
        </>
    );
}

export default BuyCrypto;
