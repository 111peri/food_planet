import React from "react";
import { useSelector, useDispatch } from "react-redux";

function ShoppingCart() {
    const dispatch = useDispatch();

    // Получаем состояние корзины из Redux
    const cart = useSelector((state) => state.cart.items);

    // Функция для удаления товара из корзины
    const removeFromCart = (productId) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: productId,
        });
    };

    return (
        <div>
            <h2>Корзина</h2>
            <ul>
                {Array.isArray(cart) &&
                    cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.price} сом
                            <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default ShoppingCart;
