import React from 'react';
import * as api from '../../api';
import { handleChange } from '../../services/handlers';
import AccountPage from './AccountPage';
import AddCategory from '../../components/Account/AddCategory';

class AddCategoryPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			errors: {},
			success: false,
			successName: null
		};
	}

	handleSubmit = (e) =>  {
		e.preventDefault();
		this.setState({ success: false });
		api
			.createCategory(this.state.name)
			.then((response) => this.setState({ successName: response.data.name, success: true }))
			.catch((error) => this.setState({ errors: error.response.data.errors }));
	}

	handleChange = (e) => {
		handleChange(e, this);
	}

	render() {
		return (
			<AccountPage>
				<AddCategory
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					success={this.state.success}
					errors={this.state.errors}
					successName={this.state.successName}
				/>
			</AccountPage>
		);
	}
}

export default AddCategoryPage;