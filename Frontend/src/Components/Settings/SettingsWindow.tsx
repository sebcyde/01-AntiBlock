import { SettingsWindowState } from '../../../Store/Slices/SettingsWindowSlice';
import { useSelector } from 'react-redux';
import UserDisplay from './UserDisplay';
import React, { useEffect, useState } from 'react';
import ProfileData from './WindowPages/TopLevelWindows/ProfileData';
import Payments from './WindowPages/TopLevelWindows/Payments';
import AnimeSettings from './WindowPages/TopLevelWindows/AnimeSettings';
import StockSettings from './WindowPages/TopLevelWindows/StockSettings';
import GeneralSettings from './WindowPages/TopLevelWindows/GeneralSettings';
import AccountDetails from './WindowPages/TopLevelWindows/AccountDetails';

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
		} else if (CurrentWindow.Window == 'AnimeSettings') {
			setDisplay(<AnimeSettings />);
		} else if (CurrentWindow.Window == 'StocksSettings') {
			setDisplay(<StockSettings />);
		} else if (CurrentWindow.Window == 'GeneralSettings') {
			setDisplay(<GeneralSettings />);
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
