var React = require('react');
var ProductModel = require('../models/ProductModel');
var BuyComponent = require('./BuyComponent');
var query = new Parse.Query(ProductModel);

module.exports = React.createClass({
	getInitialState: function() {
	    return {
	         products: []
	    };
	},
	componentWillMount: function() {
		query
		.equalTo('category', 'books')
		.find().then(
			(products) => {
				this.setState({products: products});
			},
			(err) => {
				console.log(err);
			}
		);
	},
	render: function() {
		var that=this;
		var productElements = this.state.products.map(function(product) {
			return (
				<div className="Eproduct">
				<div><img src={product.get('picUrl')} /></div>
					<div><strong>{product.get('productName')}</strong></div>
					<div>{product.get('description')}</div>
					<div>Only ${product.get('price')} if you buy now <BuyComponent /></div>
					
				</div>
				);
		});
		return (
			<div className="container">
				<div className="row">
					<h1 className="titlePage">Books</h1>
				</div>
				<div className="input-field col s6 sorts">
					<select className="browser-default" ref="sort" onChange={this.sort} >
						<option value="" disabled selected>Sort</option>
						<option value="low">Price: Low to High</option>
						<option value="high">Price: High to Low</option>
						<option value="newest">Newest First</option>
						<option value="oldest">Oldest First</option>
					</select>
				</div>
				{productElements}
			</div>
		);
	},
	sort: function() {
		if (this.refs.sort.getDOMNode().value == 'low'){
			query
			.ascending('price')
			.find().then(
				(products) => {
					this.setState({products: products});
				},
				(err) => {
					console.log(err);
				}
			);
		}else if (this.refs.sort.getDOMNode().value == 'high'){
			query
			.descending('price')
			.find().then(
				(products) => {
					this.setState({products: products});
				},
				(err) => {
					console.log(err);
				}
			);
		}else if (this.refs.sort.getDOMNode().value == 'newest'){
			query
			.descending('createdAt')
			.find().then(
				(products) => {
					this.setState({products: products});
				},
				(err) => {
					console.log(err);
				}
			);
		}else if (this.refs.sort.getDOMNode().value == 'oldest'){
			query
			.ascending('createdAt')
			.find().then(
				(products) => {
					this.setState({products: products});
				},
				(err) => {
					console.log(err);
				}
			);
		}
		
	}
});
