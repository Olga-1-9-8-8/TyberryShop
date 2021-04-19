import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCountInItem } from '../../../MainPageContent/Goods/Good/cartSlice.js';
import styles from './BasketItemCounter.module.css';



const BasketItemCounter = ({product}) => {

  
  const dispatch = useDispatch(); // get dispatch from store

  let currentCountValue = React.createRef();
  const[inputValue, setInputValue] = useState(product.count)
 
  const onChangeHandler = (e) => {
   setInputValue(e.target.value);
   dispatch(updateCountInItem({id:product.id,count:e.target.value}) )
   
   }
   const decreaseHandler = async(e) => {
      e.preventDefault();
      setInputValue(currentCountValue.current.value-1);
      if(currentCountValue.current.value === 1) return; 
      dispatch(updateCountInItem({id:product.id,count:currentCountValue.current.value-1}) ) 
   }

   const increaseHandler = async(e) => {
      e.preventDefault();
      setInputValue(+currentCountValue.current.value+1);
      dispatch(updateCountInItem({id:product.id,count:+currentCountValue.current.value+1}) )
      
   }
  


    return (
    <div className={styles.basketItemCounter}>
        <button className={(product.count ===1)?styles.basketItemButtonDisable : styles.basketItemButton} onClick={decreaseHandler}>
           <span>-</span>
        </button>    
         
        <input 
            type="number"
               min="1"
               value={inputValue}
               onChange={onChangeHandler}
               className={styles.basketItemInput}
               ref={currentCountValue}
         />

        <button className={styles.basketItemButton} onClick={increaseHandler}>
           <span>+</span>
        </button>
    </div>
    )
}

export default BasketItemCounter;