import React from 'react';
import Category from '../components/Category';
import * as api from '../api';
import Loading from '../components/UI/Loading';

class CategoryPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: null,
			categoryProducts: null,
			currentPage: null,
			lastPage: null,
		};

		this.getNextPageData = this.getNextPageData.bind(this);
		this.getPreviousPageData = this.getPreviousPageData.bind(this);
	}

	getCategory(id, page) {
		api
			.getCategory(id, page)
			.then((response) => this.setState({ 
				name: response.data.name,
				categoryProducts: response.data.products,
				currentPage: response.data.products.current_page,
				lastPage: response.data.products.last_page,
			}))
			.catch((err) => this.setState({ categoryProducts: null }));
	}

	getPreviousPageData() {
		if (this.state.currentPage === 1) return;		
		this.getCategory(this.props.id, this.state.currentPage - 1)
	}

	getNextPageData() {
		if (this.state.currentPage === this.state.lastPage) return;
		this.getCategory(this.props.id, this.state.currentPage + 1);
	}

	componentDidMount() {
		this.getCategory(this.props.id, 1);
	}

	componentWillReceiveProps(nextProps) {
		this.getCategory(nextProps.id, 1);
	}

	render() {
		return this.state.categoryProducts === null ? (
			<Loading />
		) : (
			<Category
				name={this.state.name}
				products={this.state.categoryProducts}
				firstPage={this.state.currentPage === 1}
				lastPage={this.state.lastPage === this.state.currentPage}
				getNextPageData={this.getNextPageData}
				getPreviousPageData={this.getPreviousPageData}
			/>
		);
	}
}

export default CategoryPage;
