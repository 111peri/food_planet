import { useDispatch } from "react-redux";

export function addToCart(product) {
    const dispatch = useDispatch();

    const action = {
        type: 'ADD_TO_CART',
        payload: product
    };

    dispatch(action);
}
