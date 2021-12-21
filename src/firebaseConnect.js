import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDZVPR-xE5ztz50_WqqZRz8lw8Xp3YRd8U",
    authDomain: "hula-1b121.firebaseapp.com",
    databaseURL: "https://hula-1b121-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hula-1b121",
    storageBucket: "hula-1b121.appspot.com",
    messagingSenderId: "1055939800159",
    appId: "1:1055939800159:web:0a00368717e2e9fd797fea",
    measurementId: "G-E39DFJFV5S"
  };
const firebaseConnect  = initializeApp(firebaseConfig);
export default firebaseConnect;  