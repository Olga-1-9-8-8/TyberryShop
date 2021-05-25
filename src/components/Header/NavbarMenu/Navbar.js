
import { useEffect, useRef, useState } from "react";
import { IconContext } from 'react-icons';
import * as AntIcons from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import styles from './Navbar.module.css';
import { NavbarItem } from "./NavbarItem/NavbarItem.js";


export const Navbar = () => {

    let menuReference =useRef();
 
    const [sidebar,setSidebar] = useState(false);

    const showMenu = () =>{
        setSidebar(sidebar => !sidebar);
    }

   useEffect(() => {
       let handler = (e) => {
            if(!menuReference.current.contains(e.target)){
             setSidebar(false);
            }
        }

        document.addEventListener('mousedown',handler);

        return () => {
            document.removeEventListener('mousedown',handler)
        }
       
   })


    return(
        <div className = {styles.navbar}>
            
            <IconContext.Provider value={{color: '#fff'}}>
                <div className = {styles.navbarIcon}>
                    <FaBars color="#fff" onClick = {showMenu} />
                </div>
                
                <nav ref = {menuReference} className ={sidebar ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`}>
                    <ul className = {styles.navMenuItems} onClick = {showMenu}>  
                        <NavbarItem name = 'О нас' path = '/about' icon = {<AntIcons.AiFillHeart />}/>
                        <NavbarItem name = 'Контакты' path = '/delivery' icon = {<AntIcons.AiFillContacts />} />
                        <NavbarItem name = 'Профиль' path = '/profile' icon = {<AntIcons.AiOutlineQq />} />
                        <NavbarItem name = 'Корзина' path = '/basket' icon = {<AntIcons.AiFillShopping />} />
                    </ul>
                    <div className = {styles.navbarIcon} />
                </nav>
            </IconContext.Provider>  
        </div>
    )
}









            