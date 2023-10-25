import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import LOgo from '../../components/assets/image/LOgo.png';
import phoneIcon from '../../components/assets/phoneIcon.png';

styles.cartCount = undefined;

export function Header(props) {
    let [cartCount, setCartCount] = useState(0);

    


    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={LOgo} alt={LOgo} />
            </div>
            <div className={styles.navigation}>
                <ul>
                    <li className={styles.menuItem}><Link to="/" >Главная</Link></li>
                    <li className={styles.menuItem}><Link to="/delivery" >Доставка</Link></li>
                    <li className={styles.menuItem}><Link to="/contacts" >Контакты</Link></li>
                </ul>
            </div>
            <div className={styles.icons}>
                <div className={styles.phoneIcon}>
                    <img className={styles.phoneIconImg} src={phoneIcon} alt="phoneIcon" />
                    <span>+996500405988</span>
                </div>
                <div className={styles.cartIcon}>
                    <span className={styles.cartCount}>{cartCount}</span>
                </div>
            </div>
        </div>
    );
}




