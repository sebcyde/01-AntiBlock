import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Config/Firebase';
import { SignUpNewUser } from '../../Config/Firebase';

type Props = {};

const SignUp = (props: Props) => {
	const [UserPassword, setUserPassword] = useState('');
	const [UserEmail, setUserEmail] = useState('');
	const [UserName, setUserName] = useState('');

	const Register = async () => {
		await SignUpNewUser(auth, UserEmail, UserPassword, UserName);
	};

	return (
		<div className="SignUpContainer">
			<div className="SignUpBox">
				<h2 className="Header">Welcome to AntiBlock</h2>
				<p className="Description">Register</p>

				<input
					placeholder="Display Name"
					type="text"
					onChange={(e) => {
						setUserName(e.target.value);
					}}
				/>
				<input
					placeholder="Email"
					type="email"
					onChange={(e) => {
						setUserEmail(e.target.value);
					}}
				/>

				<input
					placeholder="Password"
					type="password"
					onChange={(e) => {
						setUserPassword(e.target.value);
					}}
				/>

				<button onClick={Register}>Sign Up</button>
				<p>
					Already have an account?{' '}
					<a className="Link" href="/signin">
						Sign In
					</a>
				</p>
			</div>
		</div>
	);
};

export default SignUp;
