// application code goes here
var myApp = angular.module('myApp', [
    'ngRoute',
    'MyControllers'
]);

myApp.config(['$routeProvider', function($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/home');
    $stateProvider

    //state1 block starts
        .state('home', {
            url: '/home',
            views: {
                'header': {
                    templateUrl: 'home-header.html',
                    controller: headerCtrl
                },

                'home-content': {
                    templateUrl: 'home-content.html',
                    controller: contentCtrl
                },

                'footer': {
                    templateUrl: 'home-footer.html',
                    controller: footerCtrl
                },
            }
        })
        //state1 ends

    // insert states in this section





}]);
