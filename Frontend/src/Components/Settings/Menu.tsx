import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../Config/Firebase';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useDispatch, useSelector } from 'react-redux';
import {
	SettingsWindowState,
	SetWindow,
} from '../../../Store/Slices/SettingsWindowSlice';

type Props = {};

const Menu = (props: Props) => {
	const CurrentWindow = useSelector(SettingsWindowState);
	const CurrentDisplay = CurrentWindow.Window;
	const dispatch = useDispatch();

	const LogOut = async () => {
		try {
			signOut(auth);
		} catch (error: any) {
			console.log('Sign Out Failed:', error.code);
		}
	};

	return (
		<div className="SettingsMenu">
			<div className="AccountSection">
				<h2>Account</h2>
				<span
					className={CurrentDisplay == 'ProfileData' ? 'Active' : ''}
					onClick={() => {
						dispatch(SetWindow('ProfileData'));
					}}
				>
					<PersonOutlineOutlinedIcon /> Profile Data
				</span>
				<span
					className={CurrentDisplay == 'AccountDetails' ? 'Active' : ''}
					onClick={() => {
						dispatch(SetWindow('AccountDetails'));
					}}
				>
					<EditOutlinedIcon />
					Account Details
				</span>
				<span
					className={CurrentDisplay == 'Payments' ? 'Active' : ''}
					onClick={() => {
						dispatch(SetWindow('Payments'));
					}}
				>
					<CreditCardOutlinedIcon /> Billing and Payments
				</span>
			</div>
			<div className="ComponentSection">
				<h2>Component Settings</h2>

				<span
					className={CurrentDisplay == 'CreationSettings' ? 'Active' : ''}
					onClick={() => {
						dispatch(SetWindow('CreationSettings'));
					}}
				>
					Creation Settings
				</span>
				<span
					className={CurrentDisplay == 'IdeasSettings' ? 'Active' : ''}
					onClick={() => {
						dispatch(SetWindow('IdeasSettings'));
					}}
				>
					Ideas Settings
				</span>
				<span
					className={CurrentDisplay == 'ExercisesSettings' ? 'Active' : ''}
					onClick={() => {
						dispatch(SetWindow('ExercisesSettings'));
					}}
				>
					Exercises Settings
				</span>
				<span
					className={CurrentDisplay == 'CollaborationSettings' ? 'Active' : ''}
					onClick={() => {
						dispatch(SetWindow('CollaborationSettings'));
					}}
				>
					Collaboration Settings
				</span>
				<span
					className={CurrentDisplay == 'ProgressSettings' ? 'Active' : ''}
					onClick={() => {
						dispatch(SetWindow('ProgressSettings'));
					}}
				>
					Progress Settings
				</span>
				<span
					className={CurrentDisplay == 'ResourcesSettings' ? 'Active' : ''}
					onClick={() => {
						dispatch(SetWindow('ResourcesSettings'));
					}}
				>
					Resources Settings
				</span>
			</div>
			<div className="OtherSection">
				<h2>Other Settings</h2>

				<button className="LogoutButton" onClick={LogOut}>
					Log Out
				</button>
			</div>
		</div>
	);
};

export default Menu;
