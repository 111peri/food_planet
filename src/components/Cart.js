import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './cart.module.css'

function Cart({ cartCount, setCartCount, onAddToCart, product }) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const addToCart = () => {
        onAddToCart(product, count);
        setCartCount(cartCount + count); // Увеличиваем общее количество товаров в корзине
        setCount(0); // Сбрасываем счетчик
    };

    return (
        <div className={styles.countContainer}>
            <div className={styles.count}>
                <span onClick={decrementCount}>-</span>
                <span>{count}</span>
                <span onClick={incrementCount}>+</span>
            </div>
            <button onClick={addToCart}>Добавить в корзину</button>
        </div>
    );
}

Cart.propTypes = {
    cartCount: PropTypes.number,
    setCartCount: PropTypes.func,
    onAddToCart: PropTypes.func,
    product: PropTypes.object
};

export default Cart;

