import React from 'react';
import { Link } from 'react-router-dom'; // Импортируйте Link из react-router-dom
import styles from './Header.module.css';
import LOgo from '../../components/assets/image/LOgo.png';
import phoneIcon from '../../components/assets/phoneIcon.png';

export function Header(props) {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={LOgo} alt={LOgo} />
            </div>
            <div className={styles.navigation}>
                <ul>
                    <li className={styles.menuItem}><Link to="/" className={styles.txtColor}>Главная</Link></li>
                    <li className={styles.menuItem}><Link to="/delivery" className={styles.txtColor}>Доставка</Link></li>
                    <li className={styles.menuItem}><Link to="/contacts" className={styles.txtColor}>Контакты</Link></li>
                </ul>
            </div>
            <div className={styles.icons}>
                <div className={styles.phoneIcon}>
                    <img className={styles.phoneIconImg} src={phoneIcon} alt="phoneIcon" />
                    <span>+996500405988</span>
                </div>
                <div className={styles.cartIcon}>
                    <img src={'https://cdn.icon-icons.com/icons2/902/PNG/512/shopping-cart_icon-icons.com_69303.png'} alt={'https://cdn.icon-icons.com/icons2/902/PNG/512/shopping-cart_icon-icons.com_69303.png'} />
                </div>
            </div>
        </div>
    );
}



