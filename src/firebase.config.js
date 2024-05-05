// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId, 
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDSaXn-7H9nBhdBay7V46BGHIVjWKhecN4",
//   authDomain: "all-testisng-project.firebaseapp.com",
//   projectId: "all-testisng-project",
//   storageBucket: "all-testisng-project.appspot.com",
//   messagingSenderId: "998844555884",
//   appId: "1:998844555884:web:c9d4853507d65762142e49"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;