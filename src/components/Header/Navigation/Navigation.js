import { faMapMarkedAlt, faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartValue } from '../../MainPageContent/Goods/Good/cartSlice.js';
import styles from './Navigation.module.css';
import { NavigationItem } from './NavigationItem/NavigationItem.js';

export const Navigation = (props)=>{
    const cartProducts = useSelector(selectCartValue);
    const [cartCount,setCartCount] = useState(0);


    useEffect( () => {
        let count = 0;
        cartProducts.forEach(item =>{
            count += item.count
        })
        setCartCount(count);
    },[cartProducts,cartCount]

    )
    
    

    return (
        <div className = {styles.navWrapper}>
           <NavigationItem path ='/delivery' icon ={faMapMarkedAlt} name='Адреса Магазинов'/>
           <NavigationItem path ='/profile' icon ={faUser} name='Профиль'/>
           <NavigationItem path ='/basket' icon ={faShoppingBasket} name='Корзина'/>
           <div className = {styles.cardQuantity}>{cartCount}</div>
        </div>         
    )
}

