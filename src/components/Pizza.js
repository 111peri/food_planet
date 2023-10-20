import React from 'react';
import styles from './NewArrivals.module.css';



function Pizza(props) {
    const { image, title, description, price } = props;

    return (

        <div className={styles.pizzaContainer}>
            <div className={styles.pizzaImage}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.pizzaInfo}>
                {/*<h2>{title}</h2>*/}
                {/*<p>{description}</p>*/}
                {/*<h3>{price} сом</h3>*/}
                {/*<div className={styles.addToCart}>*/}
                {/*    <span>-</span>*/}
                {/*    <span>1</span>*/}
                {/*    <span>+</span>*/}
                {/*    <div>*/}
                {/*        <button>В корзину</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Pizza;
