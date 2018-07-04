var appConfig = function($locationProvider) {
  $locationProvider.html5Mode(true);
};
appConfig.$inject = ['$locationProvider'];
angular.module('app').config(appConfig);
