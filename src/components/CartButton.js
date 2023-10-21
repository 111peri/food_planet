import React, { useState } from 'react';
import styles from './NewArrivals.module.css';

function CartButton({ cartCount, setCartCount, onAddToCart }) {
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
        onAddToCart();
        setCartCount(cartCount + 1); // Увеличивает общий счетчик в корзине
    };

    return (
        <div>
            <span onClick={incrementCount} className={styles.incrementStyle}>+</span>
            <span>{count}</span>
            <span onClick={decrementCount} className={styles.decrementStyle}>-</span>
            <button onClick={addToCart} className={styles.buttonStyle}>Добавить в корзину</button>
        </div>
    );
}

export default CartButton;
;
