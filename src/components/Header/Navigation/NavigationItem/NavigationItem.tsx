import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';

interface Props {
  path: string;
  icon: IconDefinition;
  name: string;
}

export const NavigationItem: React.FC<Props> = ({ path, icon, name }) => {
  return (
    <div className={classes.navWrapper}>
      <NavLink to={path} className={classes.nav}>
        <FontAwesomeIcon icon={icon} size="2x" color="#fff" />
        <div className={classes.navTitle}>{name} </div>
      </NavLink>
    </div>
  );
};
