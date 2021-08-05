import {
  faClock,
  faGlobeAmericas,
  faParachuteBox,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import picture from '../../pictures/box.svg';
import styles from './Delivery.module.css';

const Delivery: React.FC = () => {
  return (
    <section className={styles.delivery}>
      <h2 className={styles.deliveryTitle}>Контакты</h2>
      <div className={styles.deliveryWrapper}>
        <div className={styles.deliveryAddress}>
          <h4>Адреса Магазинов</h4>
          <p>г. МОСКВА, КРАСНОБОГАТЫРСКАЯ УЛ, 44, СТР.1</p>
          <p>г. МОСКВА, ЛЕНИНГРАДСКИЙ ПР-КТ, 31А, СТР.1</p>
          <p>г. МОСКВА, МАРКСИСТСКАЯ УЛ, 34</p>
        </div>
        <div className={styles.deliveryMap}>
          <div className={styles.deliveryMapWrapper}>
            <iframe
              title="MapGide"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A2a266067a0b9ad1b5eb2ef474d6ce22a6bb4cc6f1dacac5ef50b7c697384b0e6&amp;source=constructor"
              width="600"
              height="366"
              frameBorder="0"
            />
          </div>
        </div>
        <div className={styles.deliveryTerm}>
          <h4>Условия Доставки</h4>
          <img src={picture} className={styles.imageBox} alt="Box" />
          <div>
            <FontAwesomeIcon
              icon={faParachuteBox}
              className={styles.icon}
              size="3x"
            />
            <p>Бесплатная доставка</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faGlobeAmericas}
              className={styles.icon}
              size="3x"
            />
            <p>Доставка по всему Миру</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} className={styles.icon} size="3x" />
            <p>Доставим в течении суток</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
