import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IProductItem } from '../../../../interfaces';
import { updateCountInItem } from '../../../MainPageContent/Goods/Good/cartSlice';
import styles from './BasketItemCounter.module.css';

interface Props {
  product: IProductItem;
}

export const BasketItemCounter: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch(); // get dispatch from store
  const ref = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState(product.count);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(+e.target.value);
    dispatch(updateCountInItem({ id: product.id, count: +e.target.value }));
  };
  const decreaseHandler = async (e: React.PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputValue((inputValue) => inputValue - 1);
    if (+ref.current!.value === 1) return;
    dispatch(
      updateCountInItem({ id: product.id, count: +ref.current!.value - 1 }),
    );
  };

  const increaseHandler = async (e: React.PointerEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputValue((inputValue) => inputValue + 1);
    dispatch(
      updateCountInItem({ id: product.id, count: +ref.current!.value + 1 }),
    );
  };

  return (
    <div className={styles.basketItemCounter}>
      <button
        type="submit"
        className={
          product.count === 1
            ? styles.basketItemButtonDisable
            : styles.basketItemButton
        }
        onClick={decreaseHandler}
      >
        <span>-</span>
      </button>

      <input
        type="number"
        min="1"
        value={inputValue}
        onChange={onChangeHandler}
        className={styles.basketItemInput}
        ref={ref}
      />

      <button
        type="submit"
        className={styles.basketItemButton}
        onClick={increaseHandler}
      >
        <span>+</span>
      </button>
    </div>
  );
};
