/* global angular */

(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope) {
    $scope.message = "Hello world!";
    $scope.moreStuff = "Hello angel!";

    window.$scope = $scope;
  } );
}());