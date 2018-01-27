'use strict';

/**
 * @ngdoc overview
 * @name onlineReciprocityApp
 * @description
 * # onlineReciprocityApp
 *
 * Main module of the application.
 */
angular
    .module('onlineReciprocityApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.router'
    ])
    .config(function ($qProvider) {
        $qProvider.errorOnUnhandledRejections(false);
    })
    .config(function ($stateProvider,$urlRouterProvider) {
        var header = {templateUrl: 'views/templates/header.html'};
        var footer = {templateUrl: 'views/templates/footer.html'};
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('master', {
                abstract: true,
                views: {
                    'header': header,
                    'footer': footer
                }
            })
            .state('login', {
                url: '/',
                parent: 'master',
                views: {
                    '@': {
                        templateUrl: 'views/login.html',
                        controller: 'LoginCtrl'
                    }
                }
            })
    });




