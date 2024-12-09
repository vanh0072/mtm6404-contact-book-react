import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD-_z4_LaXm5SQ3z_zdQqSUgnDAHWx7maI",
    authDomain: "contact-book-v2.firebaseapp.com",
    projectId: "contact-book-v2",
    storageBucket: "contact-book-v2.firebasestorage.app",
    messagingSenderId: "854989585906",
    appId: "1:854989585906:web:c0523f36d85b2450fb3f6b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
