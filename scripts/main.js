'use strict';
var React = require('react');
var Backbone = require('backbone');
var $ = require ('jquery');
window.$ = require('jquery');
window.jQuery = $;

var NavigationComponent = require('./components/NavigationComponent');
var HomeComponent = require('./components/HomeComponent');
var AddProductComponent = require('./components/AddProductComponent');
var LoginComponent = require('./components/LoginComponent');
var BooksComponent = require('./components/BooksComponent');
var ElectronicsComponent = require('./components/ElectronicsComponent');
var ClothingComponent = require('./components/ClothingComponent');
var RegisterComponent = require('./components/RegisterComponent');

Parse.initialize('8juuw6AnGoKX0T3970bmAfqbzKFNPU5YZq1WkQXB', 'fTnW6A0S1zQNe6S5VG5A8bm5kwXYDgLVG4ch1qPO');

var app = document.getElementById('app');


var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'add': 'add',
		'category/books': 'books',
		'category/electronics': 'electronics',
		'category/clothing': 'clothing',
		'login': 'login',
		'register': 'register'
	},
	home: function() {
		React.render(<HomeComponent />, app);
	},
	add: function() {
		React.render(<AddProductComponent router={r}/>, app);
	},
	books: function() {
		React.render(<BooksComponent />, app);
	},
	electronics: function() {
		React.render(<ElectronicsComponent />, app);
	},
	clothing: function() {
		React.render(<ClothingComponent />, app);
	},
	login: function() {
		React.render(<LoginComponent router={r} />, app);
	},
	register: function() {
		React.render(<RegisterComponent router={r} />, app);
	}
});

var r = new Router();
Backbone.history.start();

React.render(
	<NavigationComponent router={r} />,
	document.getElementById('nav')
);


