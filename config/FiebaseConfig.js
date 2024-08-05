 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth from firebase/auth
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhRxOARTWA6VyTjJQR_G5-8ocpZXWu7OU",
  authDomain: "travelapp-4f8c6.firebaseapp.com",
  projectId: "travelapp-4f8c6",
  storageBucket: "travelapp-4f8c6.appspot.com",
  messagingSenderId: "314143672947",
  appId: "1:314143672947:web:a19c8c6a3e53d0882d7806",
  measurementId: "G-4LXZCLPJ6H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Initialize auth

// // Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDhRxOARTWA6VyTjJQR_G5-8ocpZXWu7OU",
//   authDomain: "travelapp-4f8c6.firebaseapp.com",
//   projectId: "travelapp-4f8c6",
//   storageBucket: "travelapp-4f8c6.appspot.com",
//   messagingSenderId: "314143672947",
//   appId: "1:314143672947:web:a19c8c6a3e53d0882d7806",
//   measurementId: "G-4LXZCLPJ6H",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
