import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

export const Logo: React.FC = () => {
  return (
    <Link to="/" className={styles.logo}>
      TyberryShop
    </Link>
  );
};
