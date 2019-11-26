(function(){
    var app = angular.module('app', [
        'ngAnimate',
        'ngTouch',
        'ui.router'
    ]);

    app.config(function($stateProvider, $urlRouterProvider){
        var homeState = {
            name: 'home',
            url: '/home',
            templateUrl: 'views/home/home.html'
        };

        $stateProvider.state(homeState);

        $urlRouterProvider.otherwise('/home');
    });    
})();