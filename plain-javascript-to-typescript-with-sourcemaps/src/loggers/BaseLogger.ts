namespace loggers {
  export abstract class BaseLogger implements ILogger {
    constructor(private name: string) {}
    log(msg: string): void {
      throw new Error("Method not implemented.");
    }

    toString(): string {
      return `${this.name} logger`;
    }
  }
}
