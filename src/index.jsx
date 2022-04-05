import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyles } from './shared/GlobalStyles';
/* import { App } from './App'; */
const App = lazy(() => import('./App'));

ReactDOM.render(
	<React.StrictMode>
		<Suspense fallback={<h1 style={{ color: 'red' }}>Cargando...</h1>}>
			<App />
		</Suspense>
		<GlobalStyles />
	</React.StrictMode>,
	document.getElementById('root')
);
