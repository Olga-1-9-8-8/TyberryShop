import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeAllCarts, selectCartValue } from '../MainPageContent/Goods/Good/cartSlice';
import { addToOrder } from '../Profile/PersonalProfilePage/personalProfileSlice.js';
import styles from './Basket.module.css';
import { BasketItem } from './BasketItem/BasketItem';

export const Basket = () => {


    const dispatch =  useDispatch();
    let history = useHistory();
    const cartProducts = useSelector(selectCartValue); // get value from state + subscribe for updates

    const[totalCount, setTotalCount] = useState(0);
    const[totalPrice, setTotalPrice] = useState(0);
    const[totalPriceBeforeSale, setTotalPriceBeforeSale] = useState(0);
    const[totalSale, setTotalSale] = useState(0);

    useEffect(() => {

        let items = 0;
        let price = 0;
        let priceBeforeSale = 0;
        let sale = 0;

        cartProducts.forEach((item) =>{
            items += item.count;
            price += (item.price - (item.price*item.sale)) * item.count;
            priceBeforeSale += item.price * item.count;
            sale += item.sale * item.price;
        })

        setTotalCount(items);
        setTotalPrice(price); 
        setTotalPriceBeforeSale(priceBeforeSale); 
        setTotalSale(sale); 

    }, [cartProducts, totalPrice, setTotalPrice, totalCount, setTotalCount,
        totalPriceBeforeSale, setTotalPriceBeforeSale,totalSale, setTotalSale])

    const addOrder = (e) =>{
        e.preventDefault();
        history.push('/profile');
        let order ={
            totalPriseOrder: totalPrice,
            totalCountOrder: totalCount,
        }
        dispatch(addToOrder(order));
        dispatch(removeAllCarts([]))
    }

    return (
        <>
        {cartProducts.length > 0 ? 
        (    <form className={styles.basket}>
                <h2 className={styles.basketTitle}>Заказ</h2>
                <div className={styles.basketWrapper}>
                    <div>
                        {cartProducts.map((product) => (
                            <BasketItem key={product.id} product={product} />
                        ))}
                    </div>

                    <div className={styles.basketResultWrapper}>

                        <div className={styles.basketResultItem}>
                            <span>Итого</span>
                            <span>{totalPrice} &#8381;</span>
                        </div>
                        <div className={styles.basketResultItem}>
                            <span>Товары,{totalCount} шт.</span>
                            <span> {totalPriceBeforeSale} &#8381;</span>
                        </div>
                        <div className={styles.basketResultItem}>
                            <span>Скидка</span>
                            <span>{totalSale} &#8381; </span>
                        </div>
                        <div className={styles.basketResultItem}>
                            <span>Доставка</span>
                            <span>Бесплатно</span>
                        </div>

                        <div className={styles.basketResultButtonWrapper}>
                            <button onClick = {addOrder} className={styles.basketResultButton}>Заказать</button>
                        </div>


                    </div>

                </div>

            </form> 
        ):
        (<div className={styles.basketNothing}> В вашей корзине пока ничего нет.</div>)
        }   
        </>


    )
}



