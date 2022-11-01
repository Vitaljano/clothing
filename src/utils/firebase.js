import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { doc, getFirestore, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGeaR_C2D4MpfftAry5lMgXy2J0MaqZaY",

  authDomain: "clothing-db-87d91.firebaseapp.com",

  projectId: "clothing-db-87d91",

  storageBucket: "clothing-db-87d91.appspot.com",

  messagingSenderId: "267297471403",

  appId: "1:267297471403:web:3daece94f62b6b1720b0ee",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additional = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        createdAt,
        displayName,
        email,
        ...additional,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const userSignOut = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};
