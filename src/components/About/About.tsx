import styles from './About.module.css';
import { AboutItem } from './AboutItem/AboutItem';

const About: React.FC = () => {
  return (
    <section className={styles.aboutCompanyWrapper}>
      <h2 className={styles.aboutCompanyTitle}>О Компании</h2>
      <div className={styles.aboutCompany}>
        <AboutItem name="Быстрая доставка" />
        <AboutItem name="Надежная компания" />
        <AboutItem name="10 лет на рынке" />
        <AboutItem name="Скидки и Акции" />
      </div>
      <div className={styles.payTermTitle}>
        <h4>Условия Оплаты</h4>
        <ol className={styles.payTermList}>
          <li>Любая платежная система Мира</li>
          <li>Любой валютой Мир</li>
          <li>Можно платить Картой</li>
          <li>Можно платить Наличными</li>
        </ol>
      </div>
    </section>
  );
};

export default About;
