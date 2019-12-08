import React from 'react';
import HeaderComponent from '../components/Header';
import * as api from '../api';
import { logout, getRole } from '../services/auth';
import { handleChange } from '../services/handlers';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: [],
			search: ''
		};

		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		api.getCategories().then((response) => this.setState({ categories: response.data }));
	}

	handleSearchSubmit(e) {
		e.preventDefault();
		const searchText = this.state.search.trim();
		if (searchText) this.props.history.push(`/search?name=${searchText}`);
	}

	handleChange(e) {
		handleChange(e, this);
	}

	render() {
		return (
			<HeaderComponent
				handleSearchSubmit={this.handleSearchSubmit}
				handleChange={this.handleChange}
				categories={this.state.categories}
				role={getRole()}
				logout={logout}
			/>
		);
	}
}

export default withRouter(Header);
