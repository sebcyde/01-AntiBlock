import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ParentContainer from './Pages/ParentContainer';
import Dashboard from './Pages/Dashboard';
import Ideas from './Pages/Ideas';
import Settings from './Pages/Settings';
import ReactDOM from 'react-dom/client';
import './Styles/Global.scss';
import React from 'react';
import Create from './Pages/Create';

const router = createBrowserRouter([
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
		<RouterProvider router={router} />
	</React.StrictMode>
);
