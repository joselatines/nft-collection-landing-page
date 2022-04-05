import { HomePage } from './pages/Home';
import { OverviewPage } from './pages/overview/Family';
import { Navigation } from './shared/Navigation';
import { Footer } from './shared/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
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

export default App;
