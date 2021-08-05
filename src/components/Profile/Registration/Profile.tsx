/* eslint-disable import/no-named-as-default-member */
import React, { useCallback, useEffect, useState } from 'react';
import app, { userProfileHandler } from '../../../firebase';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectCurrentUser, setCurrentUser } from '../../../redux/userSlice';
import { PersonalProfile } from '../PersonalProfilePage/PersonalProfile';
import { selectOrderValue } from '../PersonalProfilePage/personalProfileSlice';
import { Button } from './Button/Button';
import styles from './Profile.module.css';
import { ProfileInput } from './ProfileInput/ProfileInput';

const Profile = () => {
  const dispatch = useAppDispatch();
  const order = useAppSelector(selectOrderValue);
  const userFromState = useAppSelector(selectCurrentUser);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [alreadyHasAccount, setAlreadyHasAccount] = useState(false);

  const cleanInputs = () => {
    setEmail('');
    setPassword('');
  };

  const cleanErrors = () => {
    setError('');
  };

  const logInHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    cleanErrors();
    app
      .auth()
      .signInWithEmailAndPassword(email, password) // login as exist user
      .catch((error) => {
        switch (error.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setError(error.message);
            break;
          case 'auth/wrong-password':
            setError(error.message);
            break;
          default:
        }
      });
  };

  const signUpHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    cleanErrors();
    app
      .auth()
      .createUserWithEmailAndPassword(email, password) // create new user
      .then((userCredential) => {
        const { user } = userCredential; // this is new object user
        userProfileHandler(user, order); // add new user and his order to firestore
      })
      .catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setError(error.message);
            break;
          case 'auth/weak-password':
            setError(error.message);
            break;
          default:
        }
      });
  };

  const logOutHandler = () => {
    app.auth().signOut(); // exit from profile personal
  };

  const authListener = useCallback(() => {
    // check if user exsist,only then set him
    app.auth().onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await userProfileHandler(userAuth, order);
        userRef?.onSnapshot((snapshot) => {
          // use it instead of get(take once and forget), take data from firestore that method use becouse we need to listen changes in this document all time
          dispatch(
            setCurrentUser({
              id: snapshot.id, // take id from firestore
              ...snapshot.data(), // take other info from firestore
            }),
          );
        });
        cleanInputs();
      } else {
        dispatch(setCurrentUser(userAuth)); // if user not login
      }
    });
  }, [dispatch, order]);

  useEffect(() => {
    authListener();
    return () => {
      // it is very similar as componentWillUnMount
      authListener();
    };
  }, [authListener]); // [x] -when x value changed , all code inside useEffect re-run (change on every render)

  const changeNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <section className={styles.profile}>
      {userFromState ? ( // if user existes
        <PersonalProfile logOut={logOutHandler} email={userFromState.email} />
      ) : (
        // if user not existes
        <div className={styles.profileWrapper}>
          <h2 className={styles.profileTitle}>Войти</h2>
          <ProfileInput
            onChange={changeNameInput}
            value={email}
            type="email"
            placeholder="Email"
          />
          <ProfileInput
            onChange={changePasswordInput}
            value={password}
            type="password"
            placeholder="Пароль"
          />
          <p className={styles.errorMessage}>{error}</p>
          {alreadyHasAccount ? (
            <>
              <Button handler={logInHandler} text="Войти" />
              <p>
                <span className={styles.accountMessage}>
                  {' '}
                  Если у Вас нет аккаунта?{' '}
                </span>
                <span
                  className={styles.accountMessageTitle}
                  onClick={() =>
                    setAlreadyHasAccount(
                      (alreadyHasAccount) => !alreadyHasAccount,
                    )
                  }
                >
                  Зарегистрируйтесь
                </span>
              </p>
            </>
          ) : (
            <>
              <Button handler={signUpHandler} text="Зарегистрироваться" />
              <p>
                <span className={styles.accountMessage}>
                  {' '}
                  Уже есть аккаунт?{' '}
                </span>
                <span
                  className={styles.accountMessageTitle}
                  onClick={() =>
                    setAlreadyHasAccount(
                      (alreadyHasAccount) => !alreadyHasAccount,
                    )
                  }
                >
                  Войти
                </span>
              </p>
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default Profile;
