/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useRef, useState } from 'react';
import { IconContext } from 'react-icons';
import {
  AiFillContacts,
  AiFillHeart,
  AiFillShopping,
  AiOutlineQq,
} from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import styles from './Navbar.module.css';
import { NavbarItem } from './NavbarItem/NavbarItem';

export const Navbar: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  const [sidebar, setSidebar] = useState(false);

  const showMenu = () => {
    setSidebar((sidebar) => !sidebar);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current!.contains(e.target as Node)) {
        // проблема здесь
        setSidebar(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []); // [] -> empty includes, becouse this effect called only when mounting/unmounting

  return (
    <div className={styles.navbar}>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className={styles.navbarIcon}>
          <FaBars color="#fff" onClick={showMenu} />
        </div>

        <nav
          ref={ref}
          className={
            sidebar ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`
          }
        >
          <ul className={styles.navMenuItems} onClick={showMenu}>
            <NavbarItem name="О нас" path="/about" icon={<AiFillHeart />} />
            <NavbarItem
              name="Контакты"
              path="/delivery"
              icon={<AiFillContacts />}
            />
            <NavbarItem name="Профиль" path="/profile" icon={<AiOutlineQq />} />
            <NavbarItem
              name="Корзина"
              path="/basket"
              icon={<AiFillShopping />}
            />
          </ul>
          <div className={styles.navbarIcon} />
        </nav>
      </IconContext.Provider>
    </div>
  );
};
