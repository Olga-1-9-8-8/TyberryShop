import { FaUserCircle } from 'react-icons/fa';
import { useAppSelector } from '../../../redux/hooks';
import styles from './PersonalProfile.module.css';
import { selectOrderValue } from './personalProfileSlice';

interface Props {
  logOut: () => void;
  email: string;
}

export const PersonalProfile: React.FC<Props> = ({ logOut, email }) => {
  const order = useAppSelector(selectOrderValue);

  return (
    <section className={styles.personalProfile}>
      <div className={styles.personalProfileData}>
        <h2 className={styles.personalProfileFormTitle}>Ваши данные:</h2>
        <div className={styles.personalEmail}>
          <div className={styles.personalEmailIcon}>
            <FaUserCircle size={120} />
          </div>

          <div className={styles.personalEmailData}>
            <span className={styles.personalEmailDataTitle}>Ваш email</span>
            <span className={styles.personalEmailDataMail}>{email}</span>
          </div>
        </div>
        <div className={styles.personalSale}>
          <div className={styles.personalSaleTitle}>Скидка на все товары</div>
          <div className={styles.personalSaleResult}>10%</div>
        </div>

        <button type="submit" className={styles.accountButton} onClick={logOut}>
          Выйти
        </button>
      </div>

      <div>
        <h2 className={styles.personalProfileFormTitle}>Ваш Заказ:</h2>
        {order.length ? (
          <div className={styles.orderWrapper}>
            <div className={styles.order}>
              <div className={styles.orderTitle}>Спасибо, что выбрали Нас!</div>
              <div className={styles.orderText}>
                Вы заказали
                <span>
                  {' '}
                  {order.reduce(
                    (accomulator, item) => accomulator + item.totalCountOrder,
                    0,
                  )}{' '}
                  шт. товаров
                </span>
              </div>
              <div className={styles.orderText}>
                На общую сумму
                <span>
                  {' '}
                  {order.reduce(
                    (accomulator, item) => accomulator + item.totalPriseOrder,
                    0,
                  )}{' '}
                  рублей
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.orderWrapper}>
            <div className={styles.order}>
              <p className={styles.orderTitle}>У Вас пока нет заказов</p>
              <p className={styles.orderText}>
                Выберите товары и закажите их в разделе Корзина
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
