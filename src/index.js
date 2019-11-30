import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import BoxContainer from './containers/box-container';
import reducers from './reducers/index';

let store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
	render() {
		return <BoxContainer />;
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
