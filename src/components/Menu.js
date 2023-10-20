import styles from "./NewArrivals.module.css";
import React from "react";


export function Menu () {
    return (
        <div className={styles.menuLinks}>
            <p className={styles.newArrivalMenu}>Меню</p>
            <a href="/pizza">Пицца</a>
            <a href="/burger">Бургер</a>
            <a href="/sushi">Суши</a>
            <a href="/rolls">Роллы</a>
            <a href="/salads">Салаты</a>
            <a href="/desserts">Десерты</a>
            <a href="/drinks">Напитки</a>
        </div>
    )
}
