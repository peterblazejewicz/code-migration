angular.module('app', ['ui.router']);
angular.module('app')
    .run(function () {
    console.log('started');
});
var appConfig = function ($locationProvider) {
    $locationProvider.html5Mode(true);
};
appConfig.$inject = ['$locationProvider'];
angular.module('app').config(appConfig);
angular.element(function () {
    angular.bootstrap(document, ['app'], {
        strictDi: true,
    });
});
