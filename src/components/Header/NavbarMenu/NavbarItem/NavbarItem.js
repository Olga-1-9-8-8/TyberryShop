
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';


export const NavbarItem = (props) => {

    return(
            <li className = {styles.navbarText}>
                <Link to = {props.path} className = {styles.NavbarLink}>
                    {props.icon}
                    <div className = {styles.NavbarLinkTitle}>
                        <span>{props.name}</span>
                    </div>
                </Link>
            </li>
    )
}





    