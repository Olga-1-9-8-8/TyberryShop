import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { arrGoods, sortProducts } from '../Goods/goodsSlice';
import styles from './Filter.module.css';

export const Filter: React.FC = () => {
  const goods = useAppSelector(arrGoods);
  const dispatch = useAppDispatch();
  const [select, setSelect] = useState('New');

  const changeSortTitle = (e: string) => {
    setSelect(e);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filterResut}>{goods.length} товара</div>
      <div className={styles.filterSort}>
        Сортировать по :
        <select
          value={select}
          onChange={(e) => {
            dispatch(sortProducts(e.target.value));
            changeSortTitle(e.target.value);
          }}
        >
          <option>New</option>
          <option>Min</option>
          <option>Max</option>
        </select>
      </div>
    </div>
  );
};
