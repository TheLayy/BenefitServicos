import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBgJlsUtH81O6uwW7HqhZFvlJhGZ6DDT0k",
    authDomain: "benefit-76f8a.firebaseapp.com",
    databaseURL: "https://benefit-76f8a-default-rtdb.firebaseio.com",
    projectId: "benefit-76f8a",
    storageBucket: "benefit-76f8a.appspot.com",
    messagingSenderId: "668560513729",
    appId: "1:668560513729:web:38b8f3cf3568b1871f5240"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Database
const database = getDatabase(app);

export default database;