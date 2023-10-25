import React, { useState } from 'react';
import CartButton from "./CartButton";
import burger1 from './assets/image/burger1.png'
import burger2 from './assets/image/burger2.png'
import burger3 from './assets/image/burger3.png'
import burger4 from './assets/image/burger4.png'

export function Burger() {
    const burgers = [
        {
            image: burger1,
            title: 'Чизбургер',
            description: 'Булка, котлета,сыр,  соленый огурец, лук, помидор,\n' +
                'салат айсберг,\n' +
                'соус чесночный, соус гриль,\n' +
                'кетчуп, майонез',
            price:'200 сом'
        } ,
        {
            image: burger2,
            title: 'Чизбургер',
            description: 'Булка, котлета,сыр,  соленый огурец, лук, помидор,\n' +
                'салат айсберг,\n' +
                'соус чесночный, соус гриль,\n' +
                'кетчуп, майонез',
            price:'200 сом'
        },
        {
            image: burger3,
            title: 'Чизбургер',
            description: 'Булка, котлета,сыр,  соленый огурец, лук, помидор,\n' +
                'салат айсберг,\n' +
                'соус чесночный, соус гриль,\n' +
                'кетчуп, майонез',
            price:'200 сом'
        },
        {
            image: burger4,
            title: 'Чизбургер',
            description: 'Булка, котлета,сыр,  соленый огурец, лук, помидор,\n' +
                'салат айсберг,\n' +
                'соус чесночный, соус гриль,\n' +
                'кетчуп, майонез',
            price:'200 сом'
        }
    ]
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    return (
        <div>
            {burgers.map((burger, index) =>(
                <div key={index}>
                    <div >
                        <img  src={burger.image} alt={burger.title} />
                        <h2 >{burger.title}</h2>
                        <p >{burger.description}</p>
                        <h3>{burger.price} сом</h3>
                        <CartButton
                            cartCount={cartCount}
                            setCartCount={setCartCount}
                            onAddToCart={handleAddToCart}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Burger;
