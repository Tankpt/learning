/**
 * Created by hzwangtianyi on 2014/10/29.
 */
var phonecatApp = angular.module('MyApp', ['ngRoute']).config(function ($routeProvider) {
    'use strict';

    $routeProvider.when('/', {
        controller: 'todoCtrl',
        templateUrl: 'todoTmp'
    }).when('/:status', {
        controller: 'todoCtrl',
        templateUrl: 'todoTmp'
    }).otherwise({
        redirectTo: '/'
    });
});