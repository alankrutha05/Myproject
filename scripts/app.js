var test= angular.module('myapp', ['ngroute']);
         
        test.config(function($routeProvider) {
        $routeProvider
            // route for the contactus page
            .when('/home', {
                templateUrl : 'home.html',
                controller  : 'BlogController'
            })
            // route for the menu page
            .when('/myblog', {
                templateUrl : 'myblog.html',
                controller  : 'BlogController'
            })
            // route for the dish details page
            
            .otherwise('/home');
    });