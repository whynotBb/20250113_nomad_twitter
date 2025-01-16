import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBi3OaLMSo02HyvC-6iBNQ1HjVEljg0els",
  authDomain: "bb-x-75994.firebaseapp.com",
  projectId: "bb-x-75994",
  storageBucket: "bb-x-75994.firebasestorage.app",
  messagingSenderId: "474432428365",
  appId: "1:474432428365:web:7f99486267ab0e83b9ff04",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
