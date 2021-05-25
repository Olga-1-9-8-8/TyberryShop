import { React, useState } from 'react';
import { Goods } from './Goods/Goods.js';
import styles from './MainPageContent.module.css';
import { Slider } from './Slider/Slider.js';

export const MainPageContent = () => {
    
    const[isShort, setIsShot] = useState(true);
    const[isShortTitle, setIsShortTitle] = useState(true);
    

    const toggleSetShort = () =>{
        setIsShot(!isShort);
        setIsShortTitle(!isShortTitle);
    }

    return (
        <main className={styles.main}>
            <Slider />
            <div className={styles.preference}>
                <div className={styles.preferenceTitle}>
                    <h3>Возможно, Вам Понравится:</h3>
                    <Goods />
                </div>
            </div>
            <div className={styles.textBlockWrapper}>
                    <h3 className={styles.textBlockTitle}>Высокое качество и быстрая доставка</h3>
                   
                    <div className={styles.textBlock}>
                        <p>
                            Большой выбор,быстрая доставка!Только оригинальная продукция высокого качества.
                            Большой ассортимент товаров представленных в нашем интернет магазине поможет каждому покупателю найти то,что он всегда мечтал найти.
                            В нашем интернет магазине выставлена только оригинальная продукция, подделки исключаются.
                        </p>
                        {isShort === false && (<p> Мы так же заботимся о качестве доставки, мы доставим Вам товары в любое удобное для Вас время в Любое место на Этой платете в течении 24 часов.
                            Мы предлагаем несколько различных вариантов оплаты заказа как при оформлении, так и по факту при получении,
                            - банковскими картой или переводом, наличным расчетом или электронным платежом. Если товар не подошел, его можно вернуть с курьером как до оплаты заказа, так и после по почте
                            Задать интересующий вопрос можно в любое время – наш call-центр работает 24/7.
                            </p>

                        )}
                    </div>
                    <span onClick={toggleSetShort} className={styles.textReadMore}>{isShortTitle === true ? 'Читать дале' : 'Скрыть'}</span>
            </div>
        </main>

    )
}