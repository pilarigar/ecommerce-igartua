// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBmbZ0lrAt4iNfqnFak4ZDYObyWDKwuv3s",
  authDomain: "ecommerce-igartua.firebaseapp.com",
  projectId: "ecommerce-igartua",
  storageBucket: "ecommerce-igartua.appspot.com",
  messagingSenderId: "73208093918",
  appId: "1:73208093918:web:6b08a17326cc58a1a5764f"
};

// iniciar Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app
}