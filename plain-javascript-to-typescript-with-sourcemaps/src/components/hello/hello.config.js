(function (angular, undefined) {
  const HelloConfig = ($stateProvider, $urlRouterProvider) => {
    $stateProvider.state('hello', {
      url: '/',
      component: 'helloComponent',
    });
    $urlRouterProvider.otherwise('/');
  };
  HelloConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  angular.module('hello')
    .config(HelloConfig)
})(angular);
