// @ts-check
(function(angular, undefined) {
  "use strict";

  angular.module("demo.com").config(function($stateProvider) {
    var states = [
      {
        name: "hello",
        url: "/hello",
        component: "hello",
      },
      {
        name: "about",
        url: "/about",
        component: "about",
      },
      {
        name: "people",
        url: "/people",
        component: "people",
        resolve: {
          people: function(PeopleService) {
            return PeopleService.getAllPeople();
          },
        },
      },
      {
        name: "person",
        url: "/person/{personId}",
        component: "person",
        resolve: {
          person: function(PeopleService, $transition) {
            return PeopleService.getPerson($transition.params().personId);
          },
        },
      },
    ];

    states.forEach(function(state) {
      $stateProvider.state(state);
    });
  });

  // @ts-ignore
})(angular);
