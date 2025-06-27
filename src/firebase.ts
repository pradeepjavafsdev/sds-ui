// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, RecaptchaVerifier } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA1xN6BXBPYDClvMucTwhHij4gEa9MJTt4",
    authDomain: "sds-ui.firebaseapp.com",
    databaseURL: "https://sds-ui-default-rtdb.firebaseio.com",
    projectId: "sds-ui",
    storageBucket: "sds-ui.firebasestorage.app",
    messagingSenderId: "186738846116",
    appId: "1:186738846116:web:1229a46a95ccbd1d4f3931"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, RecaptchaVerifier };
