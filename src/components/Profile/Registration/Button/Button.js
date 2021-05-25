import PropTypes from 'prop-types';
import styles from './Button.module.css';

export const Button = ({text,handler}) => {

 return(
     <button type ="submit" onClick={handler}
            className = {styles.button}>
        {text}
    </button>
 )

}


Button.propTypes = {
    text : PropTypes.string,
}

