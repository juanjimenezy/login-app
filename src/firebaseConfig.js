import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmUOLf3ddmVVIOF-i_dyd3DRD83rClzyo",
  authDomain: "login-app-7ebef.firebaseapp.com",
  projectId: "login-app-7ebef",
  storageBucket: "login-app-7ebef.appspot.com",
  messagingSenderId: "409504685485",
  appId: "1:409504685485:web:7ab396e8553c395ff6d524",
  measurementId: "G-NQ91974281"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);