// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyCMIv7cBirJiSDMkA--jYK73T4sQ6PB_DM",
  authDomain: "istab-7a320.firebaseapp.com",
  projectId: "istab-7a320",
  storageBucket: "istab-7a320.appspot.com",
  messagingSenderId: "1005359689570",
  appId: "1:1005359689570:web:8fa680bac4affb5869063b",
  databaseURL: "https://istab-91431-default-rtdb.europe-west1.firebaseio.com/"
    
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);