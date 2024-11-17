import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDYmxDTJdNSanyJb7LxxuYUeL8ne3XhL0A",
  authDomain: "mutr-3d721.firebaseapp.com",
  projectId: "mutr-3d721",
  storageBucket: "mutr-3d721.firebasestorage.app",
  messagingSenderId: "920062774133",
  appId: "1:920062774133:web:670df91a878fbf2fcf213c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);