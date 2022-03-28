import { HomePage } from './pages/Home/HomePage';
import { OverviewPage } from './pages/Overview/OverviewPage';
import { Navigation } from './shared/Navigation';
import { Footer } from './shared/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/overview' element={<OverviewPage />} />
				<Route path='' element={<div>Not found</div>} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};
