/// <reference path="hello.controller.ts" />
/// <reference types="angular" />
namespace components.hello {
  export const HelloComponent: angular.IComponentOptions = {
    templateUrl: "./src/components/hello/hello.template.html",
    controller: components.hello.HelloController,
    bindings: {
      greeting: "<"
    }
  };
}
