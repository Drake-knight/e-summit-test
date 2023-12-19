/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');
const firebaseConfig = {
    apiKey: "AIzaSyCHTCHrkx75W46v7iJ4cPTEqhC4ygMeCs0",
    authDomain: "esummit-86c5c.firebaseapp.com",
    projectId: "esummit-86c5c",
    storageBucket: "esummit-86c5c.appspot.com",
    messagingSenderId: "927886998692",
    appId: "1:927886998692:web:e04743740d20e82e81fa31",
    measurementId: "G-YMKZWZF0RM",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

console.info("Firebase messaging service worker is set up");