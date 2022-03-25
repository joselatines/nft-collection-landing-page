import { Home } from './pages/Home/Home';
import { Navigation } from './shared/Navigation/Navigation';
import { Footer } from './shared/Footer/Footer';

export const App = () => {
	return (
		<div>
			<Navigation />
			<Home />
			<Footer />
		</div>
	);
};
