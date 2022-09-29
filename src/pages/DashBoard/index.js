import { EditOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseCheckToken from '../../hooks/checkToken';
import Coin from './Contact/Coin';
import Contact from './Contact/Contact';
import { coin, contact } from './Contact/service';
import styles from './DashBoard.module.scss';

function DashBoard() {
    const [hideBalance, setHideBalance] = useState(false);
    const navigate = useNavigate();
    const login = UseCheckToken()
    useEffect(()=> {
        if (login === false ) {
            navigate('/');
        }   
    },[])
    

    const handleHideBalance = () => {
        setHideBalance(!hideBalance);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className={styles.image} />
                <div className={styles.contact}>
                    <div className={styles.titleContact}>
                        <div>thanhdz</div>
                        <EditOutlined className={styles.iconEdit} />
                    </div>
                    <div className={styles.description}>
                        {contact && contact.length > 0 ? contact.map((item) => <Contact children={item} />) : null}
                    </div>
                </div>
            </div>
            <div className={styles.balance}>
                <div className={styles.balanceTitle}>
                    <div className={styles.titleText}>Estimated Balance</div>
                    {hideBalance ? (
                        <EyeInvisibleOutlined className={styles.titleIcon} onClick={handleHideBalance} />
                    ) : (
                        <EyeOutlined className={styles.titleIcon} onClick={handleHideBalance} />
                    )}
                </div>
                <div className={styles.currency}>
                    {hideBalance ? <div className={styles.currencyText}>$1,000,000,000</div> : <div>********</div>}
                </div>
                <div className={styles.hot}>
                    <div className={styles.hotTitle}>Hot</div>
                    <div className={styles.table}>
                        <div className={styles.table}>
                            <div className={styles.tableTitle}>
                                <div className={styles.tableName}>Name</div>
                                <div className={styles.tablePrice}>Price</div>
                                <div className={styles.tableChange}>24H Change</div>
                                <div className={styles.div}></div>
                            </div>
                            <div className={styles.tableItem}>
                                {coin && coin.length > 0
                                    ? coin.map((item, index) => <Coin key={index} children={item} />)
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DashBoard;
