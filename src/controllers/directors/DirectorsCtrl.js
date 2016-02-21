var directors = require('./directors.json');
var tableDirective = require('../../directives/mdTable');

function DirectorsCtrl ($scope, $location) {
  //Headers of table
  $scope.headers =  [{
    name: "Id",
    field: 'id'
  }, {
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
  }, {
    name: "options",
    field: "options"
  }];
  _.each(directors, function (director) {
    director.options = {
      isOptions: true,
      isButton: true,
      click: function (directorClicked) {
        directors = _.without(directors, _.findWhere(directors, {id: directorClicked.id}));
        $scope.content = directors;
      }
    };
  });
  $scope.content = directors;
}

App.controller('DirectorsCtrl', ['$scope', '$location', DirectorsCtrl]).directive('directorTable', tableDirective);

module.exports = DirectorsCtrl;
