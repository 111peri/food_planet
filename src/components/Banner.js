import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './banner.module.css'
import burger from './assets/image/burger.png';
import Vector from './assets/image/Vector.png'

function Banner() {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerContent}>
                <h1>Доставка вкусной еды до 30 минут + напиток в подарок!</h1>
                <h3>Доставим заказ вовремя и можете рассчитывать, что еда будет доставлена всегда горячим и ароматным.</h3>
                <Link to="#menu" >
                    <button className= {styles.buttonStyle}>Перейти в меню
                    <img src={Vector} alt="Vector"/></button>
                </Link>
            </div>
            <div className={styles.bannerImage}>
                <img src={burger} alt="Burger" />
            </div>
        </div>
    );
}

export default Banner;
