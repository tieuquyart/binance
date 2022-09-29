import Item from './item';
import { menu } from './service';
import styles from './menu.module.scss';

function Menu({ children }) {
    return (
        <div className={styles.content}>{menu ? menu.map((item,index) => <Item key={index} children={item} />) : null}</div>
    );
}

export default Menu;
