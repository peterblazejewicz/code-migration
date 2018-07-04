// @ts-check
/// <reference path="./loggers/MyLogger.ts" />

angular.module('app', ['ui.router', 'i18n']);

angular.module('app')
  .run(['i18n', i18n => {
    /** @type {ILogger} */
    const logger = new loggers.MyLogger();
    logger.log(`${i18n.helloMessage} Stranger`);
  }]);
