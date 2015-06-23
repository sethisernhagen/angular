(function() {

	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	//requiring a web service
	// app.controller('StoreController', ['$http', function($http){
	// 	var store = this;
	// 	store.products = [];

	// 	$http.get('/products.json').sucess(function(data){
	// 		store.products = data;
	// 	});
	// }]);

	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review={};
		};
	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2,
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gemss',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full:'img/1.png',
					thumb: 'dodecahedron-01-thumb.png'
				},
				{
					full:'dodecahedron-02-full.jpg',
					thumb: 'dodecahedron-02-thumb.jpg'

				}
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "Not that great",
					author: "wayne@thomas.com"
				},
			]
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'Penta, beyond their shine... Dodeca is one of those gemss',
			canPurchase: false,
			soldOut: false,
			images: [
				{
					full:'img/2.jpg',
					thumb: 'dodecahedron-01-thumb.jpg'
				},
				{
					full:'dodecahedron-02-full.jpg',
					thumb: 'dodecahedron-02-thumb.jpg'

				}
			],
			reviews: [
				{
					stars: 5,
					body: "I love this product",
					author: "joe@thomas.com"
				},
				{
					stars: 1,
					body: "Not that great",
					author: "wayne@thomas.com"
				},
			]
		},

	];

})();
