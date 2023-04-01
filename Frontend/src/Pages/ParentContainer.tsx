import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import React from 'react';

type Props = {};

const ParentContainer = (props: Props) => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default ParentContainer;
