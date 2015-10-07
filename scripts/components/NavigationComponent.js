var React = require('react');
var Backbone = require('backbone');

module.exports = React.createClass({
	componentWillMount: function() {
		this.props.router.on('route', () => {
			this.forceUpdate();
		});
	},
	render: function() {
		var currentPage = Backbone.history.getFragment();
		console.log(currentPage === 'category/books');

		var links = [
			<li key="home" className={currentPage === '' ? 'active' : ''}><a href="#"><img className="Img" src="https://lh4.ggpht.com/o9dJVjLhcIeZ7SiKrNP3iVUysynDtp7G27iPvQPus4fMoxS5M1dycsq2CJR0yeq5pNA=w300" /></a></li>,
			<li key="books" className={currentPage === 'category/books' ? 'active' : ''}><a href="#category/books"><img className="Img" src="http://www.bradleysbookoutlet.com/wp-content/uploads/2013/06/bradleys-book-outlet-books-only-logo.png" /></a></li>,
			<li key="electronics" className={currentPage === 'category/electronics' ? 'active' : ''}><a href="#category/electronics"><img className="Img" src="http://cliparts.co/cliparts/Big/KM5/BigKM57bT.png" /></a></li>,
			<li key="clothing" className={currentPage === 'category/clothing' ? 'active' : ''}><a href="#category/clothing"><img className="Img" src="http://cliparts.co/cliparts/pco/Ago/pcoAgoari.png" /></a></li>
		];

		if(Parse.User.current()) {
			links.push(<li key="add" className={currentPage === 'add' 	? 'active' : ''}><a href="#add">Add Product</a></li>)
			links.push(<li key="logout"><a href="#logout" onClick={this.onLogout}>Logout</a></li>)
		}
		else {
			links.push(<li key="login" className={currentPage === 'login' 		? 'active' : ''}><a href="#login">Login</a></li>);
			links.push(<li key="register" className={currentPage === 'register' 	? 'active' : ''}><a href="#register">Register</a></li>);
		}


		return (
			<div className="nav-wrapper">
				<img className="logo left" src="https://cdn2.scratch.mit.edu/get_image/user/4501985_60x60.png?v=1418482288.0"/>
				<a href="#" className="brand-logo left" id="fox">Product Fox</a>
				<ul className="right">
					{links}
				</ul>
			</div>
		);
	},
	onLogout: function(e) {
		e.preventDefault();
		Parse.User.logOut();
		this.props.router.navigate('', {trigger: true});
	}
})