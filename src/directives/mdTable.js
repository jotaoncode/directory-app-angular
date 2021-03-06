var fs = require('fs');
var template = fs.readFileSync(__dirname + '/table.html', 'utf8');

var TableDirective = function () {
  return {
    controller: function ($location) {
      this.goToDetail = function ($directorId, details) {
        $location.url(details + '/' + $directorId);
      };
    },
    restrict: 'E',
    controllerAs: 'tableCtrl',
    template: template,
    scope: {
      headers: "=",
      content: "=",
      details: "@"
    }
  };
};

module.exports = TableDirective;
