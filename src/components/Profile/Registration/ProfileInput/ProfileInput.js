
import styles from "./ProfileInput.module.css";


const ProfileInput = (props) => {
    return(
        <div>
            <input type={props.type} placeholder={props.placeholder} value ={props.value} onChange = {props.onChange}
                    className={styles.input} min-length = '4' max-length = '30' required/>
        </div>
    )
};
       
export default ProfileInput;







