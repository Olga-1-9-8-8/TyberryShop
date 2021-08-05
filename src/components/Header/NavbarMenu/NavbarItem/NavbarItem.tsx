import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

interface Props {
  name: string;
  path: string;
  icon: JSX.Element;
}

export const NavbarItem: React.FC<Props> = ({ path, icon, name }) => {
  return (
    <li className={styles.navbarText}>
      <Link to={path} className={styles.NavbarLink}>
        {icon}
        <div className={styles.NavbarLinkTitle}>
          <span>{name}</span>
        </div>
      </Link>
    </li>
  );
};
