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
    "id": 0,
    "name": "Pedro Almodóvar",
    "sex": "M",
    "nationality": "Spanish",
    "city": "Almería",
    "dob": -639535067,
    "age": 66,
    "blockbuster": "Todo sobre mi madre"
  }, {
    "id": 1,
    "name": "Giuseppe Tornatore",
    "sex": "M",
    "nationality": "Italian",
    "city": "Bagheria",
    "dob": -429064667,
    "age": 59,
    "blockbuster": "Cinema paradiso"
  }, {
    "id": 2,
    "name": "Sofia Coppola",
    "sex": "F",
    "nationality": "American",
    "city": "New York",
    "dob": 43111333,
    "age": 44,
    "blockbuster": "Lost in translation"
  }, {
    "id": 3,
    "name": "Luc Besson",
    "sex": "M",
    "nationality": "French",
    "city": "Paris",
    "dob": -340504667,
    "age": 59,
    "blockbuster": "Léon"
  }, {
    "id": 4,
    "name": "Alfred Hitchcock",
    "sex": "M",
    "nationality": "British",
    "city": "London",
    "dob": -2221087067,
    "age": "dead",
    "blockbuster": "Psicosis"
  }, {
    "id": 5,
    "name": "Lucía Puenzo",
    "sex": "F",
    "nationality": "Argentinian",
    "city": "Buenos Aires",
    "dob": 218071333,
    "age": 38,
    "blockbuster": "Wakolda"
  }, {
    "id": 6,
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

var template = "<table class=\"table-directors\">\n  <thead class=\"table-header\">\n    <th ng-repeat=\"header in headers\">\n      {{header.name}}\n    </th>\n  </thead>\n  <tbody>\n    <tr ng-repeat=\"row in content\">\n      <td ng-repeat=\"attribute in row\" class=\"director-attr\">\n        <button ng-show=\"attribute.isButton\" ng-click=\"attribute.click(row)\">x</button>\n        <span ng-hide=\"attribute.isOptions\"  ng-click=\"tableCtrl.goToDetail($index, details)\">{{attribute}}</span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n";

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwibm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJzcmMvY29udHJvbGxlcnMvZGlyZWN0b3JzL0RpcmVjdG9yc0N0cmwuanMiLCJzcmMvY29udHJvbGxlcnMvZGlyZWN0b3JzL2RldGFpbHMvRGlyZWN0b3JEZXRhaWxDdHJsLmpzIiwic3JjL2NvbnRyb2xsZXJzL2RpcmVjdG9ycy9kZXRhaWxzL2RpcmVjdG9yLmpzb24iLCJzcmMvY29udHJvbGxlcnMvZGlyZWN0b3JzL2RpcmVjdG9ycy5qc29uIiwic3JjL2RpcmVjdGl2ZXMvbWRUYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25PQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcbi8qKlxuICogVGVtcGxhdGVzXG4gKi9cblxudmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG52YXIgZGlyZWN0b3JzID0gXCI8aDI+RGlyZWN0b3IgTGlzdDwvaDI+XFxuPGRpcmVjdG9yLXRhYmxlIGhlYWRlcnM9XFxcImhlYWRlcnNcXFwiIGNvbnRlbnQ9XFxcImNvbnRlbnRcXFwiIGRldGFpbHM9XFxcIi9kaXJlY3RvcnNcXFwiPjwvZGlyZWN0b3ItdGFibGU+XFxuXCI7XG52YXIgZGlyZWN0b3JEZXRhaWwgPSBcIjxkaXYgbGF5b3V0PVxcXCJyb3dcXFwiIGNsYXNzPVxcXCJkaXJlY3Rvci1kZXRhaWxcXFwiPlxcbiAgPGRpdiBmbGV4PVxcXCIzM1xcXCI+XFxuICAgIDxpbWcgc3JjPVxcXCJ7e2RpcmVjdG9yLmltYWdlfX1cXFwiIGNsYXNzPVxcXCJpbWFnZS1kaXJlY3RvclxcXCI+XFxuICA8L2Rpdj5cXG4gIDxkaXYgZmxleD1cXFwiNjZcXFwiIGNsYXNzPVxcXCJkaXJlY3Rvci1kZXNjcmlwdGlvblxcXCI+XFxuICAgIDxoMj5EaXJlY3RvciBkZXRhaWxzPC9oMj5cXG4gICAgPHA+e3tkaXJlY3Rvci5iaW99fTwvcD5cXG4gICAgPHVsPlxcbiAgICAgIDxsaT48c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPkZ1bGwgTmFtZTogPC9zcGFuPjxzcGFuPnt7ZGlyZWN0b3IuZnVsbE5hbWV9fTwvc3Bhbj48L2xpPlxcbiAgICAgIDxsaT48c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlNleDogPC9zcGFuPjxzcGFuPnt7ZGlyZWN0b3Iuc2V4fX08L3NwYW4+PC9saT5cXG4gICAgICA8bGk+PHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5OYXRpb25hbGl0eTogPC9zcGFuPjxzcGFuPnt7ZGlyZWN0b3IubmF0aW9uYWxpdHl9fTwvc3Bhbj48L2xpPlxcbiAgICAgIDxsaT48c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPlN0YXRlOiA8L3NwYW4+PHNwYW4+e3tkaXJlY3Rvci5zdGF0ZX19PC9zcGFuPjwvbGk+XFxuICAgICAgPGxpPjxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+Q2l0eTogPC9zcGFuPjxzcGFuPnt7ZGlyZWN0b3IuY2l0eX19PC9zcGFuPjwvbGk+XFxuICAgICAgPGxpPjxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+RG9iOiA8L3NwYW4+PHNwYW4+e3tkaXJlY3Rvci5kb2J9fTwvc3Bhbj48L2xpPlxcbiAgICAgIDxsaT48c3BhbiBjbGFzcz1cXFwiZGVzY3JpcHRpb25cXFwiPkFnZTogPC9zcGFuPjxzcGFuPnt7ZGlyZWN0b3IuYWdlfX08L3NwYW4+PC9saT5cXG4gICAgICA8bGk+PHNwYW4gY2xhc3M9XFxcImRlc2NyaXB0aW9uXFxcIj5TcG91c2U6IDwvc3Bhbj48c3Bhbj57e2RpcmVjdG9yLnNwb3VzZX19PC9zcGFuPjwvbGk+XFxuICAgIDwvdWw+XFxuICAgIDxzcGFuPkJsb2NrQnVzdGVyczogPC9zcGFuPlxcbiAgICA8dWw+XFxuICAgICAgPGxpIG5nLXJlcGVhdD1cXFwiYmxvY2tidXN0ZXIgaW4gZGlyZWN0b3IuYmxvY2tidXN0ZXJzXFxcIj5cXG4gICAgICAgIDxzcGFuPnt7YmxvY2tidXN0ZXIucmVsZWFzZX19IC0ge3tibG9ja2J1c3Rlci5tb3ZpZU5hbWV9fTwvc3Bhbj5cXG4gICAgICA8L2xpPlxcbiAgICA8L3VsPlxcbiAgICA8ZGl2IG5nLXJlcGVhdD1cXFwiYmxvY2tidXN0ZXIgaW4gYmxvY2tidXN0ZXJzXFxcIj57e2RpcmVjdG9yLmJsb2NrYnVzdGVyLm1vdmllTmFtZX19IHt7ZGlyZWN0b3IuYmxvY2tidXN0ZXIucmVsZWFzZX19PC9kaXY+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJkZXNjcmlwdGlvblxcXCI+Q2hpbGRyZW48L3NwYW4+XFxuICAgIDxkaXYgbmctcmVwZWF0PVxcXCJjaGlsZCBpbiBkaXJlY3Rvci5jaGlsZHJlblxcXCI+e3tjaGlsZH19PC9kaXY+XFxuICA8L2Rpdj5cXG48L2Rpdj5cXG48ZGl2PlxcbiAgPGEgaHJlZj1cXFwiIy9kaXJlY3RvcnNcXFwiPiZsdCBCYWNrIERpcmVjdG9yIExpc3Q8L2E+XFxuPC9kaXY+XFxuXCI7XG5cbi8qKlxuICogRGlyZWN0b3JzIGFwcGxpY2F0aW9uXG4gKi9cbmdsb2JhbC5BcHAgPSBhbmd1bGFyLm1vZHVsZSgnZGlyZWN0b3JzJywgW1xuICAnbmdNYXRlcmlhbCcsXG4gICduZ1JvdXRlJ1xuXSkuY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcbiAgJHJvdXRlUHJvdmlkZXJcbiAgLndoZW4oJy8nLCB7XG4gICAgY29udHJvbGxlcjogJ0RpcmVjdG9yc0N0cmwnLFxuICAgIHRlbXBsYXRlOiBkaXJlY3RvcnNcbiAgfSlcbiAgLndoZW4oJy9kaXJlY3RvcnMnLCB7XG4gICAgY29udHJvbGxlcjogJ0RpcmVjdG9yc0N0cmwnLFxuICAgIHRlbXBsYXRlOiBkaXJlY3RvcnNcbiAgfSlcbiAgLndoZW4oJy9kaXJlY3RvcnMvOmRpcmVjdG9yJywge1xuICAgIGNvbnRyb2xsZXI6ICdEaXJlY3RvckRldGFpbCcsXG4gICAgdGVtcGxhdGU6IGRpcmVjdG9yRGV0YWlsXG4gIH0pO1xufSk7XG5yZXF1aXJlKCcuL2RpcmVjdGl2ZXMvbWRUYWJsZScpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9kaXJlY3RvcnMvRGlyZWN0b3JzQ3RybCcpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycy9kaXJlY3RvcnMvZGV0YWlscy9EaXJlY3RvckRldGFpbEN0cmwnKTtcblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aGNIQXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeW9xWEc0Z0tpQlVaVzF3YkdGMFpYTmNiaUFxTDF4dVhHNTJZWElnY0dGMGFDQTlJSEpsY1hWcGNtVW9KM0JoZEdnbktUdGNiblpoY2lCa2FYSmxZM1J2Y25NZ1BTQmNJanhvTWo1RWFYSmxZM1J2Y2lCTWFYTjBQQzlvTWo1Y1hHNDhaR2x5WldOMGIzSXRkR0ZpYkdVZ2FHVmhaR1Z5Y3oxY1hGd2lhR1ZoWkdWeWMxeGNYQ0lnWTI5dWRHVnVkRDFjWEZ3aVkyOXVkR1Z1ZEZ4Y1hDSWdaR1YwWVdsc2N6MWNYRndpTDJScGNtVmpkRzl5YzF4Y1hDSStQQzlrYVhKbFkzUnZjaTEwWVdKc1pUNWNYRzVjSWp0Y2JuWmhjaUJrYVhKbFkzUnZja1JsZEdGcGJDQTlJRndpUEdScGRpQnNZWGx2ZFhROVhGeGNJbkp2ZDF4Y1hDSWdZMnhoYzNNOVhGeGNJbVJwY21WamRHOXlMV1JsZEdGcGJGeGNYQ0krWEZ4dUlDQThaR2wySUdac1pYZzlYRnhjSWpNelhGeGNJajVjWEc0Z0lDQWdQR2x0WnlCemNtTTlYRnhjSW50N1pHbHlaV04wYjNJdWFXMWhaMlY5ZlZ4Y1hDSWdZMnhoYzNNOVhGeGNJbWx0WVdkbExXUnBjbVZqZEc5eVhGeGNJajVjWEc0Z0lEd3ZaR2wyUGx4Y2JpQWdQR1JwZGlCbWJHVjRQVnhjWENJMk5seGNYQ0lnWTJ4aGMzTTlYRnhjSW1ScGNtVmpkRzl5TFdSbGMyTnlhWEIwYVc5dVhGeGNJajVjWEc0Z0lDQWdQR2d5UGtScGNtVmpkRzl5SUdSbGRHRnBiSE04TDJneVBseGNiaUFnSUNBOGNENTdlMlJwY21WamRHOXlMbUpwYjMxOVBDOXdQbHhjYmlBZ0lDQThkV3crWEZ4dUlDQWdJQ0FnUEd4cFBqeHpjR0Z1SUdOc1lYTnpQVnhjWENKa1pYTmpjbWx3ZEdsdmJseGNYQ0krUm5Wc2JDQk9ZVzFsT2lBOEwzTndZVzQrUEhOd1lXNCtlM3RrYVhKbFkzUnZjaTVtZFd4c1RtRnRaWDE5UEM5emNHRnVQand2YkdrK1hGeHVJQ0FnSUNBZ1BHeHBQanh6Y0dGdUlHTnNZWE56UFZ4Y1hDSmtaWE5qY21sd2RHbHZibHhjWENJK1UyVjRPaUE4TDNOd1lXNCtQSE53WVc0K2UzdGthWEpsWTNSdmNpNXpaWGg5ZlR3dmMzQmhiajQ4TDJ4cFBseGNiaUFnSUNBZ0lEeHNhVDQ4YzNCaGJpQmpiR0Z6Y3oxY1hGd2laR1Z6WTNKcGNIUnBiMjVjWEZ3aVBrNWhkR2x2Ym1Gc2FYUjVPaUE4TDNOd1lXNCtQSE53WVc0K2UzdGthWEpsWTNSdmNpNXVZWFJwYjI1aGJHbDBlWDE5UEM5emNHRnVQand2YkdrK1hGeHVJQ0FnSUNBZ1BHeHBQanh6Y0dGdUlHTnNZWE56UFZ4Y1hDSmtaWE5qY21sd2RHbHZibHhjWENJK1UzUmhkR1U2SUR3dmMzQmhiajQ4YzNCaGJqNTdlMlJwY21WamRHOXlMbk4wWVhSbGZYMDhMM053WVc0K1BDOXNhVDVjWEc0Z0lDQWdJQ0E4YkdrK1BITndZVzRnWTJ4aGMzTTlYRnhjSW1SbGMyTnlhWEIwYVc5dVhGeGNJajVEYVhSNU9pQThMM053WVc0K1BITndZVzQrZTN0a2FYSmxZM1J2Y2k1amFYUjVmWDA4TDNOd1lXNCtQQzlzYVQ1Y1hHNGdJQ0FnSUNBOGJHaytQSE53WVc0Z1kyeGhjM005WEZ4Y0ltUmxjMk55YVhCMGFXOXVYRnhjSWo1RWIySTZJRHd2YzNCaGJqNDhjM0JoYmo1N2UyUnBjbVZqZEc5eUxtUnZZbjE5UEM5emNHRnVQand2YkdrK1hGeHVJQ0FnSUNBZ1BHeHBQanh6Y0dGdUlHTnNZWE56UFZ4Y1hDSmtaWE5qY21sd2RHbHZibHhjWENJK1FXZGxPaUE4TDNOd1lXNCtQSE53WVc0K2UzdGthWEpsWTNSdmNpNWhaMlY5ZlR3dmMzQmhiajQ4TDJ4cFBseGNiaUFnSUNBZ0lEeHNhVDQ4YzNCaGJpQmpiR0Z6Y3oxY1hGd2laR1Z6WTNKcGNIUnBiMjVjWEZ3aVBsTndiM1Z6WlRvZ1BDOXpjR0Z1UGp4emNHRnVQbnQ3WkdseVpXTjBiM0l1YzNCdmRYTmxmWDA4TDNOd1lXNCtQQzlzYVQ1Y1hHNGdJQ0FnUEM5MWJENWNYRzRnSUNBZ1BITndZVzQrUW14dlkydENkWE4wWlhKek9pQThMM053WVc0K1hGeHVJQ0FnSUR4MWJENWNYRzRnSUNBZ0lDQThiR2tnYm1jdGNtVndaV0YwUFZ4Y1hDSmliRzlqYTJKMWMzUmxjaUJwYmlCa2FYSmxZM1J2Y2k1aWJHOWphMkoxYzNSbGNuTmNYRndpUGx4Y2JpQWdJQ0FnSUNBZ1BITndZVzQrZTN0aWJHOWphMkoxYzNSbGNpNXlaV3hsWVhObGZYMGdMU0I3ZTJKc2IyTnJZblZ6ZEdWeUxtMXZkbWxsVG1GdFpYMTlQQzl6Y0dGdVBseGNiaUFnSUNBZ0lEd3ZiR2srWEZ4dUlDQWdJRHd2ZFd3K1hGeHVJQ0FnSUR4a2FYWWdibWN0Y21Wd1pXRjBQVnhjWENKaWJHOWphMkoxYzNSbGNpQnBiaUJpYkc5amEySjFjM1JsY25OY1hGd2lQbnQ3WkdseVpXTjBiM0l1WW14dlkydGlkWE4wWlhJdWJXOTJhV1ZPWVcxbGZYMGdlM3RrYVhKbFkzUnZjaTVpYkc5amEySjFjM1JsY2k1eVpXeGxZWE5sZlgwOEwyUnBkajVjWEc0Z0lDQWdQSE53WVc0Z1kyeGhjM005WEZ4Y0ltUmxjMk55YVhCMGFXOXVYRnhjSWo1RGFHbHNaSEpsYmp3dmMzQmhiajVjWEc0Z0lDQWdQR1JwZGlCdVp5MXlaWEJsWVhROVhGeGNJbU5vYVd4a0lHbHVJR1JwY21WamRHOXlMbU5vYVd4a2NtVnVYRnhjSWo1N2UyTm9hV3hrZlgwOEwyUnBkajVjWEc0Z0lEd3ZaR2wyUGx4Y2Jqd3ZaR2wyUGx4Y2JqeGthWFkrWEZ4dUlDQThZU0JvY21WbVBWeGNYQ0lqTDJScGNtVmpkRzl5YzF4Y1hDSStKbXgwSUVKaFkyc2dSR2x5WldOMGIzSWdUR2x6ZER3dllUNWNYRzQ4TDJScGRqNWNYRzVjSWp0Y2JseHVMeW9xWEc0Z0tpQkVhWEpsWTNSdmNuTWdZWEJ3YkdsallYUnBiMjVjYmlBcUwxeHVaMnh2WW1Gc0xrRndjQ0E5SUdGdVozVnNZWEl1Ylc5a2RXeGxLQ2RrYVhKbFkzUnZjbk1uTENCYlhHNGdJQ2R1WjAxaGRHVnlhV0ZzSnl4Y2JpQWdKMjVuVW05MWRHVW5YRzVkS1M1amIyNW1hV2NvWm5WdVkzUnBiMjRnS0NSeWIzVjBaVkJ5YjNacFpHVnlMQ0FrYkc5allYUnBiMjVRY205MmFXUmxjaWtnZTF4dUlDQWtjbTkxZEdWUWNtOTJhV1JsY2x4dUlDQXVkMmhsYmlnbkx5Y3NJSHRjYmlBZ0lDQmpiMjUwY205c2JHVnlPaUFuUkdseVpXTjBiM0p6UTNSeWJDY3NYRzRnSUNBZ2RHVnRjR3hoZEdVNklHUnBjbVZqZEc5eWMxeHVJQ0I5S1Z4dUlDQXVkMmhsYmlnbkwyUnBjbVZqZEc5eWN5Y3NJSHRjYmlBZ0lDQmpiMjUwY205c2JHVnlPaUFuUkdseVpXTjBiM0p6UTNSeWJDY3NYRzRnSUNBZ2RHVnRjR3hoZEdVNklHUnBjbVZqZEc5eWMxeHVJQ0I5S1Z4dUlDQXVkMmhsYmlnbkwyUnBjbVZqZEc5eWN5ODZaR2x5WldOMGIzSW5MQ0I3WEc0Z0lDQWdZMjl1ZEhKdmJHeGxjam9nSjBScGNtVmpkRzl5UkdWMFlXbHNKeXhjYmlBZ0lDQjBaVzF3YkdGMFpUb2daR2x5WldOMGIzSkVaWFJoYVd4Y2JpQWdmU2s3WEc1OUtUdGNibkpsY1hWcGNtVW9KeTR2WkdseVpXTjBhWFpsY3k5dFpGUmhZbXhsSnlrN1hHNXlaWEYxYVhKbEtDY3VMMk52Ym5SeWIyeHNaWEp6TDJScGNtVmpkRzl5Y3k5RWFYSmxZM1J2Y25ORGRISnNKeWs3WEc1eVpYRjFhWEpsS0NjdUwyTnZiblJ5YjJ4c1pYSnpMMlJwY21WamRHOXljeTlrWlhSaGFXeHpMMFJwY21WamRHOXlSR1YwWVdsc1EzUnliQ2NwTzF4dUlsMTkiLCIoZnVuY3Rpb24gKHByb2Nlc3Mpe1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gU3BsaXQgYSBmaWxlbmFtZSBpbnRvIFtyb290LCBkaXIsIGJhc2VuYW1lLCBleHRdLCB1bml4IHZlcnNpb25cbi8vICdyb290JyBpcyBqdXN0IGEgc2xhc2gsIG9yIG5vdGhpbmcuXG52YXIgc3BsaXRQYXRoUmUgPVxuICAgIC9eKFxcLz98KShbXFxzXFxTXSo/KSgoPzpcXC57MSwyfXxbXlxcL10rP3wpKFxcLlteLlxcL10qfCkpKD86W1xcL10qKSQvO1xudmFyIHNwbGl0UGF0aCA9IGZ1bmN0aW9uKGZpbGVuYW1lKSB7XG4gIHJldHVybiBzcGxpdFBhdGhSZS5leGVjKGZpbGVuYW1lKS5zbGljZSgxKTtcbn07XG5cbi8vIHBhdGgucmVzb2x2ZShbZnJvbSAuLi5dLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzb2x2ZWRQYXRoID0gJycsXG4gICAgICByZXNvbHZlZEFic29sdXRlID0gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpID49IC0xICYmICFyZXNvbHZlZEFic29sdXRlOyBpLS0pIHtcbiAgICB2YXIgcGF0aCA9IChpID49IDApID8gYXJndW1lbnRzW2ldIDogcHJvY2Vzcy5jd2QoKTtcblxuICAgIC8vIFNraXAgZW1wdHkgYW5kIGludmFsaWQgZW50cmllc1xuICAgIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLnJlc29sdmUgbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfSBlbHNlIGlmICghcGF0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzb2x2ZWRQYXRoID0gcGF0aCArICcvJyArIHJlc29sdmVkUGF0aDtcbiAgICByZXNvbHZlZEFic29sdXRlID0gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbiAgfVxuXG4gIC8vIEF0IHRoaXMgcG9pbnQgdGhlIHBhdGggc2hvdWxkIGJlIHJlc29sdmVkIHRvIGEgZnVsbCBhYnNvbHV0ZSBwYXRoLCBidXRcbiAgLy8gaGFuZGxlIHJlbGF0aXZlIHBhdGhzIHRvIGJlIHNhZmUgKG1pZ2h0IGhhcHBlbiB3aGVuIHByb2Nlc3MuY3dkKCkgZmFpbHMpXG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHJlc29sdmVkUGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihyZXNvbHZlZFBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhcmVzb2x2ZWRBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIHJldHVybiAoKHJlc29sdmVkQWJzb2x1dGUgPyAnLycgOiAnJykgKyByZXNvbHZlZFBhdGgpIHx8ICcuJztcbn07XG5cbi8vIHBhdGgubm9ybWFsaXplKHBhdGgpXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIGlzQWJzb2x1dGUgPSBleHBvcnRzLmlzQWJzb2x1dGUocGF0aCksXG4gICAgICB0cmFpbGluZ1NsYXNoID0gc3Vic3RyKHBhdGgsIC0xKSA9PT0gJy8nO1xuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICBwYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHBhdGguc3BsaXQoJy8nKSwgZnVuY3Rpb24ocCkge1xuICAgIHJldHVybiAhIXA7XG4gIH0pLCAhaXNBYnNvbHV0ZSkuam9pbignLycpO1xuXG4gIGlmICghcGF0aCAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHBhdGggPSAnLic7XG4gIH1cbiAgaWYgKHBhdGggJiYgdHJhaWxpbmdTbGFzaCkge1xuICAgIHBhdGggKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIChpc0Fic29sdXRlID8gJy8nIDogJycpICsgcGF0aDtcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuaXNBYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLyc7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmpvaW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgcmV0dXJuIGV4cG9ydHMubm9ybWFsaXplKGZpbHRlcihwYXRocywgZnVuY3Rpb24ocCwgaW5kZXgpIHtcbiAgICBpZiAodHlwZW9mIHAgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5qb2luIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH1cbiAgICByZXR1cm4gcDtcbiAgfSkuam9pbignLycpKTtcbn07XG5cblxuLy8gcGF0aC5yZWxhdGl2ZShmcm9tLCB0bylcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMucmVsYXRpdmUgPSBmdW5jdGlvbihmcm9tLCB0bykge1xuICBmcm9tID0gZXhwb3J0cy5yZXNvbHZlKGZyb20pLnN1YnN0cigxKTtcbiAgdG8gPSBleHBvcnRzLnJlc29sdmUodG8pLnN1YnN0cigxKTtcblxuICBmdW5jdGlvbiB0cmltKGFycikge1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgZm9yICg7IHN0YXJ0IDwgYXJyLmxlbmd0aDsgc3RhcnQrKykge1xuICAgICAgaWYgKGFycltzdGFydF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICB2YXIgZW5kID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGVuZCA+PSAwOyBlbmQtLSkge1xuICAgICAgaWYgKGFycltlbmRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0ID4gZW5kKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGFyci5zbGljZShzdGFydCwgZW5kIC0gc3RhcnQgKyAxKTtcbiAgfVxuXG4gIHZhciBmcm9tUGFydHMgPSB0cmltKGZyb20uc3BsaXQoJy8nKSk7XG4gIHZhciB0b1BhcnRzID0gdHJpbSh0by5zcGxpdCgnLycpKTtcblxuICB2YXIgbGVuZ3RoID0gTWF0aC5taW4oZnJvbVBhcnRzLmxlbmd0aCwgdG9QYXJ0cy5sZW5ndGgpO1xuICB2YXIgc2FtZVBhcnRzTGVuZ3RoID0gbGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGZyb21QYXJ0c1tpXSAhPT0gdG9QYXJ0c1tpXSkge1xuICAgICAgc2FtZVBhcnRzTGVuZ3RoID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHZhciBvdXRwdXRQYXJ0cyA9IFtdO1xuICBmb3IgKHZhciBpID0gc2FtZVBhcnRzTGVuZ3RoOyBpIDwgZnJvbVBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgb3V0cHV0UGFydHMucHVzaCgnLi4nKTtcbiAgfVxuXG4gIG91dHB1dFBhcnRzID0gb3V0cHV0UGFydHMuY29uY2F0KHRvUGFydHMuc2xpY2Uoc2FtZVBhcnRzTGVuZ3RoKSk7XG5cbiAgcmV0dXJuIG91dHB1dFBhcnRzLmpvaW4oJy8nKTtcbn07XG5cbmV4cG9ydHMuc2VwID0gJy8nO1xuZXhwb3J0cy5kZWxpbWl0ZXIgPSAnOic7XG5cbmV4cG9ydHMuZGlybmFtZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgdmFyIHJlc3VsdCA9IHNwbGl0UGF0aChwYXRoKSxcbiAgICAgIHJvb3QgPSByZXN1bHRbMF0sXG4gICAgICBkaXIgPSByZXN1bHRbMV07XG5cbiAgaWYgKCFyb290ICYmICFkaXIpIHtcbiAgICAvLyBObyBkaXJuYW1lIHdoYXRzb2V2ZXJcbiAgICByZXR1cm4gJy4nO1xuICB9XG5cbiAgaWYgKGRpcikge1xuICAgIC8vIEl0IGhhcyBhIGRpcm5hbWUsIHN0cmlwIHRyYWlsaW5nIHNsYXNoXG4gICAgZGlyID0gZGlyLnN1YnN0cigwLCBkaXIubGVuZ3RoIC0gMSk7XG4gIH1cblxuICByZXR1cm4gcm9vdCArIGRpcjtcbn07XG5cblxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IHNwbGl0UGF0aChwYXRoKVsyXTtcbiAgLy8gVE9ETzogbWFrZSB0aGlzIGNvbXBhcmlzb24gY2FzZS1pbnNlbnNpdGl2ZSBvbiB3aW5kb3dzP1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuXG5leHBvcnRzLmV4dG5hbWUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBzcGxpdFBhdGgocGF0aClbM107XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpKVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWljbTkzYzJWeWFXWjVMMjV2WkdWZmJXOWtkV3hsY3k5d1lYUm9MV0p5YjNkelpYSnBabmt2YVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5OGdRMjl3ZVhKcFoyaDBJRXB2ZVdWdWRDd2dTVzVqTGlCaGJtUWdiM1JvWlhJZ1RtOWtaU0JqYjI1MGNtbGlkWFJ2Y25NdVhHNHZMMXh1THk4Z1VHVnliV2x6YzJsdmJpQnBjeUJvWlhKbFlua2daM0poYm5SbFpDd2dabkpsWlNCdlppQmphR0Z5WjJVc0lIUnZJR0Z1ZVNCd1pYSnpiMjRnYjJKMFlXbHVhVzVuSUdGY2JpOHZJR052Y0hrZ2IyWWdkR2hwY3lCemIyWjBkMkZ5WlNCaGJtUWdZWE56YjJOcFlYUmxaQ0JrYjJOMWJXVnVkR0YwYVc5dUlHWnBiR1Z6SUNoMGFHVmNiaTh2SUZ3aVUyOW1kSGRoY21WY0lpa3NJSFJ2SUdSbFlXd2dhVzRnZEdobElGTnZablIzWVhKbElIZHBkR2h2ZFhRZ2NtVnpkSEpwWTNScGIyNHNJR2x1WTJ4MVpHbHVaMXh1THk4Z2QybDBhRzkxZENCc2FXMXBkR0YwYVc5dUlIUm9aU0J5YVdkb2RITWdkRzhnZFhObExDQmpiM0I1TENCdGIyUnBabmtzSUcxbGNtZGxMQ0J3ZFdKc2FYTm9MRnh1THk4Z1pHbHpkSEpwWW5WMFpTd2djM1ZpYkdsalpXNXpaU3dnWVc1a0wyOXlJSE5sYkd3Z1kyOXdhV1Z6SUc5bUlIUm9aU0JUYjJaMGQyRnlaU3dnWVc1a0lIUnZJSEJsY20xcGRGeHVMeThnY0dWeWMyOXVjeUIwYnlCM2FHOXRJSFJvWlNCVGIyWjBkMkZ5WlNCcGN5Qm1kWEp1YVhOb1pXUWdkRzhnWkc4Z2MyOHNJSE4xWW1wbFkzUWdkRzhnZEdobFhHNHZMeUJtYjJ4c2IzZHBibWNnWTI5dVpHbDBhVzl1Y3pwY2JpOHZYRzR2THlCVWFHVWdZV0p2ZG1VZ1kyOXdlWEpwWjJoMElHNXZkR2xqWlNCaGJtUWdkR2hwY3lCd1pYSnRhWE56YVc5dUlHNXZkR2xqWlNCemFHRnNiQ0JpWlNCcGJtTnNkV1JsWkZ4dUx5OGdhVzRnWVd4c0lHTnZjR2xsY3lCdmNpQnpkV0p6ZEdGdWRHbGhiQ0J3YjNKMGFXOXVjeUJ2WmlCMGFHVWdVMjltZEhkaGNtVXVYRzR2TDF4dUx5OGdWRWhGSUZOUFJsUlhRVkpGSUVsVElGQlNUMVpKUkVWRUlGd2lRVk1nU1ZOY0lpd2dWMGxVU0U5VlZDQlhRVkpTUVU1VVdTQlBSaUJCVGxrZ1MwbE9SQ3dnUlZoUVVrVlRVMXh1THk4Z1QxSWdTVTFRVEVsRlJDd2dTVTVEVEZWRVNVNUhJRUpWVkNCT1QxUWdURWxOU1ZSRlJDQlVUeUJVU0VVZ1YwRlNVa0ZPVkVsRlV5QlBSbHh1THk4Z1RVVlNRMGhCVGxSQlFrbE1TVlJaTENCR1NWUk9SVk5USUVaUFVpQkJJRkJCVWxSSlExVk1RVklnVUZWU1VFOVRSU0JCVGtRZ1RrOU9TVTVHVWtsT1IwVk5SVTVVTGlCSlRseHVMeThnVGs4Z1JWWkZUbFFnVTBoQlRFd2dWRWhGSUVGVlZFaFBVbE1nVDFJZ1EwOVFXVkpKUjBoVUlFaFBURVJGVWxNZ1FrVWdURWxCUWt4RklFWlBVaUJCVGxrZ1EweEJTVTBzWEc0dkx5QkVRVTFCUjBWVElFOVNJRTlVU0VWU0lFeEpRVUpKVEVsVVdTd2dWMGhGVkVoRlVpQkpUaUJCVGlCQlExUkpUMDRnVDBZZ1EwOU9WRkpCUTFRc0lGUlBVbFFnVDFKY2JpOHZJRTlVU0VWU1YwbFRSU3dnUVZKSlUwbE9SeUJHVWs5TkxDQlBWVlFnVDBZZ1QxSWdTVTRnUTA5T1RrVkRWRWxQVGlCWFNWUklJRlJJUlNCVFQwWlVWMEZTUlNCUFVpQlVTRVZjYmk4dklGVlRSU0JQVWlCUFZFaEZVaUJFUlVGTVNVNUhVeUJKVGlCVVNFVWdVMDlHVkZkQlVrVXVYRzVjYmk4dklISmxjMjlzZG1WeklDNGdZVzVrSUM0dUlHVnNaVzFsYm5SeklHbHVJR0VnY0dGMGFDQmhjbkpoZVNCM2FYUm9JR1JwY21WamRHOXllU0J1WVcxbGN5QjBhR1Z5WlZ4dUx5OGdiWFZ6ZENCaVpTQnVieUJ6YkdGemFHVnpMQ0JsYlhCMGVTQmxiR1Z0Wlc1MGN5d2diM0lnWkdWMmFXTmxJRzVoYldWeklDaGpPbHhjS1NCcGJpQjBhR1VnWVhKeVlYbGNiaTh2SUNoemJ5QmhiSE52SUc1dklHeGxZV1JwYm1jZ1lXNWtJSFJ5WVdsc2FXNW5JSE5zWVhOb1pYTWdMU0JwZENCa2IyVnpJRzV2ZENCa2FYTjBhVzVuZFdsemFGeHVMeThnY21Wc1lYUnBkbVVnWVc1a0lHRmljMjlzZFhSbElIQmhkR2h6S1Z4dVpuVnVZM1JwYjI0Z2JtOXliV0ZzYVhwbFFYSnlZWGtvY0dGeWRITXNJR0ZzYkc5M1FXSnZkbVZTYjI5MEtTQjdYRzRnSUM4dklHbG1JSFJvWlNCd1lYUm9JSFJ5YVdWeklIUnZJR2R2SUdGaWIzWmxJSFJvWlNCeWIyOTBMQ0JnZFhCZ0lHVnVaSE1nZFhBZ1BpQXdYRzRnSUhaaGNpQjFjQ0E5SURBN1hHNGdJR1p2Y2lBb2RtRnlJR2tnUFNCd1lYSjBjeTVzWlc1bmRHZ2dMU0F4T3lCcElENDlJREE3SUdrdExTa2dlMXh1SUNBZ0lIWmhjaUJzWVhOMElEMGdjR0Z5ZEhOYmFWMDdYRzRnSUNBZ2FXWWdLR3hoYzNRZ1BUMDlJQ2N1SnlrZ2UxeHVJQ0FnSUNBZ2NHRnlkSE11YzNCc2FXTmxLR2tzSURFcE8xeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2JHRnpkQ0E5UFQwZ0p5NHVKeWtnZTF4dUlDQWdJQ0FnY0dGeWRITXVjM0JzYVdObEtHa3NJREVwTzF4dUlDQWdJQ0FnZFhBckt6dGNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tIVndLU0I3WEc0Z0lDQWdJQ0J3WVhKMGN5NXpjR3hwWTJVb2FTd2dNU2s3WEc0Z0lDQWdJQ0IxY0MwdE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDOHZJR2xtSUhSb1pTQndZWFJvSUdseklHRnNiRzkzWldRZ2RHOGdaMjhnWVdKdmRtVWdkR2hsSUhKdmIzUXNJSEpsYzNSdmNtVWdiR1ZoWkdsdVp5QXVMbk5jYmlBZ2FXWWdLR0ZzYkc5M1FXSnZkbVZTYjI5MEtTQjdYRzRnSUNBZ1ptOXlJQ2c3SUhWd0xTMDdJSFZ3S1NCN1hHNGdJQ0FnSUNCd1lYSjBjeTUxYm5Ob2FXWjBLQ2N1TGljcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCd1lYSjBjenRjYm4xY2JseHVMeThnVTNCc2FYUWdZU0JtYVd4bGJtRnRaU0JwYm5SdklGdHliMjkwTENCa2FYSXNJR0poYzJWdVlXMWxMQ0JsZUhSZExDQjFibWw0SUhabGNuTnBiMjVjYmk4dklDZHliMjkwSnlCcGN5QnFkWE4wSUdFZ2MyeGhjMmdzSUc5eUlHNXZkR2hwYm1jdVhHNTJZWElnYzNCc2FYUlFZWFJvVW1VZ1BWeHVJQ0FnSUM5ZUtGeGNMejk4S1NoYlhGeHpYRnhUWFNvL0tTZ29QenBjWEM1N01Td3lmWHhiWGx4Y0wxMHJQM3dwS0Z4Y0xsdGVMbHhjTDEwcWZDa3BLRDg2VzF4Y0wxMHFLU1F2TzF4dWRtRnlJSE53YkdsMFVHRjBhQ0E5SUdaMWJtTjBhVzl1S0dacGJHVnVZVzFsS1NCN1hHNGdJSEpsZEhWeWJpQnpjR3hwZEZCaGRHaFNaUzVsZUdWaktHWnBiR1Z1WVcxbEtTNXpiR2xqWlNneEtUdGNibjA3WEc1Y2JpOHZJSEJoZEdndWNtVnpiMngyWlNoYlpuSnZiU0F1TGk1ZExDQjBieWxjYmk4dklIQnZjMmw0SUhabGNuTnBiMjVjYm1WNGNHOXlkSE11Y21WemIyeDJaU0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0IyWVhJZ2NtVnpiMngyWldSUVlYUm9JRDBnSnljc1hHNGdJQ0FnSUNCeVpYTnZiSFpsWkVGaWMyOXNkWFJsSUQwZ1ptRnNjMlU3WEc1Y2JpQWdabTl5SUNoMllYSWdhU0E5SUdGeVozVnRaVzUwY3k1c1pXNW5kR2dnTFNBeE95QnBJRDQ5SUMweElDWW1JQ0Z5WlhOdmJIWmxaRUZpYzI5c2RYUmxPeUJwTFMwcElIdGNiaUFnSUNCMllYSWdjR0YwYUNBOUlDaHBJRDQ5SURBcElEOGdZWEpuZFcxbGJuUnpXMmxkSURvZ2NISnZZMlZ6Y3k1amQyUW9LVHRjYmx4dUlDQWdJQzh2SUZOcmFYQWdaVzF3ZEhrZ1lXNWtJR2x1ZG1Gc2FXUWdaVzUwY21sbGMxeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2NHRjBhQ0FoUFQwZ0ozTjBjbWx1WnljcElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KMEZ5WjNWdFpXNTBjeUIwYnlCd1lYUm9MbkpsYzI5c2RtVWdiWFZ6ZENCaVpTQnpkSEpwYm1kekp5azdYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDZ2hjR0YwYUNrZ2UxeHVJQ0FnSUNBZ1kyOXVkR2x1ZFdVN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WemIyeDJaV1JRWVhSb0lEMGdjR0YwYUNBcklDY3ZKeUFySUhKbGMyOXNkbVZrVUdGMGFEdGNiaUFnSUNCeVpYTnZiSFpsWkVGaWMyOXNkWFJsSUQwZ2NHRjBhQzVqYUdGeVFYUW9NQ2tnUFQwOUlDY3ZKenRjYmlBZ2ZWeHVYRzRnSUM4dklFRjBJSFJvYVhNZ2NHOXBiblFnZEdobElIQmhkR2dnYzJodmRXeGtJR0psSUhKbGMyOXNkbVZrSUhSdklHRWdablZzYkNCaFluTnZiSFYwWlNCd1lYUm9MQ0JpZFhSY2JpQWdMeThnYUdGdVpHeGxJSEpsYkdGMGFYWmxJSEJoZEdoeklIUnZJR0psSUhOaFptVWdLRzFwWjJoMElHaGhjSEJsYmlCM2FHVnVJSEJ5YjJObGMzTXVZM2RrS0NrZ1ptRnBiSE1wWEc1Y2JpQWdMeThnVG05eWJXRnNhWHBsSUhSb1pTQndZWFJvWEc0Z0lISmxjMjlzZG1Wa1VHRjBhQ0E5SUc1dmNtMWhiR2w2WlVGeWNtRjVLR1pwYkhSbGNpaHlaWE52YkhabFpGQmhkR2d1YzNCc2FYUW9KeThuS1N3Z1puVnVZM1JwYjI0b2NDa2dlMXh1SUNBZ0lISmxkSFZ5YmlBaElYQTdYRzRnSUgwcExDQWhjbVZ6YjJ4MlpXUkJZbk52YkhWMFpTa3VhbTlwYmlnbkx5Y3BPMXh1WEc0Z0lISmxkSFZ5YmlBb0tISmxjMjlzZG1Wa1FXSnpiMngxZEdVZ1B5QW5MeWNnT2lBbkp5a2dLeUJ5WlhOdmJIWmxaRkJoZEdncElIeDhJQ2N1Snp0Y2JuMDdYRzVjYmk4dklIQmhkR2d1Ym05eWJXRnNhWHBsS0hCaGRHZ3BYRzR2THlCd2IzTnBlQ0IyWlhKemFXOXVYRzVsZUhCdmNuUnpMbTV2Y20xaGJHbDZaU0E5SUdaMWJtTjBhVzl1S0hCaGRHZ3BJSHRjYmlBZ2RtRnlJR2x6UVdKemIyeDFkR1VnUFNCbGVIQnZjblJ6TG1selFXSnpiMngxZEdVb2NHRjBhQ2tzWEc0Z0lDQWdJQ0IwY21GcGJHbHVaMU5zWVhOb0lEMGdjM1ZpYzNSeUtIQmhkR2dzSUMweEtTQTlQVDBnSnk4bk8xeHVYRzRnSUM4dklFNXZjbTFoYkdsNlpTQjBhR1VnY0dGMGFGeHVJQ0J3WVhSb0lEMGdibTl5YldGc2FYcGxRWEp5WVhrb1ptbHNkR1Z5S0hCaGRHZ3VjM0JzYVhRb0p5OG5LU3dnWm5WdVkzUnBiMjRvY0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUFoSVhBN1hHNGdJSDBwTENBaGFYTkJZbk52YkhWMFpTa3VhbTlwYmlnbkx5Y3BPMXh1WEc0Z0lHbG1JQ2doY0dGMGFDQW1KaUFoYVhOQlluTnZiSFYwWlNrZ2UxeHVJQ0FnSUhCaGRHZ2dQU0FuTGljN1hHNGdJSDFjYmlBZ2FXWWdLSEJoZEdnZ0ppWWdkSEpoYVd4cGJtZFRiR0Z6YUNrZ2UxeHVJQ0FnSUhCaGRHZ2dLejBnSnk4bk8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlDaHBjMEZpYzI5c2RYUmxJRDhnSnk4bklEb2dKeWNwSUNzZ2NHRjBhRHRjYm4wN1hHNWNiaTh2SUhCdmMybDRJSFpsY25OcGIyNWNibVY0Y0c5eWRITXVhWE5CWW5OdmJIVjBaU0E5SUdaMWJtTjBhVzl1S0hCaGRHZ3BJSHRjYmlBZ2NtVjBkWEp1SUhCaGRHZ3VZMmhoY2tGMEtEQXBJRDA5UFNBbkx5YzdYRzU5TzF4dVhHNHZMeUJ3YjNOcGVDQjJaWEp6YVc5dVhHNWxlSEJ2Y25SekxtcHZhVzRnUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnZG1GeUlIQmhkR2h6SUQwZ1FYSnlZWGt1Y0hKdmRHOTBlWEJsTG5Oc2FXTmxMbU5oYkd3b1lYSm5kVzFsYm5SekxDQXdLVHRjYmlBZ2NtVjBkWEp1SUdWNGNHOXlkSE11Ym05eWJXRnNhWHBsS0dacGJIUmxjaWh3WVhSb2N5d2dablZ1WTNScGIyNG9jQ3dnYVc1a1pYZ3BJSHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JSEFnSVQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RCY21kMWJXVnVkSE1nZEc4Z2NHRjBhQzVxYjJsdUlHMTFjM1FnWW1VZ2MzUnlhVzVuY3ljcE8xeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdjRHRjYmlBZ2ZTa3VhbTlwYmlnbkx5Y3BLVHRjYm4wN1hHNWNibHh1THk4Z2NHRjBhQzV5Wld4aGRHbDJaU2htY205dExDQjBieWxjYmk4dklIQnZjMmw0SUhabGNuTnBiMjVjYm1WNGNHOXlkSE11Y21Wc1lYUnBkbVVnUFNCbWRXNWpkR2x2YmlobWNtOXRMQ0IwYnlrZ2UxeHVJQ0JtY205dElEMGdaWGh3YjNKMGN5NXlaWE52YkhabEtHWnliMjBwTG5OMVluTjBjaWd4S1R0Y2JpQWdkRzhnUFNCbGVIQnZjblJ6TG5KbGMyOXNkbVVvZEc4cExuTjFZbk4wY2lneEtUdGNibHh1SUNCbWRXNWpkR2x2YmlCMGNtbHRLR0Z5Y2lrZ2UxeHVJQ0FnSUhaaGNpQnpkR0Z5ZENBOUlEQTdYRzRnSUNBZ1ptOXlJQ2c3SUhOMFlYSjBJRHdnWVhKeUxteGxibWQwYURzZ2MzUmhjblFyS3lrZ2UxeHVJQ0FnSUNBZ2FXWWdLR0Z5Y2x0emRHRnlkRjBnSVQwOUlDY25LU0JpY21WaGF6dGNiaUFnSUNCOVhHNWNiaUFnSUNCMllYSWdaVzVrSUQwZ1lYSnlMbXhsYm1kMGFDQXRJREU3WEc0Z0lDQWdabTl5SUNnN0lHVnVaQ0ErUFNBd095QmxibVF0TFNrZ2UxeHVJQ0FnSUNBZ2FXWWdLR0Z5Y2x0bGJtUmRJQ0U5UFNBbkp5a2dZbkpsWVdzN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tITjBZWEowSUQ0Z1pXNWtLU0J5WlhSMWNtNGdXMTA3WEc0Z0lDQWdjbVYwZFhKdUlHRnljaTV6YkdsalpTaHpkR0Z5ZEN3Z1pXNWtJQzBnYzNSaGNuUWdLeUF4S1R0Y2JpQWdmVnh1WEc0Z0lIWmhjaUJtY205dFVHRnlkSE1nUFNCMGNtbHRLR1p5YjIwdWMzQnNhWFFvSnk4bktTazdYRzRnSUhaaGNpQjBiMUJoY25SeklEMGdkSEpwYlNoMGJ5NXpjR3hwZENnbkx5Y3BLVHRjYmx4dUlDQjJZWElnYkdWdVozUm9JRDBnVFdGMGFDNXRhVzRvWm5KdmJWQmhjblJ6TG14bGJtZDBhQ3dnZEc5UVlYSjBjeTVzWlc1bmRHZ3BPMXh1SUNCMllYSWdjMkZ0WlZCaGNuUnpUR1Z1WjNSb0lEMGdiR1Z1WjNSb08xeHVJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUd4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ2FXWWdLR1p5YjIxUVlYSjBjMXRwWFNBaFBUMGdkRzlRWVhKMGMxdHBYU2tnZTF4dUlDQWdJQ0FnYzJGdFpWQmhjblJ6VEdWdVozUm9JRDBnYVR0Y2JpQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSFpoY2lCdmRYUndkWFJRWVhKMGN5QTlJRnRkTzF4dUlDQm1iM0lnS0haaGNpQnBJRDBnYzJGdFpWQmhjblJ6VEdWdVozUm9PeUJwSUR3Z1puSnZiVkJoY25SekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdiM1YwY0hWMFVHRnlkSE11Y0hWemFDZ25MaTRuS1R0Y2JpQWdmVnh1WEc0Z0lHOTFkSEIxZEZCaGNuUnpJRDBnYjNWMGNIVjBVR0Z5ZEhNdVkyOXVZMkYwS0hSdlVHRnlkSE11YzJ4cFkyVW9jMkZ0WlZCaGNuUnpUR1Z1WjNSb0tTazdYRzVjYmlBZ2NtVjBkWEp1SUc5MWRIQjFkRkJoY25SekxtcHZhVzRvSnk4bktUdGNibjA3WEc1Y2JtVjRjRzl5ZEhNdWMyVndJRDBnSnk4bk8xeHVaWGh3YjNKMGN5NWtaV3hwYldsMFpYSWdQU0FuT2ljN1hHNWNibVY0Y0c5eWRITXVaR2x5Ym1GdFpTQTlJR1oxYm1OMGFXOXVLSEJoZEdncElIdGNiaUFnZG1GeUlISmxjM1ZzZENBOUlITndiR2wwVUdGMGFDaHdZWFJvS1N4Y2JpQWdJQ0FnSUhKdmIzUWdQU0J5WlhOMWJIUmJNRjBzWEc0Z0lDQWdJQ0JrYVhJZ1BTQnlaWE4xYkhSYk1WMDdYRzVjYmlBZ2FXWWdLQ0Z5YjI5MElDWW1JQ0ZrYVhJcElIdGNiaUFnSUNBdkx5Qk9ieUJrYVhKdVlXMWxJSGRvWVhSemIyVjJaWEpjYmlBZ0lDQnlaWFIxY200Z0p5NG5PMXh1SUNCOVhHNWNiaUFnYVdZZ0tHUnBjaWtnZTF4dUlDQWdJQzh2SUVsMElHaGhjeUJoSUdScGNtNWhiV1VzSUhOMGNtbHdJSFJ5WVdsc2FXNW5JSE5zWVhOb1hHNGdJQ0FnWkdseUlEMGdaR2x5TG5OMVluTjBjaWd3TENCa2FYSXViR1Z1WjNSb0lDMGdNU2s3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnY205dmRDQXJJR1JwY2p0Y2JuMDdYRzVjYmx4dVpYaHdiM0owY3k1aVlYTmxibUZ0WlNBOUlHWjFibU4wYVc5dUtIQmhkR2dzSUdWNGRDa2dlMXh1SUNCMllYSWdaaUE5SUhOd2JHbDBVR0YwYUNod1lYUm9LVnN5WFR0Y2JpQWdMeThnVkU5RVR6b2diV0ZyWlNCMGFHbHpJR052YlhCaGNtbHpiMjRnWTJGelpTMXBibk5sYm5OcGRHbDJaU0J2YmlCM2FXNWtiM2R6UDF4dUlDQnBaaUFvWlhoMElDWW1JR1l1YzNWaWMzUnlLQzB4SUNvZ1pYaDBMbXhsYm1kMGFDa2dQVDA5SUdWNGRDa2dlMXh1SUNBZ0lHWWdQU0JtTG5OMVluTjBjaWd3TENCbUxteGxibWQwYUNBdElHVjRkQzVzWlc1bmRHZ3BPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQm1PMXh1ZlR0Y2JseHVYRzVsZUhCdmNuUnpMbVY0ZEc1aGJXVWdQU0JtZFc1amRHbHZiaWh3WVhSb0tTQjdYRzRnSUhKbGRIVnliaUJ6Y0d4cGRGQmhkR2dvY0dGMGFDbGJNMTA3WEc1OU8xeHVYRzVtZFc1amRHbHZiaUJtYVd4MFpYSWdLSGh6TENCbUtTQjdYRzRnSUNBZ2FXWWdLSGh6TG1acGJIUmxjaWtnY21WMGRYSnVJSGh6TG1acGJIUmxjaWhtS1R0Y2JpQWdJQ0IyWVhJZ2NtVnpJRDBnVzEwN1hHNGdJQ0FnWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENCNGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9aaWg0YzF0cFhTd2dhU3dnZUhNcEtTQnlaWE11Y0hWemFDaDRjMXRwWFNrN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEhWeWJpQnlaWE03WEc1OVhHNWNiaTh2SUZOMGNtbHVaeTV3Y205MGIzUjVjR1V1YzNWaWMzUnlJQzBnYm1WbllYUnBkbVVnYVc1a1pYZ2daRzl1SjNRZ2QyOXlheUJwYmlCSlJUaGNiblpoY2lCemRXSnpkSElnUFNBbllXSW5Mbk4xWW5OMGNpZ3RNU2tnUFQwOUlDZGlKMXh1SUNBZ0lEOGdablZ1WTNScGIyNGdLSE4wY2l3Z2MzUmhjblFzSUd4bGJpa2dleUJ5WlhSMWNtNGdjM1J5TG5OMVluTjBjaWh6ZEdGeWRDd2diR1Z1S1NCOVhHNGdJQ0FnT2lCbWRXNWpkR2x2YmlBb2MzUnlMQ0J6ZEdGeWRDd2diR1Z1S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h6ZEdGeWRDQThJREFwSUhOMFlYSjBJRDBnYzNSeUxteGxibWQwYUNBcklITjBZWEowTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzNSeUxuTjFZbk4wY2loemRHRnlkQ3dnYkdWdUtUdGNiaUFnSUNCOVhHNDdYRzRpWFgwPSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudFF1ZXVlO1xuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB2YXIgaSA9IC0xO1xuICAgICAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbaV0oKTtcbiAgICAgICAgfVxuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG59XG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHF1ZXVlLnB1c2goZnVuKTtcbiAgICBpZiAoIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgZGlyZWN0b3JzID0gcmVxdWlyZSgnLi9kaXJlY3RvcnMuanNvbicpO1xudmFyIHRhYmxlRGlyZWN0aXZlID0gcmVxdWlyZSgnLi4vLi4vZGlyZWN0aXZlcy9tZFRhYmxlJyk7XG5cbmZ1bmN0aW9uIERpcmVjdG9yc0N0cmwgKCRzY29wZSwgJGxvY2F0aW9uKSB7XG4gIC8vSGVhZGVycyBvZiB0YWJsZVxuICAkc2NvcGUuaGVhZGVycyA9ICBbe1xuICAgIG5hbWU6IFwiSWRcIixcbiAgICBmaWVsZDogJ2lkJ1xuICB9LCB7XG4gICAgbmFtZTogXCJOYW1lXCIsXG4gICAgZmllbGQ6ICduYW1lJ1xuICB9LCB7XG4gICAgbmFtZTogXCJTZXhcIixcbiAgICBmaWVsZDogJ3NleCdcbiAgfSwge1xuICAgIG5hbWU6IFwiTmF0aW9uYWxpdHlcIixcbiAgICBmaWVsZDogJ25hdGlvbmFsaXR5J1xuICB9LCB7XG4gICAgbmFtZTogXCJDaXR5XCIsXG4gICAgZmllbGQ6ICdjaXR5J1xuICB9LCB7XG4gICAgbmFtZTogXCJkb2JcIixcbiAgICBmaWVsZDogJ2RvYidcbiAgfSwge1xuICAgIG5hbWU6IFwiYWdlXCIsXG4gICAgZmllbGQ6ICdhZ2UnXG4gIH0sIHtcbiAgICBuYW1lOiBcImJsb2NrYnVzdGVyXCIsXG4gICAgZmllbGQ6ICdibG9ja2J1c3RlcidcbiAgfSwge1xuICAgIG5hbWU6IFwib3B0aW9uc1wiLFxuICAgIGZpZWxkOiBcIm9wdGlvbnNcIlxuICB9XTtcbiAgXy5lYWNoKGRpcmVjdG9ycywgZnVuY3Rpb24gKGRpcmVjdG9yKSB7XG4gICAgZGlyZWN0b3Iub3B0aW9ucyA9IHtcbiAgICAgIGlzT3B0aW9uczogdHJ1ZSxcbiAgICAgIGlzQnV0dG9uOiB0cnVlLFxuICAgICAgY2xpY2s6IGZ1bmN0aW9uIChkaXJlY3RvckNsaWNrZWQpIHtcbiAgICAgICAgZGlyZWN0b3JzID0gXy53aXRob3V0KGRpcmVjdG9ycywgXy5maW5kV2hlcmUoZGlyZWN0b3JzLCB7aWQ6IGRpcmVjdG9yQ2xpY2tlZC5pZH0pKTtcbiAgICAgICAgJHNjb3BlLmNvbnRlbnQgPSBkaXJlY3RvcnM7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4gICRzY29wZS5jb250ZW50ID0gZGlyZWN0b3JzO1xufVxuXG5BcHAuY29udHJvbGxlcignRGlyZWN0b3JzQ3RybCcsIFsnJHNjb3BlJywgJyRsb2NhdGlvbicsIERpcmVjdG9yc0N0cmxdKS5kaXJlY3RpdmUoJ2RpcmVjdG9yVGFibGUnLCB0YWJsZURpcmVjdGl2ZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0b3JzQ3RybDtcbiIsInZhciBkaXJlY3RvciA9IHJlcXVpcmUoJy4vZGlyZWN0b3IuanNvbicpO1xuXG5mdW5jdGlvbiBEaXJlY3RvckRldGFpbCgkc2NvcGUpIHtcbiAgJHNjb3BlLmRpcmVjdG9yID0gXy5jbG9uZShkaXJlY3Rvcik7XG4gICRzY29wZS5kaXJlY3Rvci5kb2IgPSBtb21lbnQoZGlyZWN0b3IuZG9iKS5mb3JtYXQoJ0wnKTtcbn1cbkFwcC5jb250cm9sbGVyKCdEaXJlY3RvckRldGFpbCcsIFsnJHNjb3BlJywgRGlyZWN0b3JEZXRhaWxdKTtcbiIsIm1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzID0ge1xuICBcImZ1bGxOYW1lXCI6IFwiRGF2aWQgTHluY2hcIixcbiAgXCJpbWFnZVwiOiBcImh0dHA6Ly93d3cuaW50ZXJ2aWV3bWFnYXppbmUuY29tL2ZpbGVzLzIwMTIvMDEvMDgvaW1nLWRhdmlkLWx5bmNoLTAxLV8xODQxMTcyMTYwNzEuanBnXCIsXG4gIFwic2V4XCI6IFwiTWFsZVwiLFxuICBcIm5hdGlvbmFsaXR5XCI6IFwiVW5pdGVkIFN0YXRlc1wiLFxuICBcInN0YXRlXCI6IFwiTW9udGFuYVwiLFxuICBcImNpdHlcIjogXCJNaXNzb3VsYVwiLFxuICBcImRvYlwiOiAtNzU1Njk5ODY3LFxuICBcImFnZVwiOiA2OSxcbiAgXCJibG9ja2J1c3RlcnNcIjogW3tcbiAgICBcIm1vdmllTmFtZVwiOiBcIkJsdWUgVmVsdmV0XCIsXG4gICAgXCJyZWxlYXNlXCI6IFwiMTk4NlwiXG4gIH0sIHtcbiAgICBcIm1vdmllTmFtZVwiOiBcIldpbGQgYXQgSGVhcnRcIixcbiAgICBcInJlbGVhc2VcIjogXCIxOTkwXCJcbiAgfSwge1xuICAgIFwibW92aWVOYW1lXCI6IFwiTXVsaG9sbGFuZCBEcml2ZVwiLFxuICAgIFwicmVsZWFzZVwiOiBcIjIwMDFcIlxuICB9XSxcbiAgXCJiaW9cIjogXCJpcyBhbiBBbWVyaWNhbiBkaXJlY3Rvciwgc2NyZWVud3JpdGVyLCB2aXN1YWwgYXJ0aXN0LCBtdXNpY2lhbiwgYWN0b3IsIGFuZCBhdXRob3IuIEtub3duIGZvciBoaXMgc3VycmVhbGlzdCBmaWxtcywgaGUgaGFzIGRldmVsb3BlZCBhIHVuaXF1ZSBjaW5lbWF0aWMgc3R5bGUuIFRoZSBzdXJyZWFsIGFuZCwgaW4gbWFueSBjYXNlcywgdmlvbGVudCBlbGVtZW50cyBjb250YWluZWQgd2l0aGluIGhpcyBmaWxtcyBoYXZlIGJlZW4ga25vd24gdG8gJ2Rpc3R1cmIsIG9mZmVuZCBvciBteXN0aWZ5JyBhdWRpZW5jZXMuXCIsXG4gIFwic3BvdXNlXCI6IFwiRW1pbHkgU3RvZmxlXCIsXG4gIFwiY2hpbGRyZW5cIjogW1wiTGlzYVwiLCBcIkJhcnRcIl1cbn1cbiIsIm1vZHVsZS5leHBvcnRzPW1vZHVsZS5leHBvcnRzID0gW3tcbiAgICBcImlkXCI6IDAsXG4gICAgXCJuYW1lXCI6IFwiUGVkcm8gQWxtb2TDs3ZhclwiLFxuICAgIFwic2V4XCI6IFwiTVwiLFxuICAgIFwibmF0aW9uYWxpdHlcIjogXCJTcGFuaXNoXCIsXG4gICAgXCJjaXR5XCI6IFwiQWxtZXLDrWFcIixcbiAgICBcImRvYlwiOiAtNjM5NTM1MDY3LFxuICAgIFwiYWdlXCI6IDY2LFxuICAgIFwiYmxvY2tidXN0ZXJcIjogXCJUb2RvIHNvYnJlIG1pIG1hZHJlXCJcbiAgfSwge1xuICAgIFwiaWRcIjogMSxcbiAgICBcIm5hbWVcIjogXCJHaXVzZXBwZSBUb3JuYXRvcmVcIixcbiAgICBcInNleFwiOiBcIk1cIixcbiAgICBcIm5hdGlvbmFsaXR5XCI6IFwiSXRhbGlhblwiLFxuICAgIFwiY2l0eVwiOiBcIkJhZ2hlcmlhXCIsXG4gICAgXCJkb2JcIjogLTQyOTA2NDY2NyxcbiAgICBcImFnZVwiOiA1OSxcbiAgICBcImJsb2NrYnVzdGVyXCI6IFwiQ2luZW1hIHBhcmFkaXNvXCJcbiAgfSwge1xuICAgIFwiaWRcIjogMixcbiAgICBcIm5hbWVcIjogXCJTb2ZpYSBDb3Bwb2xhXCIsXG4gICAgXCJzZXhcIjogXCJGXCIsXG4gICAgXCJuYXRpb25hbGl0eVwiOiBcIkFtZXJpY2FuXCIsXG4gICAgXCJjaXR5XCI6IFwiTmV3IFlvcmtcIixcbiAgICBcImRvYlwiOiA0MzExMTMzMyxcbiAgICBcImFnZVwiOiA0NCxcbiAgICBcImJsb2NrYnVzdGVyXCI6IFwiTG9zdCBpbiB0cmFuc2xhdGlvblwiXG4gIH0sIHtcbiAgICBcImlkXCI6IDMsXG4gICAgXCJuYW1lXCI6IFwiTHVjIEJlc3NvblwiLFxuICAgIFwic2V4XCI6IFwiTVwiLFxuICAgIFwibmF0aW9uYWxpdHlcIjogXCJGcmVuY2hcIixcbiAgICBcImNpdHlcIjogXCJQYXJpc1wiLFxuICAgIFwiZG9iXCI6IC0zNDA1MDQ2NjcsXG4gICAgXCJhZ2VcIjogNTksXG4gICAgXCJibG9ja2J1c3RlclwiOiBcIkzDqW9uXCJcbiAgfSwge1xuICAgIFwiaWRcIjogNCxcbiAgICBcIm5hbWVcIjogXCJBbGZyZWQgSGl0Y2hjb2NrXCIsXG4gICAgXCJzZXhcIjogXCJNXCIsXG4gICAgXCJuYXRpb25hbGl0eVwiOiBcIkJyaXRpc2hcIixcbiAgICBcImNpdHlcIjogXCJMb25kb25cIixcbiAgICBcImRvYlwiOiAtMjIyMTA4NzA2NyxcbiAgICBcImFnZVwiOiBcImRlYWRcIixcbiAgICBcImJsb2NrYnVzdGVyXCI6IFwiUHNpY29zaXNcIlxuICB9LCB7XG4gICAgXCJpZFwiOiA1LFxuICAgIFwibmFtZVwiOiBcIkx1Y8OtYSBQdWVuem9cIixcbiAgICBcInNleFwiOiBcIkZcIixcbiAgICBcIm5hdGlvbmFsaXR5XCI6IFwiQXJnZW50aW5pYW5cIixcbiAgICBcImNpdHlcIjogXCJCdWVub3MgQWlyZXNcIixcbiAgICBcImRvYlwiOiAyMTgwNzEzMzMsXG4gICAgXCJhZ2VcIjogMzgsXG4gICAgXCJibG9ja2J1c3RlclwiOiBcIldha29sZGFcIlxuICB9LCB7XG4gICAgXCJpZFwiOiA2LFxuICAgIFwibmFtZVwiOiBcIkFsZWphbmRybyBHb256w6FsZXogScOxw6Fycml0dVwiLFxuICAgIFwic2V4XCI6IFwiTVwiLFxuICAgIFwibmF0aW9uYWxpdHlcIjogXCJNZXhpY2FuXCIsXG4gICAgXCJjaXR5XCI6IFwiTWV4aWNvIERGXCIsXG4gICAgXCJkb2JcIjogLTIwMTMxNDI2NyxcbiAgICBcImFnZVwiOiA1MixcbiAgICBcImJsb2NrYnVzdGVyXCI6IFwiQmlyZG1hblwiXG4gIH1cbl07XG4iLCJcbnZhciB0ZW1wbGF0ZSA9IFwiPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZS1kaXJlY3RvcnNcXFwiPlxcbiAgPHRoZWFkIGNsYXNzPVxcXCJ0YWJsZS1oZWFkZXJcXFwiPlxcbiAgICA8dGggbmctcmVwZWF0PVxcXCJoZWFkZXIgaW4gaGVhZGVyc1xcXCI+XFxuICAgICAge3toZWFkZXIubmFtZX19XFxuICAgIDwvdGg+XFxuICA8L3RoZWFkPlxcbiAgPHRib2R5PlxcbiAgICA8dHIgbmctcmVwZWF0PVxcXCJyb3cgaW4gY29udGVudFxcXCI+XFxuICAgICAgPHRkIG5nLXJlcGVhdD1cXFwiYXR0cmlidXRlIGluIHJvd1xcXCIgY2xhc3M9XFxcImRpcmVjdG9yLWF0dHJcXFwiPlxcbiAgICAgICAgPGJ1dHRvbiBuZy1zaG93PVxcXCJhdHRyaWJ1dGUuaXNCdXR0b25cXFwiIG5nLWNsaWNrPVxcXCJhdHRyaWJ1dGUuY2xpY2socm93KVxcXCI+eDwvYnV0dG9uPlxcbiAgICAgICAgPHNwYW4gbmctaGlkZT1cXFwiYXR0cmlidXRlLmlzT3B0aW9uc1xcXCIgIG5nLWNsaWNrPVxcXCJ0YWJsZUN0cmwuZ29Ub0RldGFpbCgkaW5kZXgsIGRldGFpbHMpXFxcIj57e2F0dHJpYnV0ZX19PC9zcGFuPlxcbiAgICAgIDwvdGQ+XFxuICAgIDwvdHI+XFxuICA8L3Rib2R5PlxcbjwvdGFibGU+XFxuXCI7XG5cbnZhciBUYWJsZURpcmVjdGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250cm9sbGVyOiBmdW5jdGlvbiAoJGxvY2F0aW9uKSB7XG4gICAgICB0aGlzLmdvVG9EZXRhaWwgPSBmdW5jdGlvbiAoJGRpcmVjdG9ySWQsIGRldGFpbHMpIHtcbiAgICAgICAgJGxvY2F0aW9uLnVybChkZXRhaWxzICsgJy8nICsgJGRpcmVjdG9ySWQpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgY29udHJvbGxlckFzOiAndGFibGVDdHJsJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgc2NvcGU6IHtcbiAgICAgIGhlYWRlcnM6IFwiPVwiLFxuICAgICAgY29udGVudDogXCI9XCIsXG4gICAgICBkZXRhaWxzOiBcIkBcIlxuICAgIH1cbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGFibGVEaXJlY3RpdmU7XG4iXX0=
