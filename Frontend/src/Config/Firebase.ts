import { initializeApp } from 'firebase/app';
// import DefaultImage from '../assets/PFP/girl2.png';
import { doc, setDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';
import { uuid } from 'uuidv4';

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyD0G1cMQLCac8-NsYiP-ftOrnB5dYOHYa4',
	authDomain: 'antiblock-c79fe.firebaseapp.com',
	projectId: 'antiblock-c79fe',
	storageBucket: 'antiblock-c79fe.appspot.com',
	messagingSenderId: '235783727399',
	appId: '1:235783727399:web:f18f3ae8453baa33be2102',
};

export const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Sign Up New Users
export const SignUpNewUser = async (
	auth: any,
	email: string,
	password: string
) => {
	try {
		const UserCred = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = UserCred.user;
		console.log('Signed up as:', user);

		await setDoc(doc(db, `Users/${user.uid}`), {
			UserEmail: user.email,

			// DisplayPicture: DefaultImage,
			CreationDate: user.metadata.creationTime,
			UID: user.uid,
			Admin: false,
			initialised: false,
			LastSeen: Date.now(),
		});

		await setDoc(doc(db, `Users/${user.uid}/MoreInfo/Lists`), {
			occupation: '',
			interests: [],
		});

		// await setDoc(doc(db, `Users/${user.uid}/MoreInfo/Recommendations`), {
		// 	Recommendations: [],
		// });

		// await setDoc(doc(db, `Users/${user.uid}/MoreInfo/Friends`), {
		// 	Following: [],
		// 	Followers: [],
		// });

		console.log('User Creation Successful:');
	} catch (error: any) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(`Error ${errorCode}:`, errorMessage);
	}
};

// Sign In Existing Users
export const SignInExistingUser = async (
	auth: any,
	email: string,
	password: string
) => {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log('Signed in as:', user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(`Error ${errorCode}:`, errorMessage);
			alert('Invalid Credentials');
		});
};
