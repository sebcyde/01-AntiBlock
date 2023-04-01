import React from 'react';
import Menu from '../../Components/Settings/Menu';
import SettingsWindow from '../../Components/Settings/SettingsWindow';

type Props = {};

const Settings = (props: Props) => {
	return (
		<div className="SettingsPage">
			<Menu />
			<SettingsWindow />
		</div>
	);
};

export default Settings;
