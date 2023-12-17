import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBrYtnV3LkpRwa6SL8XW643OSdeIyAVjFY",

    authDomain: "eeee-3074a.firebaseapp.com",

    projectId: "eeee-3074a",

    storageBucket: "eeee-3074a.appspot.com",

    messagingSenderId: "370317250525",

    appId: "1:370317250525:web:521af4f23954b5441e7034"

};
const app = initializeApp(firebaseConfig);


export { app as firebaseApp };
