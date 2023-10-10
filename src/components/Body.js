import React from 'react';
import styles from './Body.module.css';
import burger from '../components/assets/image/burger.png';

function Body() {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerContent}>
                <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
                <h3>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлена всегда горячим и ароматным.</h3>
                <a href="/menu" className={styles.bannerButton}>Перейти в меню</a>
            </div>
            <div className={styles.bannerImage}>
                <img src={burger} alt="Burger" />
            </div>
        </div>
    );
}

export default Body;
