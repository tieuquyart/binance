import Item from './item';
import { menu } from './service';
import styles from './Derivatives.module.scss';

function Derivatives({ children }) {
    return (
        <div className={styles.content}>{menu ? menu.map((item,index) => <Item key={index} children={item} />) : null}</div>
    );
}

export default Derivatives;
