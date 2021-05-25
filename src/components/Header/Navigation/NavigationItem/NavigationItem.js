import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';


export const NavigationItem = (props)=>{
    return (
        <div className = {classes.navWrapper}>
             <NavLink to={props.path} className = {classes.nav}>
                    <FontAwesomeIcon icon={props.icon} size="2x" color="#fff"/>
                    <div className ={classes.navTitle}>{props.name} </div>
             </NavLink>
        </div>
     
    )


}


