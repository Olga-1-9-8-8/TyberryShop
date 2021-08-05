import { useState } from 'react';
import { IProductItem } from '../../../../interfaces';
import { useAppDispatch } from '../../../../redux/hooks';
import { addToCart } from './cartSlice';
import styles from './Good.module.css';

interface Props {
  good: IProductItem;
}

export const Good: React.FC<Props> = ({ good }) => {
  const [buttonTitle, setButtonTitle] = useState('В корзину');

  const [lighting, setLighting] = useState(false);

  const changeButtonTitle = () => {
    setButtonTitle('Добавь ещё');
    setLighting(true);
  };

  const dispatch = useAppDispatch();

  const tryToAddToCart = () => {
    dispatch(addToCart(good));
    changeButtonTitle();
  };

  return (
    <div className={styles.product}>
      <div className={styles.productPictureWrapper} onClick={tryToAddToCart}>
        <button
          type="submit"
          className={
            lighting === false
              ? styles.productButton
              : styles.productButtonAfterClick
          }
          onClick={changeButtonTitle}
        >
          {buttonTitle}
        </button>
        <img
          className={styles.productPicture}
          src={good.img}
          alt="Product Foto"
        />
      </div>
      <div className={styles.productDiscribe}>
        <div className={styles.productDiscribeTitle}>
          <span>{good.price - good.price * good.sale} &#8381;</span>
          <h4>{good.text}</h4>
        </div>
        <div className={styles.productDiscribeSale}>
          <span className={styles.productDiscribeSaleValue}>
            - {`${good.sale * 100}%`}
          </span>
          <span className={styles.productDiscribeSaleOldPrice}>
            {good.price} &#8381;
          </span>
        </div>
      </div>
    </div>
  );
};
