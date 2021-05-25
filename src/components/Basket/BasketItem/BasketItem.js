

import { FaTimes } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeToCart } from '../../MainPageContent/Goods/Good/cartSlice.js';
import styles from './BasketItem.module.css';
import { BasketItemCounter } from './BasketItemCounter/BasketItemCounter';



export const BasketItem = ({product}) => {
     
    const dispatch = useDispatch();

    const remove = (product) =>{
        dispatch(removeToCart(product))
    } 
    
    return (

        <div className={styles.basketItem}>
            <div className={styles.basketItemPictureWrapper}>
                <img className={styles.basketItemPicture} src={product.img} alt="New TyberryShop Product"/>
            </div>
            <div className={styles.basketItemProductTitle}>
                {product.text}
            </div>
            <div className={styles.basketItemProductCounter}>
                <BasketItemCounter product={product}/>
            </div>
            <div className={styles.basketItemProductPriceWrapper}>
                <div className={styles.basketItemProductPriceNew}>{(product.price*product.count) - ((product.price*product.count)*product.sale)} &#8381;</div>
                <div className={styles.basketItemProductPrice}>{product.price * product.count} &#8381;</div>
            </div>
            <div className={styles.basketItemProductDeleteWrapper}>
                <FaTimes onClick ={() => remove(product)}/>
            </div>
        </div>
    )
}