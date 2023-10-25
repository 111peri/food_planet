import React, { useState } from 'react';
import Cart from "../components/Cart";
import burger1 from '../components/assets/image/burger1.png'
import burger2 from '../components/assets/image/burger2.png'
import burger3 from '../components/assets/image/burger3.png'
import burger4 from '../components/assets/image/burger4.png'
import styles from './burger.module.css'

export function Burger() {
    const burgers = [
        {
            image: burger1,
            title: 'Чизбургер',
            description: 'Булка, котлета,сыр,  соленый огурец, лук, помидор,\n' +
                'салат айсберг,\n' +
                'соус чесночный, соус гриль,\n' +
                'кетчуп, майонез',
            price: '200 сом'
        },
        {
            image: burger2,
            title: 'Чизбургер',
            description: 'Булка, котлета,сыр,  соленый огурец, лук, помидор,\n' +
                'салат айсберг,\n' +
                'соус чесночный, соус гриль,\n' +
                'кетчуп, майонез',
            price: '200 сом'
        },
        {
            image: burger3,
            title: 'Чизбургер',
            description: 'Булка, котлета,сыр,  соленый огурец, лук, помидор,\n' +
                'салат айсберг,\n' +
                'соус чесночный, соус гриль,\n' +
                'кетчуп, майонез',
            price: '200 сом'
        },
        {
            image: burger4,
            title: 'Чизбургер',
            description: 'Булка, котлета,сыр,  соленый огурец, лук, помидор,\n' +
                'салат айсберг,\n' +
                'соус чесночный, соус гриль,\n' +
                'кетчуп, майонез',
            price: '200 сом'
        }
    ], [cartCount, setCartCount] = useState(0), handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <div className={styles.burgerContainer}>
            {burgers.map((burger, index) =>(
                <div key={index} className={styles.burgerContainerBg}>
                    <div className={styles.burgerDescription} >
                        <img  src={burger.image} alt={burger.title} />
                        <h2 >{burger.title}</h2>
                        <p >{burger.description}</p>
                        <h3>{burger.price} сом</h3>
<div className={styles.addCartButton}>
    <Cart/>
</div>

                    </div>
                </div>
            ))}

        </div>
    );
}

export default Burger;
