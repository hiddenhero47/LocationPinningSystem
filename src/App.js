import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
// import './index.css';
import IndexLayout from './layout/index-layout/index';
import AuthLayout from './layout/auth-layout/index';
import UserLayout from './layout/user-layout/index';
import AppToast from './layout/toast';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import Dashboard from './pages/dashboard';
import Auth from './pages/auth';
import Settings from './pages/settings';
import Users from './pages/users';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<div className="containerBody">
					<Routes>
						<Route element={<UserLayout />}>
							<Route path="/" element={<Home />} />
							<Route path="/about-us" element={<AboutUs />} />
						</Route>
						<Route element={<AuthLayout />}>
							<Route path="/auth" element={<Auth />} />
						</Route>
						<Route element={<IndexLayout />}>
							<Route path="/dashboard" element={<Dashboard />} />
							<Route path="/dashboard/settings" element={<Settings />} />
							<Route path="/dashboard/users" element={<Users />} />
						</Route>
						{/* <Route path="*" element={<NotFound />} /> */}
					</Routes>
				</div>
			</Router>
			<AppToast />
		</QueryClientProvider>
	);
}

export default App;
