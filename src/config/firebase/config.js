// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider , FacebookAuthProvider , EmailAuthProvider} from "firebase/auth";
//https://mini-project-823ba.firebaseapp.com/__/auth/handler
const firebaseConfig = {
  apiKey: "AIzaSyCBVbCRP2a_DvJp20diFWELukflT401jkw",
  authDomain: "mini-project-823ba.firebaseapp.com",
  projectId: "mini-project-823ba",
  storageBucket: "mini-project-823ba.appspot.com",
  messagingSenderId: "173152158880",
  appId: "1:173152158880:web:37d5dec8ae49436792f5c5",
  measurementId: "G-271SLVD2SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()
const providerFacebook = new FacebookAuthProvider()
const providerEmail = new EmailAuthProvider()

export {auth , provider , providerFacebook, providerEmail}