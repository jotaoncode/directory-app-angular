var fs = require('fs');
var template = fs.readFileSync(__dirname + '/../../templates/table.html', 'utf8');

var TableDirective = function () {
  return {
    controller: function ($scope, $location) {
      $scope.directorsDetail = function ($directorId) {
        $location.url('/directors/' + $directorId);
      };
    },
    template: template
  };
};

module.exports = TableDirective;
