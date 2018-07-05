/// <reference path="hello.component.ts" />
/// <reference types="angular" />

(function (angular) {
  angular.module('hello', [])
    .component('helloComponent', components.hello.HelloComponent);

})(angular);
