import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/animated.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/elegant-icons/style.css';
import '../node_modules/et-line/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './assets/style.scss';
import './assets/style_grey.scss';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import { MoralisProvider } from "react-moralis";
import {BrowserRouter as Router} from "react-router-dom";

//redux store
import { Provider } from 'react-redux'
import store from './store';

ReactDOM.render(
	<Router>
		<MoralisProvider appId="5v36LWYvPqx8wHgptLa3raAtu5H7jEhOn2pT2KDM" serverUrl="https://qwcbsktek0sc.usemoralis.com:2053/server">
			<Provider store={store}>
				<App />
			</Provider>
		</MoralisProvider>
	</Router>,
	document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();