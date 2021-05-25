import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice.js';
import styles from "./Good.module.css";



export const Good = ({good}) => {

  

    const [buttonTitle,setButtonTitle] = useState('В корзину');

    const [lighting,setLighting] = useState(false);

    const changeButtonTitle = (e) =>{
        setButtonTitle('Добавь ещё');
        setLighting(true);
    }

    const dispatch = useDispatch();

    const tryToAddToCart = () =>{
        dispatch(addToCart(good));
        changeButtonTitle();
    }


    return (
        <div className ={styles.product} >
            <div className ={styles.productPictureWrapper} onClick={tryToAddToCart}>
                <button className ={lighting === false ? styles.productButton : styles.productButtonAfterClick} onClick={(e) =>changeButtonTitle(e)}>{buttonTitle}</button>
                <img className ={styles.productPicture} src={good.img} alt="Product Foto"/>
            </div>
            <div className ={styles.productDiscribe}>
                <div className ={styles.productDiscribeTitle}>
                    <span>{good.price -(good.price*good.sale)} &#8381;</span>
                    <h4>{good.text}</h4>
                    
                </div>
                <div className ={styles.productDiscribeSale}>
                    <span className ={styles.productDiscribeSaleValue}>- {good.sale*100 +'%'}</span>
                    <span className ={styles.productDiscribeSaleOldPrice}>{good.price} &#8381;</span>
                </div>
            </div>
            
        </div>   
    
    )
}





