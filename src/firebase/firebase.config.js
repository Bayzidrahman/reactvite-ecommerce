// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk5PrO97rmebCQfCqCLpLMDid6tXBJXY4",
  authDomain: "my-react-project-c77b5.firebaseapp.com",
  projectId: "my-react-project-c77b5",
  storageBucket: "my-react-project-c77b5.firebasestorage.app",
  messagingSenderId: "820054710276",
  appId: "1:820054710276:web:3fe8b15c15a8edf0dfbd51",
  measurementId: "G-8X1N21ZJ2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';


// const firebaseConfig = {
// apiKey: "YOUR_API_KEY",
// authDomain: "YOUR_AUTH_DOMAIN",
// projectId: "YOUR_PROJECT_ID",
// appId: "YOUR_APP_ID"
// };


// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

