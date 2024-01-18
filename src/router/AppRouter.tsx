import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AccountsPage from '../pages/AccountsPage';
import ProfilePage from '../pages/ProfilesPage';
import CampaignsPage from '../pages/CampaignsPage';


const AppRouter: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					Component={AccountsPage}
				/>
				<Route
					path='/profiles/:accountId'
					Component={ProfilePage}
				/>
				<Route
					path='/campaigns/:campaignId'
					Component={CampaignsPage}
				/>
			</Routes>
		</Router>
	);
};

export default AppRouter;
