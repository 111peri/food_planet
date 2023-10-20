import React from 'react';
import styles from './NewArrivals.module.css';
import Pizza from "./Pizza"
import burger1 from './assets/image/burger1.png';
import burger2 from './assets/image/burger2.png';
import burger3 from './assets/image/burger3.png';
import burger4 from './assets/image/burger4.png';
import {Menu} from "./Menu";

styles.burgerImage = undefined;

function NewArrivals() {
    const pizzas = [
        {
            image: burger1,
            title: "Чизбургер",
            description: "Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез",
            price: "200",
        },
        {
            image: burger2,
            title: "Чизбургер",
            description: "Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез",
            price: "200",
        },
        {
            image: burger3,
            title: "Чизбургер",
            description: "Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез",
            price: "200",
        },
        {
            image: burger4,
            title: "Чизбургер",
            description: "Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез",
            price: "200",
        },
    ];

    return (
        <div className={styles.newArrivals}>
            <div>
              <Menu/>
            </div>
            <div className={`${styles.pizzaContainer} ${styles.burgerContainer}` }>
                {pizzas.map((pizza, index) => (
                    <div className={styles.pizzaItem} key={index}>
                        <div className={`${styles.burgerImage} ${styles.pizzaImage} `}>
                            <img src={pizza.image} alt={pizza.title} />
                        </div>
                        <div className={styles.burgerInfo}>
                            <h2>{pizza.title}</h2>
                            <p>{pizza.description}</p>
                            <h3>{pizza.price} сом</h3>
                        </div>
                    </div>
                ))}
            </div>
            <Pizza/>
        </div>
    );
}

export default NewArrivals;
