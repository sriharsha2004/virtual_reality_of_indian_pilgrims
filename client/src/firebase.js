// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



var firebaseConfig = {
  apiKey: "AIzaSyBibl9zgIGuatgmgx64dTtx36MuqbfRxRc",
  authDomain: "otp-authentication-e0c9e.firebaseapp.com",
  projectId: "otp-authentication-e0c9e",
  storageBucket: "otp-authentication-e0c9e.appspot.com",
  messagingSenderId: "755201857187",
  appId: "1:755201857187:web:5c3931ab6ceeac07455116"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase