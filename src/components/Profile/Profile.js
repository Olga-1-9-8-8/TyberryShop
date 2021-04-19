import { useEffect, useState } from "react";
import app from './../../firebase';
import Button from "./Button/Button.js";
import PersonalProfile from "./PersonalProfilePage/PersonalProfile.js";
import styles from "./Profile.module.css";
import ProfileInput from "./ProfileInput/ProfileInput.js";




const Profile = () => {
    const[user, setUser] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [error, setError] = useState('');  
    const [alreadyHasAccount, setAlreadyHasAccount] = useState(false); 
    const[emailForAccount,setEmailForAccount] = useState('');


    const cleanInputs = () =>{
        setEmail('');
        setPassword('');
    }

    const cleanErrors = () =>{
        setError('');
    }

    const logInHandler = (e) =>{
        e.preventDefault(); 
        cleanErrors();
        app.auth().signInWithEmailAndPassword(email,password)  //login as exist user
        .catch(error =>{
            switch(error.code){
                case 'auth/invalid-email':
                case 'auth/user-disabled':
                case 'auth/user-not-found':
                    setError(error.message);
                    break;
                case 'auth/wrong-password':
                    setError(error.message);
                    break;
            }
            
        })
    }

    const signUpHandler = (e) =>{
        e.preventDefault();
        cleanErrors();
        app.auth().createUserWithEmailAndPassword(email,password)  //create new user
        .catch(error =>{
            switch(error.code){
                case 'auth/email-already-in-use':
                case 'auth/invalid-email':
                    setError(error.message);
                    break;
                case 'auth/weak-password':
                    setError(error.message);
                    break;
            }
        })
    }

    const logOutHandler = () =>{   
        app.auth().signOut();   //exit from profile personal
    
    }

    const authListener = () => {  //check if user exsist,only then set him
        app.auth().onAuthStateChanged(user => {
            if(user){  
                setEmailForAccount(user.email) 
                cleanInputs();
                setUser(user);
            } else {
                setUser('');
            }
        })
    }

    useEffect(() => {
        authListener();
    });

    const changeNameInput = (e) =>{  
        setEmail(e.target.value)
    }

    const changePasswordInput = (e) =>{  
        setPassword(e.target.value)
    }

    return(
        <section className = {styles.profile}>
         
            {user ?    //if user existes

            (  <PersonalProfile logOut = {logOutHandler} email = {emailForAccount}/>  
                   
                ):(                     //if user not existes
            <div className = {styles.profileWrapper} >
                 <h2 className = {styles.profileTitle}>Войти</h2>
                <ProfileInput onChange={changeNameInput} value = {email} type = 'email' placeholder = 'Email'/>
                <ProfileInput onChange={changePasswordInput} value = {password} type = 'password' placeholder = 'Пароль'/>
                <p className ={styles.errorMessage}>{error}</p>
                {alreadyHasAccount ? 
                    (   
                        <>
                            <Button handler={logInHandler}  text='Войти'/>
                            <p> 
                                <span className ={styles.accountMessage}> Если у Вас нет аккаунта? </span>
                                <span className ={styles.accountMessageTitle} onClick={()=>setAlreadyHasAccount(!alreadyHasAccount)}>Зарегистрируйтесь</span>
                            </p>
                        </>
                    ):(
                        <>
                            <Button  handler={signUpHandler}  text='Зарегистрироваться'/>
                            <p> 
                                <span className ={styles.accountMessage}> Уже есть аккаунт? </span>
                                <span className ={styles.accountMessageTitle}onClick={()=>setAlreadyHasAccount(!alreadyHasAccount)}>Войти</span>
                            </p>
                        </>
                    )
                    }
                
            </div> 
                )      
            }
  
           
        </section>
    )
};
       
export default Profile;





 
