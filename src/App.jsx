import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import BoxContainer from './containers/box-container';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<Router>
					<Header />
					<Main />
					<Footer />
					{/* <BoxContainer /> */}
				</Router>
			</Fragment>
		);
	}
}

export default App;
