var React = require('react');


module.exports = React.createClass({
	getInitialState: function() {
	    return {
	         products: <button onClick={this.buy} id="buyNow" className="buy">Buy</button> 
	    };
	},
	render: function() {
		return (
			this.state.products
		);
	},
	buy: function(){
		this.setState({
			products: <button onClick={this.buy} id="buyNow" className="buy">Sold Out</button> 
		})
	}
});