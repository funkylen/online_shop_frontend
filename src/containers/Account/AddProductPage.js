import React from 'react';
import * as api from '../../api';
import { handleChange } from '../../services/handlers';
import AccountPage from './AccountPage';
import AddProduct from '../../components/Account/AddProduct';

class AddProductPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: [],
			name: '',
			price: '',
			categoryId: '',
			description: '',
			image: null,
			imageInput: 'url',
			errors: {},
			success: false,
			successName: null,
			successId: null
		};

		this.fd = new FormData();

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);
		this.handleChangeImageInput = this.handleChangeImageInput.bind(this);
	}

	componentDidMount() {
		api.getCategories().then((response) => {
			const categories = [];
			response.data.forEach((element) => {
				categories.push(
					<option key={`category_id-${element.id}`} value={element.id}>
						{element.name}
					</option>
				);
			});

			this.setState({ categories: categories, categoryId: response.data[0].id });
		});
	}

	handleChangeImageInput(e) {
		this.setState({
			imageInput: e.target.value,
			image: null
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({ success: false });
		const { name, price, categoryId, description, imageInput, image } = this.state;

		api
			.createProduct(name, price, categoryId, description, imageInput, image)
			.then((response) => {
				document.getElementById('add_product_form').reset();
				this.setState({ successId: response.data.id, successName: response.data.name, success: true });
			})
			.catch((error) => {
				this.setState({ errors: error.response.data.errors });
			});
	}

	handleImageChange(e) {
		this.setState({ image: e.target.files[0] });
	}

	handleChange(e) {
		handleChange(e, this);
	}

	render() {
		return (
			<AccountPage>
				<AddProduct
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
					handleImageChange={this.handleImageChange}
					handleChangeImageInput={this.handleChangeImageInput}
					success={this.state.success}
					successName={this.state.successName}
					successId={this.state.successId}
					errors={this.state.errors}
					name={this.state.name}
					categories={this.state.categories}
					imageInput={this.state.imageInput}
				/>
			</AccountPage>
		);
	}
}

export default AddProductPage;