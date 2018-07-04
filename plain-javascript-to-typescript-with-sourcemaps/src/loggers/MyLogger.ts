/// <reference path="../types/ILogger.d.ts" />
/// <reference path="./BaseLogger.ts" />
namespace loggers {
  /**
   * @export
   * @class MyLogger
   * @implements {ILogger}
   */
  export class MyLogger extends loggers.BaseLogger implements ILogger {
    constructor() {
      super("MyLogger");
    }

    log(msg: string): void {
      console.log(msg);
    }
  }
}
