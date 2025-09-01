// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUC8urqa0iQJgmwNYF9_VxIcAElE-wPO0",
  authDomain: "anime1-57755.firebaseapp.com",
  projectId: "anime1-57755",
  storageBucket: "anime1-57755.appspot.com",
  messagingSenderId: "569719706980",
  appId: "1:569719706980:web:b66d7c8c554607efae1671",
  measurementId: "G-D6LW88PM87"
};

const app = initializeApp(firebaseConfig);

// ✅ Export both auth and onAuthStateChanged
export const auth = getAuth(app);
export { onAuthStateChanged };
