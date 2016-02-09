var director = require('./director.json');

function DirectorDetail($scope) {
  $scope.director = _.clone(director);
  $scope.director.dob = moment(director.dob).format('L');
}
App.controller('DirectorDetail', ['$scope', DirectorDetail]);
