(angular => {
  angular.module("i18n", []).constant<i18nPropType>("i18n", {
    helloMessage: "hello",
    goodbyeMessage: "goodbye"
  });
})(angular);
