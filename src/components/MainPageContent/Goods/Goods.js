
import { useSelector } from 'react-redux';
import Filter from '../Filter/Filter.js';
import Good from './Good/Good.js';
import styles from "./Goods.module.css";
import { arrGoods } from './goodsSlice.js';




const Goods = () => {

    const goods = useSelector(arrGoods);


    return (
        <>  
            <Filter/>
            <section className ={styles.goods}>  
                    
                    {goods.map((good) => ( 
                        <Good key={good.id} good={good} />
        
                    ))}

            </section>
        </>
    )
}

export default Goods;



