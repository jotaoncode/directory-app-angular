var directors = require('./directors.json');
var tableDirective = require('../directives/mdTable');

function DirectorsCtrl ($scope, $location) {
  //Flex sizes for the flex table, sum should be 100
  var flexSizes = [30, 5, 10, 10, 10, 10, 15];
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
  //Director list
  $scope.directorList = _.map(directors, function (director) {
    if (_.isNumber(director.dob)) {
      director.dob = moment(director.dob).format('l');
    }
    return director;
  });

}

App.controller('DirectorsCtrl', ['$scope', '$location', DirectorsCtrl]).directive('directorTable', tableDirective);

module.exports = DirectorsCtrl;
