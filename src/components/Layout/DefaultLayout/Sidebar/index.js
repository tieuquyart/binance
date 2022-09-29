import Item from './item';
import { sideBar } from './service';
import styles from './Sidebar.module.scss';
function Sidebar() {
    return (
        <div className={styles.sideBarContainer}>
            {sideBar && sideBar.length > 0 ? sideBar.map((item, index) => <Item children={item} key={index} />) : null}
        </div>
    );
}

export default Sidebar;
