
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjYsp-Xw4apZ_cxW6UVE91G4IdAVXOUXM",
  authDomain: "auth-moha-milon-7faa5.firebaseapp.com",
  projectId: "auth-moha-milon-7faa5",
  storageBucket: "auth-moha-milon-7faa5.appspot.com",
  messagingSenderId: "59686820914",
  appId: "1:59686820914:web:b041a052cc9b5ded84702b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;