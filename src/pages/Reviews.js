import React from 'react';
import styles from './reviews.module.css'
import pen from '../components/assets/image/pen.png'

function Reviews(props) {
    const reviews = [
        {
            image: '',
            name: 'Сергей',
            description: 'Большое спасибо! 5 пицц доставили даже быстрее чем планировалось. Пицца была горячая и всему коллективу понравилась! День Рождения прошел отлично! :)',
            date: '02.07.2020'
        },
        {   image: '',
            name: 'Сергей',
            description: 'Очень вкусные роллы Хаки, всем рекомендую! заказали в первый раз и теперь станем постоянными клиентами! Спасибо!',
            date: '02.07.2020'
        },
        {   image: '',
            name: 'Сергей',
            description: 'Очень избирателен в еде, и Уже в третий раз не разочаровываюсь в Food Planet, советую всем! Жена тоже довольна!',
            date: '02.07.2020'
        },
        {   image:'',
            name: 'Сергей',
            description: 'Хочу поблагодарить за бургер !Очень вкусненький в меру остренький) Спасибо,удивили!)',
            date: '02.07.2020'
        }
    ]

    return (
        <div className={styles.reviewsContainer}>
            {reviews.map((review,index) => (
                <div className={styles.reviewItem} key={index}>
                    <div className={styles.userAvatar}>
                        {/*<img src={} alt={}/>*/}
                    </div>
                    <div>
                        <h3 className={styles.userName}>{review.name}
                            <img src={pen}  alt="Pen"/>
                        </h3>

                        <p>{review.description}</p>
                        <p className={styles.date}>{review.date}</p>
                    </div>

                </div>
            ))

            }



        </div>
    );
}

export default Reviews;