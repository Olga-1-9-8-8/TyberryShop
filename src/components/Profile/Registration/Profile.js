import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import app, { userProfileHandler } from '../../../firebase';
import { selectCurrentUser, setCurrentUser } from "../../../redux/userSlice.js";
import { PersonalProfile } from "../PersonalProfilePage/PersonalProfile.js";
import { selectOrderValue } from "../PersonalProfilePage/personalProfileSlice.js";
import { Button } from "./Button/Button.js";
import styles from "./Profile.module.css";
import { ProfileInput } from "./ProfileInput/ProfileInput.js";



export const Profile = () => {

    const dispatch =  useDispatch();
    const order = useSelector(selectOrderValue);
    const userFromState = useSelector(selectCurrentUser); 


    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');  
    const[alreadyHasAccount, setAlreadyHasAccount] = useState(false); 


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
        .then((userCredential) =>{
            const user = userCredential.user // this is new object user
            userProfileHandler(user,order)  // add new user and his order to firestore
        })
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

    const authListener = () => { //check if user exsist,only then set him
        app.auth().onAuthStateChanged( async userAuth => { 
            if(userAuth){  
                const userRef = await userProfileHandler(userAuth,order);
                userRef.onSnapshot(snapshot => {   // use it instead of get(take once and forget), take data from firestore that method use becouse we need to listen changes in this document all time
                   dispatch(setCurrentUser({
                    id: snapshot.id,   // take id from firestore
                    ...snapshot.data()   // take other info from firestore
                   }) )
                })                   
                cleanInputs();
            } else {
                dispatch(setCurrentUser(userAuth)) //if user not login
            }}
        )
    }

    useEffect(() => {
        authListener();
        return () =>{        //it is very similar as componentWillUnMount
          authListener()  
        }
    },[]);  // [x] -when x value changed , all code inside useEffect re-run 

    const changeNameInput = (e) =>{  
        setEmail(e.target.value)
    }

    const changePasswordInput = (e) =>{  
        setPassword(e.target.value)
    }

    return(
        <section className = {styles.profile}>
         
            {userFromState ?    //if user existes

            (  <PersonalProfile logOut = {logOutHandler} email = {`здесь будет Ваш имейл`}/>  
                   
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
                                <span className ={styles.accountMessageTitle} onClick={()=>setAlreadyHasAccount(alreadyHasAccount => !alreadyHasAccount)}>Зарегистрируйтесь</span>
                            </p>
                        </>
                    ):(
                        <>
                            <Button  handler={signUpHandler}  text='Зарегистрироваться'/>
                            <p> 
                                <span className ={styles.accountMessage}> Уже есть аккаунт? </span>
                                <span className ={styles.accountMessageTitle}onClick={()=>setAlreadyHasAccount(alreadyHasAccount => !alreadyHasAccount)}>Войти</span>
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
       





 
