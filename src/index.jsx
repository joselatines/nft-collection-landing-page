import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './shared/GlobalStyles';
import { Loader } from './shared/Loader';
/* import { App } from './App'; */
const App = lazy(() => import('./App'));

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<Loader />}>
			<App />
		</Suspense>
		<GlobalStyles />
	</React.StrictMode>,
	document.getElementById('root')
);
