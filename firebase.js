import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAffPppDYm1tlAbQzAp83zM44pA8bVxukQ",
  authDomain: "keep-docs-7c758.firebaseapp.com",
  projectId: "keep-docs-7c758",
  storageBucket: "keep-docs-7c758.appspot.com",
  messagingSenderId: "419162465967",
  appId: "1:419162465967:web:e96129d90de4e42612165a"
};


const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };