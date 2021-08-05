import styles from './Header.module.css';
import { Logo } from './Logo/Logo';
import { Navbar } from './NavbarMenu/Navbar';
import { Navigation } from './Navigation/Navigation';
import { SearchForm } from './SearchForm/SearchForm';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <Logo />
      <SearchForm />
      <Navigation />
    </header>
  );
};
