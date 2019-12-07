import React from 'react';
import HeaderComponent from '../components/Header';
import * as api from '../api';
import { logout, loggedIn } from '../services/auth';

class Header extends React.Component {
	state = {
		categories: []
	};

	componentDidMount() {
		api.getCategories().then((response) => this.setState({ categories: response.data }));
	}

	render() {
		return (
			<HeaderComponent
				categories={this.state.categories}
				loggedIn={loggedIn}
				logout={logout}
			/>
		);
	}
}

export default Header;
