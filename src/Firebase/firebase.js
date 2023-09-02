import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAP2j0GGLSJ6WrKCugQXiXHV3yrTnY2ReA",
  authDomain: "filmrise-dcb8a.firebaseapp.com",
  projectId: "filmrise-dcb8a",
  storageBucket: "filmrise-dcb8a.appspot.com",
  messagingSenderId: "485899236907",
  appId: "1:485899236907:web:c7dc7e4bcad6293a2a5c6e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");
export default app;
