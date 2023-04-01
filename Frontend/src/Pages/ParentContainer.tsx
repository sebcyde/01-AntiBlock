import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../Components/All/Navbar';
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Config/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoadingScreen from './Loading/LoadingScreen';

type Props = {};

const ParentContainer = (props: Props) => {
	const [user] = useAuthState(auth);
	const navigate = useNavigate();
	const [Loading, setLoading] = useState(true);

	// initial app loading
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
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

	return (
		<div className="ParentContainer">
			{Loading ? (
				<LoadingScreen />
			) : (
				<>
					<Navbar />
					<Outlet />
				</>
			)}
		</div>
	);
};

export default ParentContainer;
