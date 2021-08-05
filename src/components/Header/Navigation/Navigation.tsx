import {
  faMapMarkedAlt,
  faShoppingBasket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { selectCartValue } from '../../MainPageContent/Goods/Good/cartSlice';
import styles from './Navigation.module.css';
import { NavigationItem } from './NavigationItem/NavigationItem';

export const Navigation: React.FC = () => {
  const cartProducts = useAppSelector(selectCartValue);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const count = cartProducts.reduce(
      (accomulator, current) => accomulator + current.count,
      0,
    );
    setCartCount(count);
  }, [cartProducts, cartCount]);

  return (
    <div className={styles.navWrapper}>
      <NavigationItem
        path="/delivery"
        icon={faMapMarkedAlt}
        name="Адреса Магазинов"
      />
      <NavigationItem path="/profile" icon={faUser} name="Профиль" />
      <NavigationItem path="/basket" icon={faShoppingBasket} name="Корзина" />
      <div className={styles.cardQuantity}>{cartCount}</div>
    </div>
  );
};
