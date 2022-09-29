import Item from './item';
import { menu } from './service';
import styles from './Finance.module.scss';

function Finance({ children }) {
    return (
        <div className={styles.content}>{menu ? menu.map((item,index) => <Item key={index} children={item} />) : null}</div>
    );
}

export default Finance;
