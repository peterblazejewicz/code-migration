/// <reference types="angular" />
/// <reference path="../../loggers/MyLogger.ts" />
namespace components.hello {
  /**
   * @export
   * @class HelloController
   */
  export class HelloController implements angular.IComponentController {
    private logger: ILogger = new loggers.MyLogger();

    $onInit() {
      this.logger.log("$onInit");
    }

    $postLink() {
      this.logger.log("$postLink");
    }
  }
}
