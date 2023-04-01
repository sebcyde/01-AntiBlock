import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ParentContainer from './Pages/ParentContainer';
import Dashboard from './Pages/Dashboard';

import ReactDOM from 'react-dom/client';
import './Styles/Global.scss';
import React from 'react';
import Create from './Pages/Create';

import Settings from './Pages/Settings/Settings';
import Ideas from './Pages/Ideas';
import { Provider } from 'react-redux';

import { store } from '../Store/Store';
import SignIn from './Pages/Auth/Signin';
import SignUp from './Pages/Auth/Signup';

const router = createBrowserRouter([
	{
		path: '/signin',
		element: <SignIn />,
	},
	{
		path: '/signup',
		element: <SignUp />,
	},
	{
		path: '/',
		element: <ParentContainer />,
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/ideas',
				element: <Ideas />,
			},
			{
				path: '/create',
				element: <Create />,
			},
			{
				path: '/settings',
				element: <Settings />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
