(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/**
 * Templates
 */

var path = require('path');
var directors = "<h2>Director List</h2>\n<director-table headers=\"headers\" content=\"content\" details=\"/directors\"></director-table>\n";
var directorDetail = "<div layout=\"row\" class=\"director-detail\">\n  <div flex=\"33\">\n    <img src=\"{{director.image}}\" class=\"image-director\">\n  </div>\n  <div flex=\"66\" class=\"director-description\">\n    <h2>Director details</h2>\n    <p>{{director.bio}}</p>\n    <ul>\n      <li><span class=\"description\">Full Name: </span><span>{{director.fullName}}</span></li>\n      <li><span class=\"description\">Sex: </span><span>{{director.sex}}</span></li>\n      <li><span class=\"description\">Nationality: </span><span>{{director.nationality}}</span></li>\n      <li><span class=\"description\">State: </span><span>{{director.state}}</span></li>\n      <li><span class=\"description\">City: </span><span>{{director.city}}</span></li>\n      <li><span class=\"description\">Dob: </span><span>{{director.dob}}</span></li>\n      <li><span class=\"description\">Age: </span><span>{{director.age}}</span></li>\n      <li><span class=\"description\">Spouse: </span><span>{{director.spouse}}</span></li>\n    </ul>\n    <span>BlockBusters: </span>\n    <ul>\n      <li ng-repeat=\"blockbuster in director.blockbusters\">\n        <span>{{blockbuster.release}} - {{blockbuster.movieName}}</span>\n      </li>\n    </ul>\n    <div ng-repeat=\"blockbuster in blockbusters\">{{director.blockbuster.movieName}} {{director.blockbuster.release}}</div>\n    <span class=\"description\">Children</span>\n    <div ng-repeat=\"child in director.children\">{{child}}</div>\n  </div>\n</div>\n<div>\n  <a href=\"#/directors\">&lt Back Director List</a>\n</div>\n";

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
require('./controllers/directors/DirectorsCtrl');
require('./controllers/directors/details/DirectorDetailCtrl');

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUZW1wbGF0ZXNcbiAqL1xuXG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbnZhciBkaXJlY3RvcnMgPSBcIjxoMj5EaXJlY3RvciBMaXN0PC9oMj5cXG48ZGlyZWN0b3ItdGFibGUgaGVhZGVycz1cXFwiaGVhZGVyc1xcXCIgY29udGVudD1cXFwiY29udGVudFxcXCIgZGV0YWlscz1cXFwiL2RpcmVjdG9yc1xcXCI+PC9kaXJlY3Rvci10YWJsZT5cXG5cIjtcbnZhciBkaXJlY3RvckRldGFpbCA9IFwiPGRpdiBsYXlvdXQ9XFxcInJvd1xcXCIgY2xhc3M9XFxcImRpcmVjdG9yLWRldGFpbFxcXCI+XFxuICA8ZGl2IGZsZXg9XFxcIjMzXFxcIj5cXG4gICAgPGltZyBzcmM9XFxcInt7ZGlyZWN0b3IuaW1hZ2V9fVxcXCIgY2xhc3M9XFxcImltYWdlLWRpcmVjdG9yXFxcIj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBmbGV4PVxcXCI2NlxcXCIgY2xhc3M9XFxcImRpcmVjdG9yLWRlc2NyaXB0aW9uXFxcIj5cXG4gICAgPGgyPkRpcmVjdG9yIGRldGFpbHM8L2gyPlxcbiAgICA8cD57e2RpcmVjdG9yLmJpb319PC9wPlxcbiAgICA8dWw+XFxuICAgICAgPGxpPjxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+RnVsbCBOYW1lOiA8L3NwYW4+PHNwYW4+e3tkaXJlY3Rvci5mdWxsTmFtZX19PC9zcGFuPjwvbGk+XFxuICAgICAgPGxpPjxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+U2V4OiA8L3NwYW4+PHNwYW4+e3tkaXJlY3Rvci5zZXh9fTwvc3Bhbj48L2xpPlxcbiAgICAgIDxsaT48c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPk5hdGlvbmFsaXR5OiA8L3NwYW4+PHNwYW4+e3tkaXJlY3Rvci5uYXRpb25hbGl0eX19PC9zcGFuPjwvbGk+XFxuICAgICAgPGxpPjxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+U3RhdGU6IDwvc3Bhbj48c3Bhbj57e2RpcmVjdG9yLnN0YXRlfX08L3NwYW4+PC9saT5cXG4gICAgICA8bGk+PHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5DaXR5OiA8L3NwYW4+PHNwYW4+e3tkaXJlY3Rvci5jaXR5fX08L3NwYW4+PC9saT5cXG4gICAgICA8bGk+PHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5Eb2I6IDwvc3Bhbj48c3Bhbj57e2RpcmVjdG9yLmRvYn19PC9zcGFuPjwvbGk+XFxuICAgICAgPGxpPjxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+QWdlOiA8L3NwYW4+PHNwYW4+e3tkaXJlY3Rvci5hZ2V9fTwvc3Bhbj48L2xpPlxcbiAgICAgIDxsaT48c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlNwb3VzZTogPC9zcGFuPjxzcGFuPnt7ZGlyZWN0b3Iuc3BvdXNlfX08L3NwYW4+PC9saT5cXG4gICAgPC91bD5cXG4gICAgPHNwYW4+QmxvY2tCdXN0ZXJzOiA8L3NwYW4+XFxuICAgIDx1bD5cXG4gICAgICA8bGkgbmctcmVwZWF0PVxcXCJibG9ja2J1c3RlciBpbiBkaXJlY3Rvci5ibG9ja2J1c3RlcnNcXFwiPlxcbiAgICAgICAgPHNwYW4+e3tibG9ja2J1c3Rlci5yZWxlYXNlfX0gLSB7e2Jsb2NrYnVzdGVyLm1vdmllTmFtZX19PC9zcGFuPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICAgIDxkaXYgbmctcmVwZWF0PVxcXCJibG9ja2J1c3RlciBpbiBibG9ja2J1c3RlcnNcXFwiPnt7ZGlyZWN0b3IuYmxvY2tidXN0ZXIubW92aWVOYW1lfX0ge3tkaXJlY3Rvci5ibG9ja2J1c3Rlci5yZWxlYXNlfX08L2Rpdj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5DaGlsZHJlbjwvc3Bhbj5cXG4gICAgPGRpdiBuZy1yZXBlYXQ9XFxcImNoaWxkIGluIGRpcmVjdG9yLmNoaWxkcmVuXFxcIj57e2NoaWxkfX08L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcbjxkaXY+XFxuICA8YSBocmVmPVxcXCIjL2RpcmVjdG9yc1xcXCI+Jmx0IEJhY2sgRGlyZWN0b3IgTGlzdDwvYT5cXG48L2Rpdj5cXG5cIjtcblxuLyoqXG4gKiBEaXJlY3RvcnMgYXBwbGljYXRpb25cbiAqL1xuZ2xvYmFsLkFwcCA9IGFuZ3VsYXIubW9kdWxlKCdkaXJlY3RvcnMnLCBbXG4gICduZ01hdGVyaWFsJyxcbiAgJ25nUm91dGUnXG5dKS5jb25maWcoZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuICAkcm91dGVQcm92aWRlclxuICAud2hlbignLycsIHtcbiAgICBjb250cm9sbGVyOiAnRGlyZWN0b3JzQ3RybCcsXG4gICAgdGVtcGxhdGU6IGRpcmVjdG9yc1xuICB9KVxuICAud2hlbignL2RpcmVjdG9ycycsIHtcbiAgICBjb250cm9sbGVyOiAnRGlyZWN0b3JzQ3RybCcsXG4gICAgdGVtcGxhdGU6IGRpcmVjdG9yc1xuICB9KVxuICAud2hlbignL2RpcmVjdG9ycy86ZGlyZWN0b3InLCB7XG4gICAgY29udHJvbGxlcjogJ0RpcmVjdG9yRGV0YWlsJyxcbiAgICB0ZW1wbGF0ZTogZGlyZWN0b3JEZXRhaWxcbiAgfSk7XG59KTtcbnJlcXVpcmUoJy4vZGlyZWN0aXZlcy9tZFRhYmxlJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2RpcmVjdG9ycy9EaXJlY3RvcnNDdHJsJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2RpcmVjdG9ycy9kZXRhaWxzL0RpcmVjdG9yRGV0YWlsQ3RybCcpO1xuIl19
},{"./controllers/directors/DirectorsCtrl":4,"./controllers/directors/details/DirectorDetailCtrl":5,"./directives/mdTable":8,"path":2}],2:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cbi8vICdyb290JyBpcyBqdXN0IGEgc2xhc2gsIG9yIG5vdGhpbmcuXG52YXIgc3BsaXRQYXRoUmUgPVxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xudmFyIHNwbGl0UGF0aCA9IGZ1bmN0aW9uKGZpbGVuYW1lKSB7XG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcbn07XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIHJlc3VsdCA9IHNwbGl0UGF0aChwYXRoKSxcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXG4gICAgICBkaXIgPSByZXN1bHRbMV07XG5cbiAgaWYgKCFyb290ICYmICFkaXIpIHtcbiAgICAvLyBObyBkaXJuYW1lIHdoYXRzb2V2ZXJcbiAgICByZXR1cm4gJy4nO1xuICB9XG5cbiAgaWYgKGRpcikge1xuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXG4gICAgZGlyID0gZGlyLnN1YnN0cigwLCBkaXIubGVuZ3RoIC0gMSk7XG4gIH1cblxuICByZXR1cm4gcm9vdCArIGRpcjtcbn07XG5cblxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IHNwbGl0UGF0aChwYXRoKVsyXTtcbiAgLy8gVE9ETzogbWFrZSB0aGlzIGNvbXBhcmlzb24gY2FzZS1pbnNlbnNpdGl2ZSBvbiB3aW5kb3dzP1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBzcGxpdFBhdGgocGF0aClbM107XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iXX0=
},{"_process":3}],3:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(require,module,exports){
var directors = require('./directors.json');
var tableDirective = require('../../directives/mdTable');

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

},{"../../directives/mdTable":8,"./directors.json":7}],5:[function(require,module,exports){
var director = require('./director.json');

function DirectorDetail($scope) {
  $scope.director = _.clone(director);
  $scope.director.dob = moment(director.dob).format('L');
}
App.controller('DirectorDetail', ['$scope', DirectorDetail]);

},{"./director.json":6}],6:[function(require,module,exports){
module.exports=module.exports = {
  "fullName": "David Lynch",
  "image": "http://www.interviewmagazine.com/files/2012/01/08/img-david-lynch-01-_184117216071.jpg",
  "sex": "Male",
  "nationality": "United States",
  "state": "Montana",
  "city": "Missoula",
  "dob": -755699867,
  "age": 69,
  "blockbusters": [{
    "movieName": "Blue Velvet",
    "release": "1986"
  }, {
    "movieName": "Wild at Heart",
    "release": "1990"
  }, {
    "movieName": "Mulholland Drive",
    "release": "2001"
  }],
  "bio": "is an American director, screenwriter, visual artist, musician, actor, and author. Known for his surrealist films, he has developed a unique cinematic style. The surreal and, in many cases, violent elements contained within his films have been known to 'disturb, offend or mystify' audiences.",
  "spouse": "Emily Stofle",
  "children": ["Lisa", "Bart"]
}

},{}],7:[function(require,module,exports){
module.exports=module.exports = [{
    "name": "Pedro Almodóvar",
    "sex": "M",
    "nationality": "Spanish",
    "city": "Almería",
    "dob": -639535067,
    "age": 66,
    "blockbuster": "Todo sobre mi madre"
  }, {
    "name": "Giuseppe Tornatore",
    "sex": "M",
    "nationality": "Italian",
    "city": "Bagheria",
    "dob": -429064667,
    "age": 59,
    "blockbuster": "Cinema paradiso"
  }, {
    "name": "Sofia Coppola",
    "sex": "F",
    "nationality": "American",
    "city": "New York",
    "dob": 43111333,
    "age": 44,
    "blockbuster": "Lost in translation"
  }, {
    "name": "Luc Besson",
    "sex": "M",
    "nationality": "French",
    "city": "Paris",
    "dob": -340504667,
    "age": 59,
    "blockbuster": "Léon"
  }, {
    "name": "Alfred Hitchcock",
    "sex": "M",
    "nationality": "British",
    "city": "London",
    "dob": -2221087067,
    "age": "dead",
    "blockbuster": "Psicosis"
  }, {
    "name": "Lucía Puenzo",
    "sex": "F",
    "nationality": "Argentinian",
    "city": "Buenos Aires",
    "dob": 218071333,
    "age": 38,
    "blockbuster": "Wakolda"
  }, {
    "name": "Alejandro González Iñárritu",
    "sex": "M",
    "nationality": "Mexican",
    "city": "Mexico DF",
    "dob": -201314267,
    "age": 52,
    "blockbuster": "Birdman"
  }
];

},{}],8:[function(require,module,exports){

var template = "<table class=\"table-directors\">\n  <thead class=\"table-header\">\n    <th ng-repeat=\"header in headers\">\n      {{header.name}}\n    </th>\n  </thead>\n  <tbody>\n    <tr ng-repeat=\"row in content\" ng-click=\"tableCtrl.goToDetail($index, details)\">\n      <td ng-repeat=\"attribute in row\" class=\"director-attr\">\n        {{attribute}}\n      </td>\n    </tr>\n  </tbody>\n</table>\n";

var TableDirective = function () {
  return {
    link: function (scope, el, attrs) {
      scope.details = attrs.details;
    },
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJzcmMvY29udHJvbGxlcnMvZGlyZWN0b3JzL0RpcmVjdG9yc0N0cmwuanMiLCJzcmMvY29udHJvbGxlcnMvZGlyZWN0b3JzL2RldGFpbHMvRGlyZWN0b3JEZXRhaWxDdHJsLmpzIiwic3JjL2NvbnRyb2xsZXJzL2RpcmVjdG9ycy9kZXRhaWxzL2RpcmVjdG9yLmpzb24iLCJzcmMvY29udHJvbGxlcnMvZGlyZWN0b3JzL2RpcmVjdG9ycy5qc29uIiwic3JjL2RpcmVjdGl2ZXMvbWRUYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25PQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuLyoqXG4gKiBUZW1wbGF0ZXNcbiAqL1xuXG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbnZhciBkaXJlY3RvcnMgPSBcIjxoMj5EaXJlY3RvciBMaXN0PC9oMj5cXG48ZGlyZWN0b3ItdGFibGUgaGVhZGVycz1cXFwiaGVhZGVyc1xcXCIgY29udGVudD1cXFwiY29udGVudFxcXCIgZGV0YWlscz1cXFwiL2RpcmVjdG9yc1xcXCI+PC9kaXJlY3Rvci10YWJsZT5cXG5cIjtcbnZhciBkaXJlY3RvckRldGFpbCA9IFwiPGRpdiBsYXlvdXQ9XFxcInJvd1xcXCIgY2xhc3M9XFxcImRpcmVjdG9yLWRldGFpbFxcXCI+XFxuICA8ZGl2IGZsZXg9XFxcIjMzXFxcIj5cXG4gICAgPGltZyBzcmM9XFxcInt7ZGlyZWN0b3IuaW1hZ2V9fVxcXCIgY2xhc3M9XFxcImltYWdlLWRpcmVjdG9yXFxcIj5cXG4gIDwvZGl2PlxcbiAgPGRpdiBmbGV4PVxcXCI2NlxcXCIgY2xhc3M9XFxcImRpcmVjdG9yLWRlc2NyaXB0aW9uXFxcIj5cXG4gICAgPGgyPkRpcmVjdG9yIGRldGFpbHM8L2gyPlxcbiAgICA8cD57e2RpcmVjdG9yLmJpb319PC9wPlxcbiAgICA8dWw+XFxuICAgICAgPGxpPjxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+RnVsbCBOYW1lOiA8L3NwYW4+PHNwYW4+e3tkaXJlY3Rvci5mdWxsTmFtZX19PC9zcGFuPjwvbGk+XFxuICAgICAgPGxpPjxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+U2V4OiA8L3NwYW4+PHNwYW4+e3tkaXJlY3Rvci5zZXh9fTwvc3Bhbj48L2xpPlxcbiAgICAgIDxsaT48c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPk5hdGlvbmFsaXR5OiA8L3NwYW4+PHNwYW4+e3tkaXJlY3Rvci5uYXRpb25hbGl0eX19PC9zcGFuPjwvbGk+XFxuICAgICAgPGxpPjxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+U3RhdGU6IDwvc3Bhbj48c3Bhbj57e2RpcmVjdG9yLnN0YXRlfX08L3NwYW4+PC9saT5cXG4gICAgICA8bGk+PHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5DaXR5OiA8L3NwYW4+PHNwYW4+e3tkaXJlY3Rvci5jaXR5fX08L3NwYW4+PC9saT5cXG4gICAgICA8bGk+PHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5Eb2I6IDwvc3Bhbj48c3Bhbj57e2RpcmVjdG9yLmRvYn19PC9zcGFuPjwvbGk+XFxuICAgICAgPGxpPjxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+QWdlOiA8L3NwYW4+PHNwYW4+e3tkaXJlY3Rvci5hZ2V9fTwvc3Bhbj48L2xpPlxcbiAgICAgIDxsaT48c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlNwb3VzZTogPC9zcGFuPjxzcGFuPnt7ZGlyZWN0b3Iuc3BvdXNlfX08L3NwYW4+PC9saT5cXG4gICAgPC91bD5cXG4gICAgPHNwYW4+QmxvY2tCdXN0ZXJzOiA8L3NwYW4+XFxuICAgIDx1bD5cXG4gICAgICA8bGkgbmctcmVwZWF0PVxcXCJibG9ja2J1c3RlciBpbiBkaXJlY3Rvci5ibG9ja2J1c3RlcnNcXFwiPlxcbiAgICAgICAgPHNwYW4+e3tibG9ja2J1c3Rlci5yZWxlYXNlfX0gLSB7e2Jsb2NrYnVzdGVyLm1vdmllTmFtZX19PC9zcGFuPlxcbiAgICAgIDwvbGk+XFxuICAgIDwvdWw+XFxuICAgIDxkaXYgbmctcmVwZWF0PVxcXCJibG9ja2J1c3RlciBpbiBibG9ja2J1c3RlcnNcXFwiPnt7ZGlyZWN0b3IuYmxvY2tidXN0ZXIubW92aWVOYW1lfX0ge3tkaXJlY3Rvci5ibG9ja2J1c3Rlci5yZWxlYXNlfX08L2Rpdj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5DaGlsZHJlbjwvc3Bhbj5cXG4gICAgPGRpdiBuZy1yZXBlYXQ9XFxcImNoaWxkIGluIGRpcmVjdG9yLmNoaWxkcmVuXFxcIj57e2NoaWxkfX08L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcbjxkaXY+XFxuICA8YSBocmVmPVxcXCIjL2RpcmVjdG9yc1xcXCI+Jmx0IEJhY2sgRGlyZWN0b3IgTGlzdDwvYT5cXG48L2Rpdj5cXG5cIjtcblxuLyoqXG4gKiBEaXJlY3RvcnMgYXBwbGljYXRpb25cbiAqL1xuZ2xvYmFsLkFwcCA9IGFuZ3VsYXIubW9kdWxlKCdkaXJlY3RvcnMnLCBbXG4gICduZ01hdGVyaWFsJyxcbiAgJ25nUm91dGUnXG5dKS5jb25maWcoZnVuY3Rpb24gKCRyb3V0ZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuICAkcm91dGVQcm92aWRlclxuICAud2hlbignLycsIHtcbiAgICBjb250cm9sbGVyOiAnRGlyZWN0b3JzQ3RybCcsXG4gICAgdGVtcGxhdGU6IGRpcmVjdG9yc1xuICB9KVxuICAud2hlbignL2RpcmVjdG9ycycsIHtcbiAgICBjb250cm9sbGVyOiAnRGlyZWN0b3JzQ3RybCcsXG4gICAgdGVtcGxhdGU6IGRpcmVjdG9yc1xuICB9KVxuICAud2hlbignL2RpcmVjdG9ycy86ZGlyZWN0b3InLCB7XG4gICAgY29udHJvbGxlcjogJ0RpcmVjdG9yRGV0YWlsJyxcbiAgICB0ZW1wbGF0ZTogZGlyZWN0b3JEZXRhaWxcbiAgfSk7XG59KTtcbnJlcXVpcmUoJy4vZGlyZWN0aXZlcy9tZFRhYmxlJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2RpcmVjdG9ycy9EaXJlY3RvcnNDdHJsJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzL2RpcmVjdG9ycy9kZXRhaWxzL0RpcmVjdG9yRGV0YWlsQ3RybCcpO1xuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloY0hBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5b3FYRzRnS2lCVVpXMXdiR0YwWlhOY2JpQXFMMXh1WEc1MllYSWdjR0YwYUNBOUlISmxjWFZwY21Vb0ozQmhkR2duS1R0Y2JuWmhjaUJrYVhKbFkzUnZjbk1nUFNCY0lqeG9NajVFYVhKbFkzUnZjaUJNYVhOMFBDOW9NajVjWEc0OFpHbHlaV04wYjNJdGRHRmliR1VnYUdWaFpHVnljejFjWEZ3aWFHVmhaR1Z5YzF4Y1hDSWdZMjl1ZEdWdWREMWNYRndpWTI5dWRHVnVkRnhjWENJZ1pHVjBZV2xzY3oxY1hGd2lMMlJwY21WamRHOXljMXhjWENJK1BDOWthWEpsWTNSdmNpMTBZV0pzWlQ1Y1hHNWNJanRjYm5aaGNpQmthWEpsWTNSdmNrUmxkR0ZwYkNBOUlGd2lQR1JwZGlCc1lYbHZkWFE5WEZ4Y0luSnZkMXhjWENJZ1kyeGhjM005WEZ4Y0ltUnBjbVZqZEc5eUxXUmxkR0ZwYkZ4Y1hDSStYRnh1SUNBOFpHbDJJR1pzWlhnOVhGeGNJak16WEZ4Y0lqNWNYRzRnSUNBZ1BHbHRaeUJ6Y21NOVhGeGNJbnQ3WkdseVpXTjBiM0l1YVcxaFoyVjlmVnhjWENJZ1kyeGhjM005WEZ4Y0ltbHRZV2RsTFdScGNtVmpkRzl5WEZ4Y0lqNWNYRzRnSUR3dlpHbDJQbHhjYmlBZ1BHUnBkaUJtYkdWNFBWeGNYQ0kyTmx4Y1hDSWdZMnhoYzNNOVhGeGNJbVJwY21WamRHOXlMV1JsYzJOeWFYQjBhVzl1WEZ4Y0lqNWNYRzRnSUNBZ1BHZ3lQa1JwY21WamRHOXlJR1JsZEdGcGJITThMMmd5UGx4Y2JpQWdJQ0E4Y0Q1N2UyUnBjbVZqZEc5eUxtSnBiMzE5UEM5d1BseGNiaUFnSUNBOGRXdytYRnh1SUNBZ0lDQWdQR3hwUGp4emNHRnVJR05zWVhOelBWeGNYQ0prWlhOamNtbHdkR2x2Ymx4Y1hDSStSblZzYkNCT1lXMWxPaUE4TDNOd1lXNCtQSE53WVc0K2UzdGthWEpsWTNSdmNpNW1kV3hzVG1GdFpYMTlQQzl6Y0dGdVBqd3ZiR2srWEZ4dUlDQWdJQ0FnUEd4cFBqeHpjR0Z1SUdOc1lYTnpQVnhjWENKa1pYTmpjbWx3ZEdsdmJseGNYQ0krVTJWNE9pQThMM053WVc0K1BITndZVzQrZTN0a2FYSmxZM1J2Y2k1elpYaDlmVHd2YzNCaGJqNDhMMnhwUGx4Y2JpQWdJQ0FnSUR4c2FUNDhjM0JoYmlCamJHRnpjejFjWEZ3aVpHVnpZM0pwY0hScGIyNWNYRndpUGs1aGRHbHZibUZzYVhSNU9pQThMM053WVc0K1BITndZVzQrZTN0a2FYSmxZM1J2Y2k1dVlYUnBiMjVoYkdsMGVYMTlQQzl6Y0dGdVBqd3ZiR2srWEZ4dUlDQWdJQ0FnUEd4cFBqeHpjR0Z1SUdOc1lYTnpQVnhjWENKa1pYTmpjbWx3ZEdsdmJseGNYQ0krVTNSaGRHVTZJRHd2YzNCaGJqNDhjM0JoYmo1N2UyUnBjbVZqZEc5eUxuTjBZWFJsZlgwOEwzTndZVzQrUEM5c2FUNWNYRzRnSUNBZ0lDQThiR2srUEhOd1lXNGdZMnhoYzNNOVhGeGNJbVJsYzJOeWFYQjBhVzl1WEZ4Y0lqNURhWFI1T2lBOEwzTndZVzQrUEhOd1lXNCtlM3RrYVhKbFkzUnZjaTVqYVhSNWZYMDhMM053WVc0K1BDOXNhVDVjWEc0Z0lDQWdJQ0E4YkdrK1BITndZVzRnWTJ4aGMzTTlYRnhjSW1SbGMyTnlhWEIwYVc5dVhGeGNJajVFYjJJNklEd3ZjM0JoYmo0OGMzQmhiajU3ZTJScGNtVmpkRzl5TG1SdlluMTlQQzl6Y0dGdVBqd3ZiR2srWEZ4dUlDQWdJQ0FnUEd4cFBqeHpjR0Z1SUdOc1lYTnpQVnhjWENKa1pYTmpjbWx3ZEdsdmJseGNYQ0krUVdkbE9pQThMM053WVc0K1BITndZVzQrZTN0a2FYSmxZM1J2Y2k1aFoyVjlmVHd2YzNCaGJqNDhMMnhwUGx4Y2JpQWdJQ0FnSUR4c2FUNDhjM0JoYmlCamJHRnpjejFjWEZ3aVpHVnpZM0pwY0hScGIyNWNYRndpUGxOd2IzVnpaVG9nUEM5emNHRnVQanh6Y0dGdVBudDdaR2x5WldOMGIzSXVjM0J2ZFhObGZYMDhMM053WVc0K1BDOXNhVDVjWEc0Z0lDQWdQQzkxYkQ1Y1hHNGdJQ0FnUEhOd1lXNCtRbXh2WTJ0Q2RYTjBaWEp6T2lBOEwzTndZVzQrWEZ4dUlDQWdJRHgxYkQ1Y1hHNGdJQ0FnSUNBOGJHa2dibWN0Y21Wd1pXRjBQVnhjWENKaWJHOWphMkoxYzNSbGNpQnBiaUJrYVhKbFkzUnZjaTVpYkc5amEySjFjM1JsY25OY1hGd2lQbHhjYmlBZ0lDQWdJQ0FnUEhOd1lXNCtlM3RpYkc5amEySjFjM1JsY2k1eVpXeGxZWE5sZlgwZ0xTQjdlMkpzYjJOclluVnpkR1Z5TG0xdmRtbGxUbUZ0WlgxOVBDOXpjR0Z1UGx4Y2JpQWdJQ0FnSUR3dmJHaytYRnh1SUNBZ0lEd3ZkV3crWEZ4dUlDQWdJRHhrYVhZZ2JtY3RjbVZ3WldGMFBWeGNYQ0ppYkc5amEySjFjM1JsY2lCcGJpQmliRzlqYTJKMWMzUmxjbk5jWEZ3aVBudDdaR2x5WldOMGIzSXVZbXh2WTJ0aWRYTjBaWEl1Ylc5MmFXVk9ZVzFsZlgwZ2UzdGthWEpsWTNSdmNpNWliRzlqYTJKMWMzUmxjaTV5Wld4bFlYTmxmWDA4TDJScGRqNWNYRzRnSUNBZ1BITndZVzRnWTJ4aGMzTTlYRnhjSW1SbGMyTnlhWEIwYVc5dVhGeGNJajVEYUdsc1pISmxiand2YzNCaGJqNWNYRzRnSUNBZ1BHUnBkaUJ1WnkxeVpYQmxZWFE5WEZ4Y0ltTm9hV3hrSUdsdUlHUnBjbVZqZEc5eUxtTm9hV3hrY21WdVhGeGNJajU3ZTJOb2FXeGtmWDA4TDJScGRqNWNYRzRnSUR3dlpHbDJQbHhjYmp3dlpHbDJQbHhjYmp4a2FYWStYRnh1SUNBOFlTQm9jbVZtUFZ4Y1hDSWpMMlJwY21WamRHOXljMXhjWENJK0pteDBJRUpoWTJzZ1JHbHlaV04wYjNJZ1RHbHpkRHd2WVQ1Y1hHNDhMMlJwZGo1Y1hHNWNJanRjYmx4dUx5b3FYRzRnS2lCRWFYSmxZM1J2Y25NZ1lYQndiR2xqWVhScGIyNWNiaUFxTDF4dVoyeHZZbUZzTGtGd2NDQTlJR0Z1WjNWc1lYSXViVzlrZFd4bEtDZGthWEpsWTNSdmNuTW5MQ0JiWEc0Z0lDZHVaMDFoZEdWeWFXRnNKeXhjYmlBZ0oyNW5VbTkxZEdVblhHNWRLUzVqYjI1bWFXY29ablZ1WTNScGIyNGdLQ1J5YjNWMFpWQnliM1pwWkdWeUxDQWtiRzlqWVhScGIyNVFjbTkyYVdSbGNpa2dlMXh1SUNBa2NtOTFkR1ZRY205MmFXUmxjbHh1SUNBdWQyaGxiaWduTHljc0lIdGNiaUFnSUNCamIyNTBjbTlzYkdWeU9pQW5SR2x5WldOMGIzSnpRM1J5YkNjc1hHNGdJQ0FnZEdWdGNHeGhkR1U2SUdScGNtVmpkRzl5YzF4dUlDQjlLVnh1SUNBdWQyaGxiaWduTDJScGNtVmpkRzl5Y3ljc0lIdGNiaUFnSUNCamIyNTBjbTlzYkdWeU9pQW5SR2x5WldOMGIzSnpRM1J5YkNjc1hHNGdJQ0FnZEdWdGNHeGhkR1U2SUdScGNtVmpkRzl5YzF4dUlDQjlLVnh1SUNBdWQyaGxiaWduTDJScGNtVmpkRzl5Y3k4NlpHbHlaV04wYjNJbkxDQjdYRzRnSUNBZ1kyOXVkSEp2Ykd4bGNqb2dKMFJwY21WamRHOXlSR1YwWVdsc0p5eGNiaUFnSUNCMFpXMXdiR0YwWlRvZ1pHbHlaV04wYjNKRVpYUmhhV3hjYmlBZ2ZTazdYRzU5S1R0Y2JuSmxjWFZwY21Vb0p5NHZaR2x5WldOMGFYWmxjeTl0WkZSaFlteGxKeWs3WEc1eVpYRjFhWEpsS0NjdUwyTnZiblJ5YjJ4c1pYSnpMMlJwY21WamRHOXljeTlFYVhKbFkzUnZjbk5EZEhKc0p5azdYRzV5WlhGMWFYSmxLQ2N1TDJOdmJuUnliMnhzWlhKekwyUnBjbVZqZEc5eWN5OWtaWFJoYVd4ekwwUnBjbVZqZEc5eVJHVjBZV2xzUTNSeWJDY3BPMXh1SWwxOSIsIihmdW5jdGlvbiAocHJvY2Vzcyl7XG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBTcGxpdCBhIGZpbGVuYW1lIGludG8gW3Jvb3QsIGRpciwgYmFzZW5hbWUsIGV4dF0sIHVuaXggdmVyc2lvblxuLy8gJ3Jvb3QnIGlzIGp1c3QgYSBzbGFzaCwgb3Igbm90aGluZy5cbnZhciBzcGxpdFBhdGhSZSA9XG4gICAgL14oXFwvP3wpKFtcXHNcXFNdKj8pKCg/OlxcLnsxLDJ9fFteXFwvXSs/fCkoXFwuW14uXFwvXSp8KSkoPzpbXFwvXSopJC87XG52YXIgc3BsaXRQYXRoID0gZnVuY3Rpb24oZmlsZW5hbWUpIHtcbiAgcmV0dXJuIHNwbGl0UGF0aFJlLmV4ZWMoZmlsZW5hbWUpLnNsaWNlKDEpO1xufTtcblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgcmVzdWx0ID0gc3BsaXRQYXRoKHBhdGgpLFxuICAgICAgcm9vdCA9IHJlc3VsdFswXSxcbiAgICAgIGRpciA9IHJlc3VsdFsxXTtcblxuICBpZiAoIXJvb3QgJiYgIWRpcikge1xuICAgIC8vIE5vIGRpcm5hbWUgd2hhdHNvZXZlclxuICAgIHJldHVybiAnLic7XG4gIH1cblxuICBpZiAoZGlyKSB7XG4gICAgLy8gSXQgaGFzIGEgZGlybmFtZSwgc3RyaXAgdHJhaWxpbmcgc2xhc2hcbiAgICBkaXIgPSBkaXIuc3Vic3RyKDAsIGRpci5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIHJldHVybiByb290ICsgZGlyO1xufTtcblxuXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24ocGF0aCwgZXh0KSB7XG4gIHZhciBmID0gc3BsaXRQYXRoKHBhdGgpWzJdO1xuICAvLyBUT0RPOiBtYWtlIHRoaXMgY29tcGFyaXNvbiBjYXNlLWluc2Vuc2l0aXZlIG9uIHdpbmRvd3M/XG4gIGlmIChleHQgJiYgZi5zdWJzdHIoLTEgKiBleHQubGVuZ3RoKSA9PT0gZXh0KSB7XG4gICAgZiA9IGYuc3Vic3RyKDAsIGYubGVuZ3RoIC0gZXh0Lmxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIGY7XG59O1xuXG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHNwbGl0UGF0aChwYXRoKVszXTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoJ19wcm9jZXNzJykpXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5YVdaNUwyNXZaR1ZmYlc5a2RXeGxjeTl3WVhSb0xXSnliM2R6WlhKcFpua3ZhVzVrWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqdEJRVUZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTSXNJbVpwYkdVaU9pSm5aVzVsY21GMFpXUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1EyOXdlWEpwWjJoMElFcHZlV1Z1ZEN3Z1NXNWpMaUJoYm1RZ2IzUm9aWElnVG05a1pTQmpiMjUwY21saWRYUnZjbk11WEc0dkwxeHVMeThnVUdWeWJXbHpjMmx2YmlCcGN5Qm9aWEpsWW5rZ1ozSmhiblJsWkN3Z1puSmxaU0J2WmlCamFHRnlaMlVzSUhSdklHRnVlU0J3WlhKemIyNGdiMkowWVdsdWFXNW5JR0ZjYmk4dklHTnZjSGtnYjJZZ2RHaHBjeUJ6YjJaMGQyRnlaU0JoYm1RZ1lYTnpiMk5wWVhSbFpDQmtiMk4xYldWdWRHRjBhVzl1SUdacGJHVnpJQ2gwYUdWY2JpOHZJRndpVTI5bWRIZGhjbVZjSWlrc0lIUnZJR1JsWVd3Z2FXNGdkR2hsSUZOdlpuUjNZWEpsSUhkcGRHaHZkWFFnY21WemRISnBZM1JwYjI0c0lHbHVZMngxWkdsdVoxeHVMeThnZDJsMGFHOTFkQ0JzYVcxcGRHRjBhVzl1SUhSb1pTQnlhV2RvZEhNZ2RHOGdkWE5sTENCamIzQjVMQ0J0YjJScFpua3NJRzFsY21kbExDQndkV0pzYVhOb0xGeHVMeThnWkdsemRISnBZblYwWlN3Z2MzVmliR2xqWlc1elpTd2dZVzVrTDI5eUlITmxiR3dnWTI5d2FXVnpJRzltSUhSb1pTQlRiMlowZDJGeVpTd2dZVzVrSUhSdklIQmxjbTFwZEZ4dUx5OGdjR1Z5YzI5dWN5QjBieUIzYUc5dElIUm9aU0JUYjJaMGQyRnlaU0JwY3lCbWRYSnVhWE5vWldRZ2RHOGdaRzhnYzI4c0lITjFZbXBsWTNRZ2RHOGdkR2hsWEc0dkx5Qm1iMnhzYjNkcGJtY2dZMjl1WkdsMGFXOXVjenBjYmk4dlhHNHZMeUJVYUdVZ1lXSnZkbVVnWTI5d2VYSnBaMmgwSUc1dmRHbGpaU0JoYm1RZ2RHaHBjeUJ3WlhKdGFYTnphVzl1SUc1dmRHbGpaU0J6YUdGc2JDQmlaU0JwYm1Oc2RXUmxaRnh1THk4Z2FXNGdZV3hzSUdOdmNHbGxjeUJ2Y2lCemRXSnpkR0Z1ZEdsaGJDQndiM0owYVc5dWN5QnZaaUIwYUdVZ1UyOW1kSGRoY21VdVhHNHZMMXh1THk4Z1ZFaEZJRk5QUmxSWFFWSkZJRWxUSUZCU1QxWkpSRVZFSUZ3aVFWTWdTVk5jSWl3Z1YwbFVTRTlWVkNCWFFWSlNRVTVVV1NCUFJpQkJUbGtnUzBsT1JDd2dSVmhRVWtWVFUxeHVMeThnVDFJZ1NVMVFURWxGUkN3Z1NVNURURlZFU1U1SElFSlZWQ0JPVDFRZ1RFbE5TVlJGUkNCVVR5QlVTRVVnVjBGU1VrRk9WRWxGVXlCUFJseHVMeThnVFVWU1EwaEJUbFJCUWtsTVNWUlpMQ0JHU1ZST1JWTlRJRVpQVWlCQklGQkJVbFJKUTFWTVFWSWdVRlZTVUU5VFJTQkJUa1FnVGs5T1NVNUdVa2xPUjBWTlJVNVVMaUJKVGx4dUx5OGdUazhnUlZaRlRsUWdVMGhCVEV3Z1ZFaEZJRUZWVkVoUFVsTWdUMUlnUTA5UVdWSkpSMGhVSUVoUFRFUkZVbE1nUWtVZ1RFbEJRa3hGSUVaUFVpQkJUbGtnUTB4QlNVMHNYRzR2THlCRVFVMUJSMFZUSUU5U0lFOVVTRVZTSUV4SlFVSkpURWxVV1N3Z1YwaEZWRWhGVWlCSlRpQkJUaUJCUTFSSlQwNGdUMFlnUTA5T1ZGSkJRMVFzSUZSUFVsUWdUMUpjYmk4dklFOVVTRVZTVjBsVFJTd2dRVkpKVTBsT1J5QkdVazlOTENCUFZWUWdUMFlnVDFJZ1NVNGdRMDlPVGtWRFZFbFBUaUJYU1ZSSUlGUklSU0JUVDBaVVYwRlNSU0JQVWlCVVNFVmNiaTh2SUZWVFJTQlBVaUJQVkVoRlVpQkVSVUZNU1U1SFV5QkpUaUJVU0VVZ1UwOUdWRmRCVWtVdVhHNWNiaTh2SUhKbGMyOXNkbVZ6SUM0Z1lXNWtJQzR1SUdWc1pXMWxiblJ6SUdsdUlHRWdjR0YwYUNCaGNuSmhlU0IzYVhSb0lHUnBjbVZqZEc5eWVTQnVZVzFsY3lCMGFHVnlaVnh1THk4Z2JYVnpkQ0JpWlNCdWJ5QnpiR0Z6YUdWekxDQmxiWEIwZVNCbGJHVnRaVzUwY3l3Z2IzSWdaR1YyYVdObElHNWhiV1Z6SUNoak9seGNLU0JwYmlCMGFHVWdZWEp5WVhsY2JpOHZJQ2h6YnlCaGJITnZJRzV2SUd4bFlXUnBibWNnWVc1a0lIUnlZV2xzYVc1bklITnNZWE5vWlhNZ0xTQnBkQ0JrYjJWeklHNXZkQ0JrYVhOMGFXNW5kV2x6YUZ4dUx5OGdjbVZzWVhScGRtVWdZVzVrSUdGaWMyOXNkWFJsSUhCaGRHaHpLVnh1Wm5WdVkzUnBiMjRnYm05eWJXRnNhWHBsUVhKeVlYa29jR0Z5ZEhNc0lHRnNiRzkzUVdKdmRtVlNiMjkwS1NCN1hHNGdJQzh2SUdsbUlIUm9aU0J3WVhSb0lIUnlhV1Z6SUhSdklHZHZJR0ZpYjNabElIUm9aU0J5YjI5MExDQmdkWEJnSUdWdVpITWdkWEFnUGlBd1hHNGdJSFpoY2lCMWNDQTlJREE3WEc0Z0lHWnZjaUFvZG1GeUlHa2dQU0J3WVhKMGN5NXNaVzVuZEdnZ0xTQXhPeUJwSUQ0OUlEQTdJR2t0TFNrZ2UxeHVJQ0FnSUhaaGNpQnNZWE4wSUQwZ2NHRnlkSE5iYVYwN1hHNGdJQ0FnYVdZZ0tHeGhjM1FnUFQwOUlDY3VKeWtnZTF4dUlDQWdJQ0FnY0dGeWRITXVjM0JzYVdObEtHa3NJREVwTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvYkdGemRDQTlQVDBnSnk0dUp5a2dlMXh1SUNBZ0lDQWdjR0Z5ZEhNdWMzQnNhV05sS0drc0lERXBPMXh1SUNBZ0lDQWdkWEFyS3p0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0hWd0tTQjdYRzRnSUNBZ0lDQndZWEowY3k1emNHeHBZMlVvYVN3Z01TazdYRzRnSUNBZ0lDQjFjQzB0TzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4dklHbG1JSFJvWlNCd1lYUm9JR2x6SUdGc2JHOTNaV1FnZEc4Z1oyOGdZV0p2ZG1VZ2RHaGxJSEp2YjNRc0lISmxjM1J2Y21VZ2JHVmhaR2x1WnlBdUxuTmNiaUFnYVdZZ0tHRnNiRzkzUVdKdmRtVlNiMjkwS1NCN1hHNGdJQ0FnWm05eUlDZzdJSFZ3TFMwN0lIVndLU0I3WEc0Z0lDQWdJQ0J3WVhKMGN5NTFibk5vYVdaMEtDY3VMaWNwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ3WVhKMGN6dGNibjFjYmx4dUx5OGdVM0JzYVhRZ1lTQm1hV3hsYm1GdFpTQnBiblJ2SUZ0eWIyOTBMQ0JrYVhJc0lHSmhjMlZ1WVcxbExDQmxlSFJkTENCMWJtbDRJSFpsY25OcGIyNWNiaTh2SUNkeWIyOTBKeUJwY3lCcWRYTjBJR0VnYzJ4aGMyZ3NJRzl5SUc1dmRHaHBibWN1WEc1MllYSWdjM0JzYVhSUVlYUm9VbVVnUFZ4dUlDQWdJQzllS0Z4Y0x6OThLU2hiWEZ4elhGeFRYU28vS1Nnb1B6cGNYQzU3TVN3eWZYeGJYbHhjTDEwclAzd3BLRnhjTGx0ZUxseGNMMTBxZkNrcEtEODZXMXhjTDEwcUtTUXZPMXh1ZG1GeUlITndiR2wwVUdGMGFDQTlJR1oxYm1OMGFXOXVLR1pwYkdWdVlXMWxLU0I3WEc0Z0lISmxkSFZ5YmlCemNHeHBkRkJoZEdoU1pTNWxlR1ZqS0dacGJHVnVZVzFsS1M1emJHbGpaU2d4S1R0Y2JuMDdYRzVjYmk4dklIQmhkR2d1Y21WemIyeDJaU2hiWm5KdmJTQXVMaTVkTENCMGJ5bGNiaTh2SUhCdmMybDRJSFpsY25OcGIyNWNibVY0Y0c5eWRITXVjbVZ6YjJ4MlpTQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQjJZWElnY21WemIyeDJaV1JRWVhSb0lEMGdKeWNzWEc0Z0lDQWdJQ0J5WlhOdmJIWmxaRUZpYzI5c2RYUmxJRDBnWm1Gc2MyVTdYRzVjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJR0Z5WjNWdFpXNTBjeTVzWlc1bmRHZ2dMU0F4T3lCcElENDlJQzB4SUNZbUlDRnlaWE52YkhabFpFRmljMjlzZFhSbE95QnBMUzBwSUh0Y2JpQWdJQ0IyWVhJZ2NHRjBhQ0E5SUNocElENDlJREFwSUQ4Z1lYSm5kVzFsYm5SelcybGRJRG9nY0hKdlkyVnpjeTVqZDJRb0tUdGNibHh1SUNBZ0lDOHZJRk5yYVhBZ1pXMXdkSGtnWVc1a0lHbHVkbUZzYVdRZ1pXNTBjbWxsYzF4dUlDQWdJR2xtSUNoMGVYQmxiMllnY0dGMGFDQWhQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0owRnlaM1Z0Wlc1MGN5QjBieUJ3WVhSb0xuSmxjMjlzZG1VZ2JYVnpkQ0JpWlNCemRISnBibWR6SnlrN1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNnaGNHRjBhQ2tnZTF4dUlDQWdJQ0FnWTI5dWRHbHVkV1U3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVZ6YjJ4MlpXUlFZWFJvSUQwZ2NHRjBhQ0FySUNjdkp5QXJJSEpsYzI5c2RtVmtVR0YwYUR0Y2JpQWdJQ0J5WlhOdmJIWmxaRUZpYzI5c2RYUmxJRDBnY0dGMGFDNWphR0Z5UVhRb01Da2dQVDA5SUNjdkp6dGNiaUFnZlZ4dVhHNGdJQzh2SUVGMElIUm9hWE1nY0c5cGJuUWdkR2hsSUhCaGRHZ2djMmh2ZFd4a0lHSmxJSEpsYzI5c2RtVmtJSFJ2SUdFZ1puVnNiQ0JoWW5OdmJIVjBaU0J3WVhSb0xDQmlkWFJjYmlBZ0x5OGdhR0Z1Wkd4bElISmxiR0YwYVhabElIQmhkR2h6SUhSdklHSmxJSE5oWm1VZ0tHMXBaMmgwSUdoaGNIQmxiaUIzYUdWdUlIQnliMk5sYzNNdVkzZGtLQ2tnWm1GcGJITXBYRzVjYmlBZ0x5OGdUbTl5YldGc2FYcGxJSFJvWlNCd1lYUm9YRzRnSUhKbGMyOXNkbVZrVUdGMGFDQTlJRzV2Y20xaGJHbDZaVUZ5Y21GNUtHWnBiSFJsY2loeVpYTnZiSFpsWkZCaGRHZ3VjM0JzYVhRb0p5OG5LU3dnWm5WdVkzUnBiMjRvY0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUFoSVhBN1hHNGdJSDBwTENBaGNtVnpiMngyWldSQlluTnZiSFYwWlNrdWFtOXBiaWduTHljcE8xeHVYRzRnSUhKbGRIVnliaUFvS0hKbGMyOXNkbVZrUVdKemIyeDFkR1VnUHlBbkx5Y2dPaUFuSnlrZ0t5QnlaWE52YkhabFpGQmhkR2dwSUh4OElDY3VKenRjYm4wN1hHNWNiaTh2SUhCaGRHZ3VibTl5YldGc2FYcGxLSEJoZEdncFhHNHZMeUJ3YjNOcGVDQjJaWEp6YVc5dVhHNWxlSEJ2Y25SekxtNXZjbTFoYkdsNlpTQTlJR1oxYm1OMGFXOXVLSEJoZEdncElIdGNiaUFnZG1GeUlHbHpRV0p6YjJ4MWRHVWdQU0JsZUhCdmNuUnpMbWx6UVdKemIyeDFkR1VvY0dGMGFDa3NYRzRnSUNBZ0lDQjBjbUZwYkdsdVoxTnNZWE5vSUQwZ2MzVmljM1J5S0hCaGRHZ3NJQzB4S1NBOVBUMGdKeThuTzF4dVhHNGdJQzh2SUU1dmNtMWhiR2w2WlNCMGFHVWdjR0YwYUZ4dUlDQndZWFJvSUQwZ2JtOXliV0ZzYVhwbFFYSnlZWGtvWm1sc2RHVnlLSEJoZEdndWMzQnNhWFFvSnk4bktTd2dablZ1WTNScGIyNG9jQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQWhJWEE3WEc0Z0lIMHBMQ0FoYVhOQlluTnZiSFYwWlNrdWFtOXBiaWduTHljcE8xeHVYRzRnSUdsbUlDZ2hjR0YwYUNBbUppQWhhWE5CWW5OdmJIVjBaU2tnZTF4dUlDQWdJSEJoZEdnZ1BTQW5MaWM3WEc0Z0lIMWNiaUFnYVdZZ0tIQmhkR2dnSmlZZ2RISmhhV3hwYm1kVGJHRnphQ2tnZTF4dUlDQWdJSEJoZEdnZ0t6MGdKeThuTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUNocGMwRmljMjlzZFhSbElEOGdKeThuSURvZ0p5Y3BJQ3NnY0dGMGFEdGNibjA3WEc1Y2JpOHZJSEJ2YzJsNElIWmxjbk5wYjI1Y2JtVjRjRzl5ZEhNdWFYTkJZbk52YkhWMFpTQTlJR1oxYm1OMGFXOXVLSEJoZEdncElIdGNiaUFnY21WMGRYSnVJSEJoZEdndVkyaGhja0YwS0RBcElEMDlQU0FuTHljN1hHNTlPMXh1WEc0dkx5QndiM05wZUNCMlpYSnphVzl1WEc1bGVIQnZjblJ6TG1wdmFXNGdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdkbUZ5SUhCaGRHaHpJRDBnUVhKeVlYa3VjSEp2ZEc5MGVYQmxMbk5zYVdObExtTmhiR3dvWVhKbmRXMWxiblJ6TENBd0tUdGNiaUFnY21WMGRYSnVJR1Y0Y0c5eWRITXVibTl5YldGc2FYcGxLR1pwYkhSbGNpaHdZWFJvY3l3Z1puVnVZM1JwYjI0b2NDd2dhVzVrWlhncElIdGNiaUFnSUNCcFppQW9kSGx3Wlc5bUlIQWdJVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZEJjbWQxYldWdWRITWdkRzhnY0dGMGFDNXFiMmx1SUcxMWMzUWdZbVVnYzNSeWFXNW5jeWNwTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2NEdGNiaUFnZlNrdWFtOXBiaWduTHljcEtUdGNibjA3WEc1Y2JseHVMeThnY0dGMGFDNXlaV3hoZEdsMlpTaG1jbTl0TENCMGJ5bGNiaTh2SUhCdmMybDRJSFpsY25OcGIyNWNibVY0Y0c5eWRITXVjbVZzWVhScGRtVWdQU0JtZFc1amRHbHZiaWhtY205dExDQjBieWtnZTF4dUlDQm1jbTl0SUQwZ1pYaHdiM0owY3k1eVpYTnZiSFpsS0daeWIyMHBMbk4xWW5OMGNpZ3hLVHRjYmlBZ2RHOGdQU0JsZUhCdmNuUnpMbkpsYzI5c2RtVW9kRzhwTG5OMVluTjBjaWd4S1R0Y2JseHVJQ0JtZFc1amRHbHZiaUIwY21sdEtHRnljaWtnZTF4dUlDQWdJSFpoY2lCemRHRnlkQ0E5SURBN1hHNGdJQ0FnWm05eUlDZzdJSE4wWVhKMElEd2dZWEp5TG14bGJtZDBhRHNnYzNSaGNuUXJLeWtnZTF4dUlDQWdJQ0FnYVdZZ0tHRnljbHR6ZEdGeWRGMGdJVDA5SUNjbktTQmljbVZoYXp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0IyWVhJZ1pXNWtJRDBnWVhKeUxteGxibWQwYUNBdElERTdYRzRnSUNBZ1ptOXlJQ2c3SUdWdVpDQStQU0F3T3lCbGJtUXRMU2tnZTF4dUlDQWdJQ0FnYVdZZ0tHRnljbHRsYm1SZElDRTlQU0FuSnlrZ1luSmxZV3M3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hOMFlYSjBJRDRnWlc1a0tTQnlaWFIxY200Z1cxMDdYRzRnSUNBZ2NtVjBkWEp1SUdGeWNpNXpiR2xqWlNoemRHRnlkQ3dnWlc1a0lDMGdjM1JoY25RZ0t5QXhLVHRjYmlBZ2ZWeHVYRzRnSUhaaGNpQm1jbTl0VUdGeWRITWdQU0IwY21sdEtHWnliMjB1YzNCc2FYUW9KeThuS1NrN1hHNGdJSFpoY2lCMGIxQmhjblJ6SUQwZ2RISnBiU2gwYnk1emNHeHBkQ2duTHljcEtUdGNibHh1SUNCMllYSWdiR1Z1WjNSb0lEMGdUV0YwYUM1dGFXNG9abkp2YlZCaGNuUnpMbXhsYm1kMGFDd2dkRzlRWVhKMGN5NXNaVzVuZEdncE8xeHVJQ0IyWVhJZ2MyRnRaVkJoY25SelRHVnVaM1JvSUQwZ2JHVnVaM1JvTzF4dUlDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJR3hsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnYVdZZ0tHWnliMjFRWVhKMGMxdHBYU0FoUFQwZ2RHOVFZWEowYzF0cFhTa2dlMXh1SUNBZ0lDQWdjMkZ0WlZCaGNuUnpUR1Z1WjNSb0lEMGdhVHRjYmlBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lIWmhjaUJ2ZFhSd2RYUlFZWEowY3lBOUlGdGRPMXh1SUNCbWIzSWdLSFpoY2lCcElEMGdjMkZ0WlZCaGNuUnpUR1Z1WjNSb095QnBJRHdnWm5KdmJWQmhjblJ6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ2IzVjBjSFYwVUdGeWRITXVjSFZ6YUNnbkxpNG5LVHRjYmlBZ2ZWeHVYRzRnSUc5MWRIQjFkRkJoY25SeklEMGdiM1YwY0hWMFVHRnlkSE11WTI5dVkyRjBLSFJ2VUdGeWRITXVjMnhwWTJVb2MyRnRaVkJoY25SelRHVnVaM1JvS1NrN1hHNWNiaUFnY21WMGRYSnVJRzkxZEhCMWRGQmhjblJ6TG1wdmFXNG9KeThuS1R0Y2JuMDdYRzVjYm1WNGNHOXlkSE11YzJWd0lEMGdKeThuTzF4dVpYaHdiM0owY3k1a1pXeHBiV2wwWlhJZ1BTQW5PaWM3WEc1Y2JtVjRjRzl5ZEhNdVpHbHlibUZ0WlNBOUlHWjFibU4wYVc5dUtIQmhkR2dwSUh0Y2JpQWdkbUZ5SUhKbGMzVnNkQ0E5SUhOd2JHbDBVR0YwYUNod1lYUm9LU3hjYmlBZ0lDQWdJSEp2YjNRZ1BTQnlaWE4xYkhSYk1GMHNYRzRnSUNBZ0lDQmthWElnUFNCeVpYTjFiSFJiTVYwN1hHNWNiaUFnYVdZZ0tDRnliMjkwSUNZbUlDRmthWElwSUh0Y2JpQWdJQ0F2THlCT2J5QmthWEp1WVcxbElIZG9ZWFJ6YjJWMlpYSmNiaUFnSUNCeVpYUjFjbTRnSnk0bk8xeHVJQ0I5WEc1Y2JpQWdhV1lnS0dScGNpa2dlMXh1SUNBZ0lDOHZJRWwwSUdoaGN5QmhJR1JwY201aGJXVXNJSE4wY21sd0lIUnlZV2xzYVc1bklITnNZWE5vWEc0Z0lDQWdaR2x5SUQwZ1pHbHlMbk4xWW5OMGNpZ3dMQ0JrYVhJdWJHVnVaM1JvSUMwZ01TazdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdjbTl2ZENBcklHUnBjanRjYm4wN1hHNWNibHh1Wlhod2IzSjBjeTVpWVhObGJtRnRaU0E5SUdaMWJtTjBhVzl1S0hCaGRHZ3NJR1Y0ZENrZ2UxeHVJQ0IyWVhJZ1ppQTlJSE53YkdsMFVHRjBhQ2h3WVhSb0tWc3lYVHRjYmlBZ0x5OGdWRTlFVHpvZ2JXRnJaU0IwYUdseklHTnZiWEJoY21semIyNGdZMkZ6WlMxcGJuTmxibk5wZEdsMlpTQnZiaUIzYVc1a2IzZHpQMXh1SUNCcFppQW9aWGgwSUNZbUlHWXVjM1ZpYzNSeUtDMHhJQ29nWlhoMExteGxibWQwYUNrZ1BUMDlJR1Y0ZENrZ2UxeHVJQ0FnSUdZZ1BTQm1Mbk4xWW5OMGNpZ3dMQ0JtTG14bGJtZDBhQ0F0SUdWNGRDNXNaVzVuZEdncE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCbU8xeHVmVHRjYmx4dVhHNWxlSEJ2Y25SekxtVjRkRzVoYldVZ1BTQm1kVzVqZEdsdmJpaHdZWFJvS1NCN1hHNGdJSEpsZEhWeWJpQnpjR3hwZEZCaGRHZ29jR0YwYUNsYk0xMDdYRzU5TzF4dVhHNW1kVzVqZEdsdmJpQm1hV3gwWlhJZ0tIaHpMQ0JtS1NCN1hHNGdJQ0FnYVdZZ0tIaHpMbVpwYkhSbGNpa2djbVYwZFhKdUlIaHpMbVpwYkhSbGNpaG1LVHRjYmlBZ0lDQjJZWElnY21WeklEMGdXMTA3WEc0Z0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0I0Y3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1ppaDRjMXRwWFN3Z2FTd2dlSE1wS1NCeVpYTXVjSFZ6YUNoNGMxdHBYU2s3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCeVpYTTdYRzU5WEc1Y2JpOHZJRk4wY21sdVp5NXdjbTkwYjNSNWNHVXVjM1ZpYzNSeUlDMGdibVZuWVhScGRtVWdhVzVrWlhnZ1pHOXVKM1FnZDI5eWF5QnBiaUJKUlRoY2JuWmhjaUJ6ZFdKemRISWdQU0FuWVdJbkxuTjFZbk4wY2lndE1Ta2dQVDA5SUNkaUoxeHVJQ0FnSUQ4Z1puVnVZM1JwYjI0Z0tITjBjaXdnYzNSaGNuUXNJR3hsYmlrZ2V5QnlaWFIxY200Z2MzUnlMbk4xWW5OMGNpaHpkR0Z5ZEN3Z2JHVnVLU0I5WEc0Z0lDQWdPaUJtZFc1amRHbHZiaUFvYzNSeUxDQnpkR0Z5ZEN3Z2JHVnVLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaHpkR0Z5ZENBOElEQXBJSE4wWVhKMElEMGdjM1J5TG14bGJtZDBhQ0FySUhOMFlYSjBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjM1J5TG5OMVluTjBjaWh6ZEdGeWRDd2diR1Z1S1R0Y2JpQWdJQ0I5WEc0N1hHNGlYWDA9IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50UXVldWU7XG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHZhciBpID0gLTE7XG4gICAgICAgIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtpXSgpO1xuICAgICAgICB9XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbn1cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgcXVldWUucHVzaChmdW4pO1xuICAgIGlmICghZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBkaXJlY3RvcnMgPSByZXF1aXJlKCcuL2RpcmVjdG9ycy5qc29uJyk7XG52YXIgdGFibGVEaXJlY3RpdmUgPSByZXF1aXJlKCcuLi8uLi9kaXJlY3RpdmVzL21kVGFibGUnKTtcblxuZnVuY3Rpb24gRGlyZWN0b3JzQ3RybCAoJHNjb3BlLCAkbG9jYXRpb24pIHtcbiAgLy9IZWFkZXJzIG9mIHRhYmxlXG4gICRzY29wZS5oZWFkZXJzID0gIFt7XG4gICAgbmFtZTogXCJOYW1lXCIsXG4gICAgZmllbGQ6ICduYW1lJ1xuICB9LCB7XG4gICAgbmFtZTogXCJTZXhcIixcbiAgICBmaWVsZDogJ3NleCdcbiAgfSwge1xuICAgIG5hbWU6IFwiTmF0aW9uYWxpdHlcIixcbiAgICBmaWVsZDogJ25hdGlvbmFsaXR5J1xuICB9LCB7XG4gICAgbmFtZTogXCJDaXR5XCIsXG4gICAgZmllbGQ6ICdjaXR5J1xuICB9LCB7XG4gICAgbmFtZTogXCJkb2JcIixcbiAgICBmaWVsZDogJ2RvYidcbiAgfSwge1xuICAgIG5hbWU6IFwiYWdlXCIsXG4gICAgZmllbGQ6ICdhZ2UnXG4gIH0sIHtcbiAgICBuYW1lOiBcImJsb2NrYnVzdGVyXCIsXG4gICAgZmllbGQ6ICdibG9ja2J1c3RlcidcbiAgfV07XG4gICRzY29wZS5jb250ZW50ID0gZGlyZWN0b3JzO1xufVxuXG5BcHAuY29udHJvbGxlcignRGlyZWN0b3JzQ3RybCcsIFsnJHNjb3BlJywgJyRsb2NhdGlvbicsIERpcmVjdG9yc0N0cmxdKS5kaXJlY3RpdmUoJ2RpcmVjdG9yVGFibGUnLCB0YWJsZURpcmVjdGl2ZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0b3JzQ3RybDtcbiIsInZhciBkaXJlY3RvciA9IHJlcXVpcmUoJy4vZGlyZWN0b3IuanNvbicpO1xuXG5mdW5jdGlvbiBEaXJlY3RvckRldGFpbCgkc2NvcGUpIHtcbiAgJHNjb3BlLmRpcmVjdG9yID0gXy5jbG9uZShkaXJlY3Rvcik7XG4gICRzY29wZS5kaXJlY3Rvci5kb2IgPSBtb21lbnQoZGlyZWN0b3IuZG9iKS5mb3JtYXQoJ0wnKTtcbn1cbkFwcC5jb250cm9sbGVyKCdEaXJlY3RvckRldGFpbCcsIFsnJHNjb3BlJywgRGlyZWN0b3JEZXRhaWxdKTtcbiIsIm1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzID0ge1xuICBcImZ1bGxOYW1lXCI6IFwiRGF2aWQgTHluY2hcIixcbiAgXCJpbWFnZVwiOiBcImh0dHA6Ly93d3cuaW50ZXJ2aWV3bWFnYXppbmUuY29tL2ZpbGVzLzIwMTIvMDEvMDgvaW1nLWRhdmlkLWx5bmNoLTAxLV8xODQxMTcyMTYwNzEuanBnXCIsXG4gIFwic2V4XCI6IFwiTWFsZVwiLFxuICBcIm5hdGlvbmFsaXR5XCI6IFwiVW5pdGVkIFN0YXRlc1wiLFxuICBcInN0YXRlXCI6IFwiTW9udGFuYVwiLFxuICBcImNpdHlcIjogXCJNaXNzb3VsYVwiLFxuICBcImRvYlwiOiAtNzU1Njk5ODY3LFxuICBcImFnZVwiOiA2OSxcbiAgXCJibG9ja2J1c3RlcnNcIjogW3tcbiAgICBcIm1vdmllTmFtZVwiOiBcIkJsdWUgVmVsdmV0XCIsXG4gICAgXCJyZWxlYXNlXCI6IFwiMTk4NlwiXG4gIH0sIHtcbiAgICBcIm1vdmllTmFtZVwiOiBcIldpbGQgYXQgSGVhcnRcIixcbiAgICBcInJlbGVhc2VcIjogXCIxOTkwXCJcbiAgfSwge1xuICAgIFwibW92aWVOYW1lXCI6IFwiTXVsaG9sbGFuZCBEcml2ZVwiLFxuICAgIFwicmVsZWFzZVwiOiBcIjIwMDFcIlxuICB9XSxcbiAgXCJiaW9cIjogXCJpcyBhbiBBbWVyaWNhbiBkaXJlY3Rvciwgc2NyZWVud3JpdGVyLCB2aXN1YWwgYXJ0aXN0LCBtdXNpY2lhbiwgYWN0b3IsIGFuZCBhdXRob3IuIEtub3duIGZvciBoaXMgc3VycmVhbGlzdCBmaWxtcywgaGUgaGFzIGRldmVsb3BlZCBhIHVuaXF1ZSBjaW5lbWF0aWMgc3R5bGUuIFRoZSBzdXJyZWFsIGFuZCwgaW4gbWFueSBjYXNlcywgdmlvbGVudCBlbGVtZW50cyBjb250YWluZWQgd2l0aGluIGhpcyBmaWxtcyBoYXZlIGJlZW4ga25vd24gdG8gJ2Rpc3R1cmIsIG9mZmVuZCBvciBteXN0aWZ5JyBhdWRpZW5jZXMuXCIsXG4gIFwic3BvdXNlXCI6IFwiRW1pbHkgU3RvZmxlXCIsXG4gIFwiY2hpbGRyZW5cIjogW1wiTGlzYVwiLCBcIkJhcnRcIl1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzID0gW3tcbiAgICBcIm5hbWVcIjogXCJQZWRybyBBbG1vZMOzdmFyXCIsXG4gICAgXCJzZXhcIjogXCJNXCIsXG4gICAgXCJuYXRpb25hbGl0eVwiOiBcIlNwYW5pc2hcIixcbiAgICBcImNpdHlcIjogXCJBbG1lcsOtYVwiLFxuICAgIFwiZG9iXCI6IC02Mzk1MzUwNjcsXG4gICAgXCJhZ2VcIjogNjYsXG4gICAgXCJibG9ja2J1c3RlclwiOiBcIlRvZG8gc29icmUgbWkgbWFkcmVcIlxuICB9LCB7XG4gICAgXCJuYW1lXCI6IFwiR2l1c2VwcGUgVG9ybmF0b3JlXCIsXG4gICAgXCJzZXhcIjogXCJNXCIsXG4gICAgXCJuYXRpb25hbGl0eVwiOiBcIkl0YWxpYW5cIixcbiAgICBcImNpdHlcIjogXCJCYWdoZXJpYVwiLFxuICAgIFwiZG9iXCI6IC00MjkwNjQ2NjcsXG4gICAgXCJhZ2VcIjogNTksXG4gICAgXCJibG9ja2J1c3RlclwiOiBcIkNpbmVtYSBwYXJhZGlzb1wiXG4gIH0sIHtcbiAgICBcIm5hbWVcIjogXCJTb2ZpYSBDb3Bwb2xhXCIsXG4gICAgXCJzZXhcIjogXCJGXCIsXG4gICAgXCJuYXRpb25hbGl0eVwiOiBcIkFtZXJpY2FuXCIsXG4gICAgXCJjaXR5XCI6IFwiTmV3IFlvcmtcIixcbiAgICBcImRvYlwiOiA0MzExMTMzMyxcbiAgICBcImFnZVwiOiA0NCxcbiAgICBcImJsb2NrYnVzdGVyXCI6IFwiTG9zdCBpbiB0cmFuc2xhdGlvblwiXG4gIH0sIHtcbiAgICBcIm5hbWVcIjogXCJMdWMgQmVzc29uXCIsXG4gICAgXCJzZXhcIjogXCJNXCIsXG4gICAgXCJuYXRpb25hbGl0eVwiOiBcIkZyZW5jaFwiLFxuICAgIFwiY2l0eVwiOiBcIlBhcmlzXCIsXG4gICAgXCJkb2JcIjogLTM0MDUwNDY2NyxcbiAgICBcImFnZVwiOiA1OSxcbiAgICBcImJsb2NrYnVzdGVyXCI6IFwiTMOpb25cIlxuICB9LCB7XG4gICAgXCJuYW1lXCI6IFwiQWxmcmVkIEhpdGNoY29ja1wiLFxuICAgIFwic2V4XCI6IFwiTVwiLFxuICAgIFwibmF0aW9uYWxpdHlcIjogXCJCcml0aXNoXCIsXG4gICAgXCJjaXR5XCI6IFwiTG9uZG9uXCIsXG4gICAgXCJkb2JcIjogLTIyMjEwODcwNjcsXG4gICAgXCJhZ2VcIjogXCJkZWFkXCIsXG4gICAgXCJibG9ja2J1c3RlclwiOiBcIlBzaWNvc2lzXCJcbiAgfSwge1xuICAgIFwibmFtZVwiOiBcIkx1Y8OtYSBQdWVuem9cIixcbiAgICBcInNleFwiOiBcIkZcIixcbiAgICBcIm5hdGlvbmFsaXR5XCI6IFwiQXJnZW50aW5pYW5cIixcbiAgICBcImNpdHlcIjogXCJCdWVub3MgQWlyZXNcIixcbiAgICBcImRvYlwiOiAyMTgwNzEzMzMsXG4gICAgXCJhZ2VcIjogMzgsXG4gICAgXCJibG9ja2J1c3RlclwiOiBcIldha29sZGFcIlxuICB9LCB7XG4gICAgXCJuYW1lXCI6IFwiQWxlamFuZHJvIEdvbnrDoWxleiBJw7HDoXJyaXR1XCIsXG4gICAgXCJzZXhcIjogXCJNXCIsXG4gICAgXCJuYXRpb25hbGl0eVwiOiBcIk1leGljYW5cIixcbiAgICBcImNpdHlcIjogXCJNZXhpY28gREZcIixcbiAgICBcImRvYlwiOiAtMjAxMzE0MjY3LFxuICAgIFwiYWdlXCI6IDUyLFxuICAgIFwiYmxvY2tidXN0ZXJcIjogXCJCaXJkbWFuXCJcbiAgfVxuXTtcbiIsIlxudmFyIHRlbXBsYXRlID0gXCI8dGFibGUgY2xhc3M9XFxcInRhYmxlLWRpcmVjdG9yc1xcXCI+XFxuICA8dGhlYWQgY2xhc3M9XFxcInRhYmxlLWhlYWRlclxcXCI+XFxuICAgIDx0aCBuZy1yZXBlYXQ9XFxcImhlYWRlciBpbiBoZWFkZXJzXFxcIj5cXG4gICAgICB7e2hlYWRlci5uYW1lfX1cXG4gICAgPC90aD5cXG4gIDwvdGhlYWQ+XFxuICA8dGJvZHk+XFxuICAgIDx0ciBuZy1yZXBlYXQ9XFxcInJvdyBpbiBjb250ZW50XFxcIiBuZy1jbGljaz1cXFwidGFibGVDdHJsLmdvVG9EZXRhaWwoJGluZGV4LCBkZXRhaWxzKVxcXCI+XFxuICAgICAgPHRkIG5nLXJlcGVhdD1cXFwiYXR0cmlidXRlIGluIHJvd1xcXCIgY2xhc3M9XFxcImRpcmVjdG9yLWF0dHJcXFwiPlxcbiAgICAgICAge3thdHRyaWJ1dGV9fVxcbiAgICAgIDwvdGQ+XFxuICAgIDwvdHI+XFxuICA8L3Rib2R5PlxcbjwvdGFibGU+XFxuXCI7XG5cbnZhciBUYWJsZURpcmVjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRycykge1xuICAgICAgc2NvcGUuZGV0YWlscyA9IGF0dHJzLmRldGFpbHM7XG4gICAgfSxcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoJGxvY2F0aW9uKSB7XG4gICAgICB0aGlzLmdvVG9EZXRhaWwgPSBmdW5jdGlvbiAoJGRpcmVjdG9ySWQsIGRldGFpbHMpIHtcbiAgICAgICAgJGxvY2F0aW9uLnVybChkZXRhaWxzICsgJy8nICsgJGRpcmVjdG9ySWQpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgY29udHJvbGxlckFzOiAndGFibGVDdHJsJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgc2NvcGU6IHtcbiAgICAgIGhlYWRlcnM6IFwiPVwiLFxuICAgICAgY29udGVudDogXCI9XCIsXG4gICAgICBkZXRhaWxzOiBcIkBcIlxuICAgIH1cbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGFibGVEaXJlY3RpdmU7XG4iXX0=
