import React from 'react';
import styles from './aboutas.module.css'
import icon_car from '../components/assets/image/icon_car.png'
import icon_food from '../components/assets/image/icon_food.png'
import icon_map from '../components/assets/image/icon_map.png'
import icon_menu from '../components/assets/image/icon_menu.png'

function AboutAs(props) {
    const aboutItems = [
        {
            image: icon_car,
            title: 'Мгновенная доставка',
            description:'Доставим заказанную вами еду за 30 минут + напиток в подарок'

        } ,
        {
            image: icon_food,
            title: 'Свежие продукты',
description: 'Вся продукция хранится в хороших условиях тем самым продливая срок хранения'
        } ,
        {
            image: icon_menu,
            title: 'Уникальное меню',
            description:'Ежедневно мы обновляем наше \n' +
                'меню и том числе коктейльное'

        }  ,
        {
            image: icon_map,
            title: 'Доставка',
            description:'Мы быстро доставляем вашу еду по указанному адресу'

        }
    ]
    return (
        <div className={styles.aboutAsContainer}>
            {aboutItems.map((aboutTitle,index) => (
                <div key={index} className={styles.aboutAsItems}>
                    <div className={styles.icon}>
                        <img src={aboutTitle.image} alt={aboutTitle.title}/>
                    </div>
                    <h4>{aboutTitle.title}</h4>
                    <p>{aboutTitle.description}</p>

                </div>
                ))}
        </div>
    );
}

export default AboutAs;