import React, { Fragment } from 'react';

import BoxContainer from './containers/box-container';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Main />
				<Footer />
				{/* <BoxContainer /> */}
			</Fragment>
		);
	}
}

export default App;
