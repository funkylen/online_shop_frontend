import React from 'react';
import Category from '../components/Category';
import * as api from '../api';
import Loading from '../components/UI/Loading';

class CategoryPage extends React.Component {
	state = {
		category: null
	};

	getCategory(id) {
		api
			.getCategory(id)
			.then((response) => this.setState({ category: response.data }))
			.catch((err) => this.setState({ category: null }));
	}

	componentDidMount() {
		this.getCategory(this.props.id);
	}

	componentWillReceiveProps(nextProps) {
		this.getCategory(nextProps.id);
	}

	render() {
		return this.state.category === null ? (
			<Loading />
		) : (
			<Category
				name={this.state.category.name}
				products={this.state.category.products}
			/>
		);
	}
}

export default CategoryPage;
