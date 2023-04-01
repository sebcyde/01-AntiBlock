import React from 'react';
import Spinner from '../../Components/All/Spinner';

type Props = {};

const LoadingScreen = (props: Props) => {
	return (
		<div className="LoadingPage">
			<Spinner />
		</div>
	);
};

export default LoadingScreen;
