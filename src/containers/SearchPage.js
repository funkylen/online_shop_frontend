import React from 'react';
import * as api from '../api';
import Home from '../components/Home';
import Loading from '../components/UI/Loading';
import Empty from '../components/UI/Empty';

class SearchPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchText: '',
			products: null,
			lastPage: null,
			currentPage: null
		};
	}

	getProducts(search) {
		const searchText = new URLSearchParams(search).get('name');

		api.searchProducts(searchText).then((response) =>
			this.setState({
				searchText: searchText,
				products: response.data.data,
				lastPage: response.data.last_page,
				currentPage: response.data.current_page
			})
		);
	}

	getMoreProducts = () => {
		api.searchProducts(this.state.searchText, this.state.currentPage + 1).then((response) => {
			const newProducts = response.data.data;
			const products = this.state.products.concat(newProducts);

			this.setState({
				products: products,
				lastPage: response.data.last_page,
				currentPage: response.data.current_page
			});
		});
	}

	componentDidMount() {
		const search = this.props.search ? this.props.search : window.location.search;
		this.getProducts(search);
	}

	componentWillReceiveProps(nextProps) {
		this.getProducts(nextProps.search);
	}

	render() {
		if (this.state.products === null) return <Loading />;

		const headerText = `Результаты поиска по запросу "${this.state.searchText}"`;

		if (this.state.products.length === 0)
			return (
				<main className="container">
					<h3>{headerText}</h3>
					<Empty />
				</main>
			);

		return (
			<Home
				headerText={headerText}
				products={this.state.products}
				lastPage={this.state.lastPage === this.state.currentPage}
				getMoreProducts={this.getMoreProducts}
			/>
		);
	}
}

export default SearchPage;
