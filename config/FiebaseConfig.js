import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDhRxOARTWA6VyTjJQR_G5-8ocpZXWu7OU",
  authDomain: "travelapp-4f8c6.firebaseapp.com",
  projectId: "travelapp-4f8c6",
  storageBucket: "travelapp-4f8c6.appspot.com",
  messagingSenderId: "314143672947",
  appId: "1:314143672947:web:a19c8c6a3e53d0882d7806",
  measurementId: "G-4LXZCLPJ6H",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
