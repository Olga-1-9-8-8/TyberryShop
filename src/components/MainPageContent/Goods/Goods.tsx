import { useAppSelector } from '../../../redux/hooks';
import { Filter } from '../Filter/Filter';
import { Good } from './Good/Good';
import styles from './Goods.module.css';
import { arrGoods } from './goodsSlice';

export const Goods: React.FC = () => {
  const goods = useAppSelector(arrGoods);

  return (
    <>
      <Filter />
      <section className={styles.goods}>
        {goods.map((good) => (
          <Good key={good.id} good={good} />
        ))}
      </section>
    </>
  );
};
