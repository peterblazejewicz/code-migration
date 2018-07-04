// @ts-check
/**
 * @param {angular.ILocationProvider} $locationProvider
 */
function appConfig($locationProvider) {
  $locationProvider.html5Mode(true);
};
appConfig.$inject = ['$locationProvider'];
angular.module('app').config(appConfig);
