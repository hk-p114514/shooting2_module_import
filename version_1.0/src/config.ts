import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import * as firebaseui from 'firebaseui';

const firebaseConfig = {
	apiKey: 'AIzaSyDX_QPjKGDA3OnfPL5x5IpCPztdxl200Gw',
	authDomain: 'shooting2-c68c2.firebaseapp.com',
	projectId: 'shooting2-c68c2',
	storageBucket: 'shooting2-c68c2.appspot.com',
	messagingSenderId: '1060125794969',
	appId: '1:1060125794969:web:6313c3e88bb8d0a6d20e08',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const ui = new firebaseui.auth.AuthUI(auth);

export { firebase, db, auth, ui };
