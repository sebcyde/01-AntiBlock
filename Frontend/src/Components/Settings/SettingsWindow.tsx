import { SettingsWindowState } from '../../../Store/Slices/SettingsWindowSlice';
import { useSelector } from 'react-redux';
import UserDisplay from './UserDisplay';
import React, { useEffect, useState } from 'react';
import ProfileData from './WindowPages/TopLevelWindows/ProfileData';
import Payments from './WindowPages/TopLevelWindows/Payments';
import AnimeSettings from './WindowPages/TopLevelWindows/CreationSettings';
import StockSettings from './WindowPages/TopLevelWindows/IdeasSettings';
import GeneralSettings from './WindowPages/TopLevelWindows/GeneralSettings';
import AccountDetails from './WindowPages/TopLevelWindows/AccountDetails';
import IdeasSettings from './WindowPages/TopLevelWindows/IdeasSettings';
import ExercisesSettings from './WindowPages/TopLevelWindows/ExercisesSettings';
import CollaborationSettings from './WindowPages/TopLevelWindows/CollaborationSettings';
import ProgressSettings from './WindowPages/TopLevelWindows/ProgressSettings';
import ResourcesSettings from './WindowPages/TopLevelWindows/ResourcesSettings';

type Props = {};

const SettingsWindow = (props: Props) => {
	const CurrentWindow = useSelector(SettingsWindowState);
	const [Display, setDisplay] = useState(<ProfileData />);

	useEffect(() => {
		if (CurrentWindow.Window == 'ProfileData') {
			setDisplay(<ProfileData />);
		} else if (CurrentWindow.Window == 'AccountDetails') {
			setDisplay(<AccountDetails />);
		} else if (CurrentWindow.Window == 'Payments') {
			setDisplay(<Payments />);
		} else if (CurrentWindow.Window == 'CreationSettings') {
			setDisplay(<AnimeSettings />);
		} else if (CurrentWindow.Window == 'IdeasSettings') {
			setDisplay(<IdeasSettings />);
		} else if (CurrentWindow.Window == 'ExercisesSettings') {
			setDisplay(<ExercisesSettings />);
		} else if (CurrentWindow.Window == 'CollaborationSettings') {
			setDisplay(<CollaborationSettings />);
		} else if (CurrentWindow.Window == 'ProgressSettings') {
			setDisplay(<ProgressSettings />);
		} else if (CurrentWindow.Window == 'ResourcesSettings') {
			setDisplay(<ResourcesSettings />);
		}
	}, [CurrentWindow]);

	return (
		<div className="SettingsWindow">
			<UserDisplay />
			{Display}
		</div>
	);
};

export default SettingsWindow;
