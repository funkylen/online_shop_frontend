import React from 'react';
import HeaderComponent from '../components/Header';
import * as api from '../api';

class Header extends React.Component {
	state = {
		categories: []
	};

	componentDidMount() {
		api.getCategories().then((response) => this.setState({ categories: response.data }));
	}

	render() {
		return <HeaderComponent categories={this.state.categories} loggedIn={localStorage.getItem('token') !== null} />;
	}
}

export default Header;
