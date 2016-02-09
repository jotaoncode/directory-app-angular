var directors = require('./directors.json');
var tableDirective = require('../directives/mdTable');

function DirectorsCtrl ($scope, $location) {
  //Headers of table
  $scope.headers =  [{
    name: "Name",
    field: 'name'
  }, {
    name: "Sex",
    field: 'sex'
  }, {
    name: "Nationality",
    field: 'nationality'
  }, {
    name: "City",
    field: 'city'
  }, {
    name: "dob",
    field: 'dob'
  }, {
    name: "age",
    field: 'age'
  }, {
    name: "blockbuster",
    field: 'blockbuster'
  }];
  $scope.content = directors;
}

App.controller('DirectorsCtrl', ['$scope', '$location', DirectorsCtrl]).directive('directorTable', tableDirective);

module.exports = DirectorsCtrl;
