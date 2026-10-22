// KTHuD Firebase client configuration
// Protect data with Firebase Authentication and Firestore Security Rules.
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBQgdyKR1sP6sK8Hcd3_d9vpYF0AbOfWA",
  authDomain: "kthud-6b6e1.firebaseapp.com",
  projectId: "kthud-6b6e1",
  storageBucket: "kthud-6b6e1.firebasestorage.app",
  messagingSenderId: "658420442472",
  appId: "1:658420442472:web:398be81e17c146b129a2dd",
  measurementId: "G-NTXV931G13"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const cloudReady = signInAnonymously(auth);
export { auth, db, cloudReady, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp };
