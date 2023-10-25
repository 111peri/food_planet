import React from 'react';
import styles from '../components/Pizza.module.css';
import Cart from './Cart'
import pizza1 from './assets/image/pizza_1.png';
import pizza2 from './assets/image/pizza_2.png';
import pizza3 from './assets/image/pizza_3.png';
import pizza4 from './assets/image/pizza_4.png';
import drop_down from './assets/image/drop_down.png'

export function Pizza() {
    const pizzas = [
        {
            image: pizza1,
            title: 'Мексиканская',
            description: 'Булка, котлета, сыр, соленый огурец, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
            price: '200 сом',
        },
        {
            image: pizza2,
            title: 'Пепперони',
            description: 'Тонкое тесто, томатный соус, пепперони, сыр моцарелла, итальянские травы',
            price: '220 сом',
        },
        {
            image: pizza3,
            title: 'Гавайская',
            description: 'Булка, котлета, сыр, соленый огурец, ананас, лук, помидор, салат айсберг, соус чесночный, соус гриль, кетчуп, майонез',
            price: '210 сом',
        },
        {
            image: pizza4,
            title: 'Пепперони',
            description: 'Тонкое тесто, томатный соус, грибы, оливки, лук, болгарский перец, сыр моцарелла',
            price: '190 сом',
        },  {
            image: pizza4,
            title: 'Мексиканская',
            description: 'Тонкое тесто, томатный соус, грибы, оливки, лук, болгарский перец, сыр моцарелла',
            price: '190 сом',
        },  {
            image: pizza4,
            title: 'Вегетарианская',
            description: 'Тонкое тесто, томатный соус, грибы, оливки, лук, болгарский перец, сыр моцарелла',
            price: '190 сом',
        },  {
            image: pizza4,
            title: 'Гавайская',
            description: 'Тонкое тесто, томатный соус, грибы, оливки, лук, болгарский перец, сыр моцарелла',
            price: '190 сом',
        },  {
            image: pizza4,
            title: 'Вегетарианская',
            description: 'Тонкое тесто, томатный соус, грибы, оливки, лук, болгарский перец, сыр моцарелла',
            price: '190 сом',
        },
    ];

    return (
<div>
    <div id="/pizza" className={styles.search}>
       <p>Сортировать по:</p>
       <button>По умолчанию
           <img  className={styles.dropDown} src={drop_down} alt="Drop_down"/>
       </button>

    </div>
        <div className={styles.pizzaContainer}>

            {pizzas.map((pizza, index) => (
                <div className={styles.pizzaItem} key={index}>
                    <div className={styles.pizzaImage}>
                        <img src={pizza.image} alt={pizza.title}/>
                    </div>
                    <div className={styles.pizzaInfo}>
                        <h2>{pizza.title}</h2>
                        <p>{pizza.description}</p>
                        <h3>{pizza.price}</h3>
                          <div>
                              <Cart/>
                          </div>
                    </div>
                </div>
            ))}
        </div>
    <div>
        <button className={styles.showMoreButton}>Показать еще</button>
    </div>

</div>
    );
}

export default Pizza
