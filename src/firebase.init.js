// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1__GWTD9eJCdDJELhAxUmJsa6D4nj7iU",
    authDomain: "doctors-protal-35c66.firebaseapp.com",
    projectId: "doctors-protal-35c66",
    storageBucket: "doctors-protal-35c66.appspot.com",
    messagingSenderId: "356347435096",
    appId: "1:356347435096:web:720d436407b03e1260122d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;