import React from 'react';
import styles from './footer.module.css'
import {Link} from "react-router-dom";
import footer_Logo from '../components/assets/image/footer_Logo.png';
import phoneIcon from '../components/assets/image/phoneIcon.png'

function Footer(props) {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerLogo}>
                <img src={footer_Logo} alt="Footer_Logo"/>
            </div>
            <div >
                <ul className={styles.footerLinkItems}>
                    <li>
                        <Link  to="/" >Главная</Link>
                    </li>
                    <li>
                        <Link to="/menu">Меню</Link>
                    </li>
                    <li>
                        <Link to="/delivery">Доставка</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Контакты</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.footerContacts}>
                <img src={phoneIcon} alt="PhoneIcon"/>
                <p>+996500405988</p>
            </div>
        </div>
    );
}

export default Footer;