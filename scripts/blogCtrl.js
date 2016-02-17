
'use strict';    
/*angular.module('myapp', []);*/

var test= angular.module('myapp', ['ngRoute']);
         
        test.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/home', {
                templateUrl : 'home.html',
                controller  : 'BlogController'
            })
            // route for the myblog page
            .when('/myblog', {
                templateUrl : 'myblog.html',
                controller  : 'BlogController'
            })
            // route for the dish details page
            
            .otherwise('/home');
    });
         
        