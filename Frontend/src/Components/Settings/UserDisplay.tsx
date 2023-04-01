import {
	doc,
	DocumentData,
	getFirestore,
	DocumentSnapshot,
} from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { app, auth } from '../../Config/Firebase';
import { DocumentHook, useDocument } from 'react-firebase-hooks/firestore';
import Spinner from '../All/Spinner';

type Props = {};

const UserDisplay = (props: Props) => {
	const [UserDetails, setUserDetails] = useState<any>();
	const [user, loadinguser] = useAuthState(auth);
	const [value, loadingdb] = useDocument(
		doc(getFirestore(app), 'Users', user!.uid)
	);

	useEffect(() => {
		if (user) {
			console.log('User Info');
			console.log(user);
			console.log(value?.data());

			setUserDetails(value?.data());
		}
	}, [value]);

	return (
		<div
			className={`UserDisplay ${
				loadinguser || loadingdb || !UserDetails ? 'LoadingDisplay' : ''
			}`}
		>
			{!user || !value || !UserDetails ? (
				<Spinner />
			) : (
				<>
					<div className="LeftSection">
						{/* <h2>{UserDetails.Username}</h2>
						<p>{UserDetails.UserEmail}</p>
						<p>Admin: {UserDetails.Admin ? 'True' : 'False'}</p> */}
					</div>
					<div className="RightSection">
						{/* <p>Created: {UserDetails.CreationDate}</p> */}
						{/* <p>UID: {UserDetails.UID}</p> */}
					</div>
				</>
			)}
		</div>
	);
};

export default UserDisplay;
