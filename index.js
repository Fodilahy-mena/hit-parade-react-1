import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { ContextProvider } from './components/Context';
import {Provider} from 'react-redux';
import App from './src/components/App';
import store from './src/store'

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App></App>
		</Router>
	</Provider>,
	document.getElementById('root')
);
