import React from 'react';
import { useSelector, useDispatch } from "react-redux";

function ProductsList(props) {
    const dispatch = useDispatch();

    const products = [
        {
            id: 1,
            name: 'product 1',
            price: 100
        },
        {
            id: 2,
            name: 'product 2',
            price: 200
        }
    ];


    const cart = useSelector((state) => state.cart);

    const addItemToCart = (product) => {
        // Отправляем действие в Redux для добавления продукта в корзину
        dispatch({
            type: 'ADD_TO_CART',
            payload: product
        });
    };

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.price} </p>
                    <button onClick={() => addItemToCart(product)}>Add to cart</button>
                </div>
            ))}
            <div>
                <h2>Корзина</h2>
                <ul>
                    {Array.isArray(cart) && cart.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.price}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
);
}

export default ProductsList;

