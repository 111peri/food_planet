import React from 'react';
import styles from './NewArrivals.module.css'; // Подключаем стили из модуля
import burger1 from "./assets/image/burger1.png"
import burger2 from "./assets/image/burger2.png"
import burger3 from "./assets/image/burger3.png"
import burger4 from "./assets/image/burger4.png"

function NewArrivals() {
    return (
        <div className={styles.newArrivals}>
            <div className={styles.menuLinks}>
                <a href="/news" className={styles.news}>Новинки</a>
                <a href="/pizza">Пицца</a>
                <a href="/burger">Бургер</a>
                <a href="/sushi">Суши</a>
                <a href="/rolls">Роллы</a>
                <a href="/salads">Салаты</a>
                <a href="/desserts">Десерты</a>
                <a href="/drinks">Напитки</a>
            </div>
            <div className={styles.burgerContainer}>
                <div className={styles.slide}>
                    <div className={styles.burgerImage}>
                        <img src={burger1} alt="Burger1" />
                    </div>
                    <div className={styles.burgerInfo}>
                        <h2>Чизбургер</h2>
                        <p>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                        <h3>200 сом</h3>
                        <div className={styles.addToCart}>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                            <div><button>В корзину</button></div>
                        </div>
                    </div>
                </div>
                <div className={styles.slide}>
                    <div className={styles.burgerImage}>
                        <img src={burger2} alt="Burger2" />
                    </div>
                    <div className={styles.burgerInfo}>
                        <h2>Чизбургер</h2>
                        <p>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                        <h3>200 сом</h3>
                        <div className={styles.addToCart}>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                            <button>В корзину</button>
                        </div>
                    </div>
                </div>
                <div className={styles.slide}>
                    <div className={styles.burgerImage}>
                        <img src={burger3} alt="Burger3" />
                    </div>
                    <div className={styles.burgerInfo}>
                        <h2>Чизбургер</h2>
                        <p>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                        <h3>200 сом</h3>
                        <div className={styles.addToCart}>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                            <button>В корзину</button>
                        </div>
                    </div>
                </div>
                <div className={styles.slide}>
                    <div className={styles.burgerImage}>
                        <img src={burger4} alt="Burger4" />
                    </div>
                    <div className={styles.burgerInfo}>
                        <h2>Чизбургер</h2>
                        <p>Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез</p>
                        <h3>200 сом</h3>
                        <div className={styles.addToCart}>
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                            <button>В корзину</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewArrivals;








