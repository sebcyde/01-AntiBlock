import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react';
import { auth, SignInExistingUser } from '../../Config/Firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

type Props = {};

const SignIn = (props: Props) => {
	const [UserPassword, setUserPassword] = useState('');
	const [UserEmail, setUserEmail] = useState('');
	const navigate = useNavigate();
	const [user] = useAuthState(auth);

	const LogIn = async () => {
		await SignInExistingUser(auth, UserEmail, UserPassword);
		navigate('/');
	};

	return (
		<div className="SignInContainer">
			<div className="SignUpBox">
				<h2 className="Header">Welcome Back</h2>
				<p className="Description">Sign In</p>

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

				<button onClick={LogIn}>Sign In</button>
				<p>
					Don't have an account?{' '}
					<a className="Link" href="/signup">
						Register
					</a>
				</p>
			</div>
		</div>
	);
};

export default SignIn;
