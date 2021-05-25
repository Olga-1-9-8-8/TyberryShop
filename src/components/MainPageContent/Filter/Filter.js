import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { arrGoods, sortProducts } from "../Goods/goodsSlice.js";
import styles from "./Filter.module.css";

export const Filter = () => {
    
    let goods = useSelector(arrGoods);
    const dispatch = useDispatch();
    const[select, setSelect] = useState('New');

    const changeSortTitle = (e) =>{
        setSelect(e); 
    }


    return (
        <div className={styles.filter}>
            <div className={styles.filterResut}>
                {goods.length} товара
            </div>
            <div className={styles.filterSort}>
               Сортировать по :
               <select value={select} onChange={(e) => {
                   dispatch(sortProducts(e.target.value));
                   changeSortTitle(e.target.value); 
                   }}>
                   <option>New</option>
                   <option>Min</option>
                   <option>Max</option>
               </select> 
            </div>
        </div>
    )
}

