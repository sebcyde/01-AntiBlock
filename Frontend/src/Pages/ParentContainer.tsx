import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Components/All/Navbar';
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../Config/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoadingScreen from './Loading/LoadingScreen';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { collection, doc } from 'firebase/firestore';

type Props = {};

const ParentContainer = (props: Props) => {
	const [Loading, setLoading] = useState(true);
	const [user] = useAuthState(auth);
	const navigate = useNavigate();
	const [UserSS, loading] = useDocument(doc(db, `Users/${user?.uid}`));

	// Temp
	const [UD, UDL] = useCollection(
		collection(db, `Users/${user?.uid}/UserData`)
	);

	// initial app loading
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 500);
	}, []);

	// Navigate to sign in if no user
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (!user) {
				console.log('From App. No User Present');
				navigate('/signin');
			}
		});
	}, [user]);

	useEffect(() => {
		console.log('User Snapshot:', UserSS?.data());
		if (UserSS?.data()?.initialised == false) navigate('/initial');
	}, [UserSS]);

	// Temp
	useEffect(() => {
		UD?.docs.forEach((doc) => {
			console.log('User Data:', doc.data());
		});
	}, [UD]);

	return (
		<div className="ParentContainer">
			<Navbar />
			{Loading || loading ? <LoadingScreen /> : <Outlet />}
		</div>
	);
};

export default ParentContainer;
