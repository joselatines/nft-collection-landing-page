import { HomePage } from './pages/Home';
import { Overview } from './pages/overview/OverviewPage';
import { Navigation } from './shared/Navigation';
import { Footer } from './shared/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/overview' element={<Overview />} />
				<Route path='*' element={<div>Not found</div>} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
