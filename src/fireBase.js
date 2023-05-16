// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRqqxRAVzJqRKpu0nCEH6JhLMFxq7Ljhs",
    authDomain: "shopgiacatts.firebaseapp.com",
    databaseURL: "https://shopgiacatts-default-rtdb.firebaseio.com",
    projectId: "shopgiacatts",
    storageBucket: "shopgiacatts.appspot.com",
    messagingSenderId: "762676466402",
    appId: "1:762676466402:web:b07dd8268758e8908a84bb",
    measurementId: "G-LZENEKM2TQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);