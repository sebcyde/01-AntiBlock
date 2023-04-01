import { useState, CSSProperties } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const override: CSSProperties = {
	display: 'block',
	margin: '0 auto',
	borderColor: 'red',
};

function Spinner() {
	return (
		<FadeLoader
			color={'#14213d'}
			height={20}
			width={5}
			aria-label="Loading Spinner"
			data-testid="loader"
		/>
	);
}

export default Spinner;
