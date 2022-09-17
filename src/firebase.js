import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDFDkZIFujSTXG7ZwYir2AhI07PoRfy9P4',
	authDomain: 'linkedin-clone-9136a.firebaseapp.com',
	projectId: 'linkedin-clone-9136a',
	storageBucket: 'linkedin-clone-9136a.appspot.com',
	messagingSenderId: '411559475523',
	appId: '1:411559475523:web:9d47b7f17a13a629b117f6',
	measurementId: 'G-8Y44SJ8D5N',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
