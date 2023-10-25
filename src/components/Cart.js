
import React, { useState } from 'react';





export function CartButton({ cartCount, setCartCount, onAddToCart }) {
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
        setCartCount(cartCount + 1); // Увеличивает общий счетчик в корзине
    };

    return (
        <div>
            <span onClick={incrementCount}>+</span>
            <span>{count}</span>
            <span onClick={decrementCount}>-</span>
            <div onClick={addToCart}>Добавить в корзину</div>
        </div>
    );
}

export default CartButton;
