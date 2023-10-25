import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./menu.module.css"


export function Menu() {
    return (
        <div id="menu" className={styles.menuItems}>
            <h3>Меню</h3>
            <div className={styles.menuLink}>
            <NavLink to="/pizza">Пицца</NavLink>
            <NavLink to="/burger" className={styles.hoverLink}>Бургер</NavLink>
            <NavLink to="/sushi">Суши</NavLink>
            <NavLink to="/rolls">Роллы</NavLink>
            <NavLink to="/salads">Салаты</NavLink>
            <NavLink to="/desserts">Десерты</NavLink>
            <NavLink to="/drinks">Напитки</NavLink>
            </div>
        </div>
    );
}


