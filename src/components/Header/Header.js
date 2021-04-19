import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Navbar from './NavbarMenu/Navbar.js';
import Navigation from './Navigation/Navigation.js';
import SearchForm from './SearchForm/SearchForm.js';

const Header = () => {
    return (
    <header className={styles.header}>
        <Navbar />
        <Logo />
        <SearchForm />
        <Navigation />
    </header>
    )
}

export default Header;