// KTHuD Firebase client configuration
// Firebase web config is public by design; secure access with Firebase Authentication and Firestore Rules.
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCF5lvlmMkU-d5OqTslO0YNrdnxzGiwKRY",
  authDomain: "kthub-app-2ef45.firebaseapp.com",
  projectId: "kthub-app-2ef45",
  storageBucket: "kthub-app-2ef45.firebasestorage.app",
  messagingSenderId: "709910871522",
  appId: "1:709910871522:web:ccb7a96a6204e318544dbb",
  measurementId: "G-8HWP0540G3"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const cloudReady = signInAnonymously(auth);
export { auth, db, cloudReady, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp };