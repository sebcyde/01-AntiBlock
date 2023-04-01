import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Components/All/Navbar';
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../Config/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoadingScreen from './Loading/LoadingScreen';
import { useDocument } from 'react-firebase-hooks/firestore';
import { doc } from 'firebase/firestore';

type Props = {};

const ParentContainer = (props: Props) => {
	const [Loading, setLoading] = useState(true);
	const [user] = useAuthState(auth);
	const navigate = useNavigate();
	const [snapshot, loading] = useDocument(doc(db, `Users/${user?.uid}`));

	// initial app loading
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
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
		console.log('User Snapshot:', snapshot?.data());
		if (snapshot?.data()?.initialised == false) navigate('/initial');
	}, [snapshot]);

	return (
		<div className="ParentContainer">
			<Navbar />
			{Loading || loading ? <LoadingScreen /> : <Outlet />}
		</div>
	);
};

export default ParentContainer;
