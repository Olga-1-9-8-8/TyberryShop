/* eslint-disable consistent-return */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBAZE_KEY,
  authDomain: process.env.REACT_APP_FIREBAZE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBAZE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBAZE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBAZE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBAZE_APP_ID,
});

export const auth = app.auth();
export const firestore = app.firestore();

export const userProfileHandler = async (userAuth, additionalInfo) => {
  // take userAuth Object and add to firestore
  const cartOrderTotalPriceArr = additionalInfo.reduce(
    (acom, current) => acom + current.totalPriseOrder,
    0,
  );
  const cartOrderTotalCountArr = additionalInfo.reduce(
    (acom, current) => acom + current.totalCountOrder,
    0,
  );
  if (!userAuth) return;
  const { uid } = userAuth; // take current user id

  const currentUserRef = firestore.doc(`users/${uid}`); // if user not exists,it is new user and we need create new document inside firebase
  const snapshot = await currentUserRef.get(); // wait object from firestore
  if (!snapshot.exists) {
    const { email } = userAuth; // add more other, when we create new document (+ cart order)
    const timestamp = new Date();
    const currentTime = {
      day: timestamp.getDate(),
      month: timestamp.getMonth() + 1,
      year: timestamp.getFullYear(),
      minute: timestamp.getMinutes(),
      hours: timestamp.getHours(),
    };
    await currentUserRef.set({
      // create new
      email,
      date: currentTime,
      totalOrderGoodsCount: cartOrderTotalCountArr,
      totalOrderGoodsPrice: cartOrderTotalPriceArr,
    });
  }
  return currentUserRef; // for update local state of app
};

export default app;
