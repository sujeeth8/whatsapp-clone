import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBKuLMyZd5FlDXfqmZA0-ea-0AOnQGH2Mw",
    authDomain: "whats-app-clone-8647f.firebaseapp.com",
    projectId: "whats-app-clone-8647f",
    storageBucket: "whats-app-clone-8647f.appspot.com",
    messagingSenderId: "787271940326",
    appId: "1:787271940326:web:3c5560d681b834e4e62327",
    measurementId: "G-XHFSBX15JJ"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider};
  export default db;