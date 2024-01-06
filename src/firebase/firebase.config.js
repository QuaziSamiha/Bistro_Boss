// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDc9CSBv7bw0PepjkP1yxNgiUfqdb2WbYs",
  authDomain: "bistro-boss-42975.firebaseapp.com",
  projectId: "bistro-boss-42975",
  storageBucket: "bistro-boss-42975.appspot.com",
  messagingSenderId: "920108725265",
  appId: "1:920108725265:web:fe96af80bb0ebfe3d02db0"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
