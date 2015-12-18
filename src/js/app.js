/**
 * Templates
 */
var fs = require('fs');
var path = require('path');
var directors = fs.readFileSync(__dirname + '/../templates/directors.html', 'utf8');
var directorDetail = fs.readFileSync(__dirname + '/../templates/directorDetail.html', 'utf8');

/**
 * Directors application
 */
global.App = angular.module('directors', [
  'ngMaterial',
  'ngRoute'
]).config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    controller: 'DirectorsCtrl',
    template: directors
  })
  .when('/directors', {
    controller: 'DirectorsCtrl',
    template: directors
  })
  .when('/directors/:director', {
    controller: 'DirectorDetail',
    template: directorDetail
  });
});
require('./directives/mdTable');
require('./controllers/DirectorsCtrl');
require('./controllers/DirectorDetailCtrl');
