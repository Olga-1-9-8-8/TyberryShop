import { NavLink } from 'react-router-dom';
import { Logo } from '../Header/Logo/Logo';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <Logo />
      </div>
      <div className={styles.footerItem}>
        <span className={styles.footerItemTitle}>Покупателям</span>
        <ul className={styles.footerItemList}>
          <li>
            <NavLink to="/delivery">Адреса Магазинов</NavLink>
          </li>
          <li>
            <NavLink to="/about">Как сделать заказ</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Способ оплаты</NavLink>
          </li>
          <li>
            <NavLink to="/delivery">Доставка</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.footerItem}>
        <span className={styles.footerItemTitle}>Компания</span>
        <ul className={styles.footerItemList}>
          <li>
            <NavLink to="/about">О нас</NavLink>
          </li>
          <li>
            <NavLink to="/delivery">Контакты</NavLink>
          </li>
          <li>
            <a href="https://hh.ru" rel="noreferrer" target="_blank">
              Вакансии
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footerItem}>
        <span className={styles.footerItemTitle}>Мы в Соцсетях</span>
        <ul className={styles.footerItemList}>
          <li>
            <a href="https://facebook.com" rel="noreferrer" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" rel="noreferrer" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://youtube.com" rel="noreferrer" target="_blank">
              Youtube
            </a>
          </li>
          <li>
            <a href="https://instagram.com" rel="noreferrer" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
