(function() {

	var app = angular.module('store-products', []);

	app.directive('productTitle', function() {
		return{
			restrict: 'E', // e is for Element
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productPanels', function() {
		return{
			restrict: 'E', // e is for Element
			templateUrl: 'product-panels.html',
			controller: function() {
				this.tab = 1;
				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				this.isSelected = function(checkTab){
					return checkTab === this.tab;
				};
			},
			controllerAs: 'panel'
		};
	});
})();