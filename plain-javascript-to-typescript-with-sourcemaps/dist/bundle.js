var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var loggers;
(function (loggers) {
    var BaseLogger = (function () {
        function BaseLogger(name) {
            this.name = name;
        }
        BaseLogger.prototype.log = function (msg) {
            throw new Error("Method not implemented.");
        };
        BaseLogger.prototype.toString = function () {
            return this.name + " logger";
        };
        return BaseLogger;
    }());
    loggers.BaseLogger = BaseLogger;
})(loggers || (loggers = {}));
var loggers;
(function (loggers) {
    var MyLogger = (function (_super) {
        __extends(MyLogger, _super);
        function MyLogger() {
            return _super.call(this, "MyLogger") || this;
        }
        MyLogger.prototype.log = function (msg) {
            console.log(msg);
        };
        return MyLogger;
    }(loggers.BaseLogger));
    loggers.MyLogger = MyLogger;
})(loggers || (loggers = {}));
angular.module('app', ['ui.router', 'i18n']);
angular.module('app')
    .run(['i18n', function (i18n) {
        var logger = new loggers.MyLogger();
        logger.log(i18n.helloMessage + " Stranger");
    }]);
function appConfig($locationProvider) {
    $locationProvider.html5Mode(true);
}
;
appConfig.$inject = ['$locationProvider'];
angular.module('app').config(appConfig);
(function (angular) {
    angular.module("i18n", []).constant("i18n", {
        helloMessage: "hello",
        goodbyeMessage: "goodbye"
    });
})(angular);
angular.element(function () {
    angular.bootstrap(document.body, ['app'], {
        strictDi: true,
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlcnMvQmFzZUxvZ2dlci50cyIsIi4uL3NyYy9sb2dnZXJzL015TG9nZ2VyLnRzIiwiLi4vc3JjL2FwcC5tb2R1bGUuanMiLCIuLi9zcmMvYXBwLmNvbmZpZy5qcyIsIi4uL3NyYy9pMThuLnRzIiwiLi4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQVUsT0FBTyxDQVdoQjtBQVhELFdBQVUsT0FBTztJQUNmO1FBQ0Usb0JBQW9CLElBQVk7WUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQUcsQ0FBQztRQUNwQyx3QkFBRyxHQUFILFVBQUksR0FBVztZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRUQsNkJBQVEsR0FBUjtZQUNFLE9BQVUsSUFBSSxDQUFDLElBQUksWUFBUyxDQUFDO1FBQy9CLENBQUM7UUFDSCxpQkFBQztJQUFELENBQUMsQUFURCxJQVNDO0lBVHFCLGtCQUFVLGFBUy9CLENBQUE7QUFDSCxDQUFDLEVBWFMsT0FBTyxLQUFQLE9BQU8sUUFXaEI7QUNURCxJQUFVLE9BQU8sQ0FlaEI7QUFmRCxXQUFVLE9BQU87SUFNZjtRQUE4Qiw0QkFBa0I7UUFDOUM7bUJBQ0Usa0JBQU0sVUFBVSxDQUFDO1FBQ25CLENBQUM7UUFFRCxzQkFBRyxHQUFILFVBQUksR0FBVztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUNILGVBQUM7SUFBRCxDQUFDLEFBUkQsQ0FBOEIsT0FBTyxDQUFDLFVBQVUsR0FRL0M7SUFSWSxnQkFBUSxXQVFwQixDQUFBO0FBQ0gsQ0FBQyxFQWZTLE9BQU8sS0FBUCxPQUFPLFFBZWhCO0FDZEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUU3QyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNsQixHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsVUFBQSxJQUFJO1FBRWhCLElBQU0sTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFlBQVksY0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQ05OLG1CQUFtQixpQkFBaUI7SUFDbEMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFBQSxDQUFDO0FBQ0YsU0FBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDMUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUNSeEMsQ0FBQyxVQUFBLE9BQU87SUFDTixPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQWUsTUFBTSxFQUFFO1FBQ3hELFlBQVksRUFBRSxPQUFPO1FBQ3JCLGNBQWMsRUFBRSxTQUFTO0tBQzFCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FDTFosT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNkLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3hDLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgbG9nZ2VycyB7XG4gIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlTG9nZ2VyIGltcGxlbWVudHMgSUxvZ2dlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuYW1lOiBzdHJpbmcpIHt9XG4gICAgbG9nKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0gbG9nZ2VyYDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBlcy9JTG9nZ2VyLmQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQmFzZUxvZ2dlci50c1wiIC8+XG5uYW1lc3BhY2UgbG9nZ2VycyB7XG4gIC8qKlxuICAgKiBAZXhwb3J0XG4gICAqIEBjbGFzcyBNeUxvZ2dlclxuICAgKiBAaW1wbGVtZW50cyB7SUxvZ2dlcn1cbiAgICovXG4gIGV4cG9ydCBjbGFzcyBNeUxvZ2dlciBleHRlbmRzIGxvZ2dlcnMuQmFzZUxvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoXCJNeUxvZ2dlclwiKTtcbiAgICB9XG5cbiAgICBsb2cobXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBAdHMtY2hlY2tcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2xvZ2dlcnMvTXlMb2dnZXIudHNcIiAvPlxuXG5hbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd1aS5yb3V0ZXInLCAnaTE4biddKTtcblxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gIC5ydW4oWydpMThuJywgaTE4biA9PiB7XG4gICAgLyoqIEB0eXBlIHtJTG9nZ2VyfSAqL1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBsb2dnZXJzLk15TG9nZ2VyKCk7XG4gICAgbG9nZ2VyLmxvZyhgJHtpMThuLmhlbGxvTWVzc2FnZX0gU3RyYW5nZXJgKTtcbiAgfV0pO1xuIiwiLy8gQHRzLWNoZWNrXG4vKipcbiAqIEBwYXJhbSB7YW5ndWxhci5JTG9jYXRpb25Qcm92aWRlcn0gJGxvY2F0aW9uUHJvdmlkZXJcbiAqL1xuZnVuY3Rpb24gYXBwQ29uZmlnKCRsb2NhdGlvblByb3ZpZGVyKSB7XG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcbn07XG5hcHBDb25maWcuJGluamVjdCA9IFsnJGxvY2F0aW9uUHJvdmlkZXInXTtcbmFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb25maWcoYXBwQ29uZmlnKTtcbiIsIihhbmd1bGFyID0+IHtcbiAgYW5ndWxhci5tb2R1bGUoXCJpMThuXCIsIFtdKS5jb25zdGFudDxpMThuUHJvcFR5cGU+KFwiaTE4blwiLCB7XG4gICAgaGVsbG9NZXNzYWdlOiBcImhlbGxvXCIsXG4gICAgZ29vZGJ5ZU1lc3NhZ2U6IFwiZ29vZGJ5ZVwiXG4gIH0pO1xufSkoYW5ndWxhcik7XG4iLCJhbmd1bGFyLmVsZW1lbnQoKCkgPT4ge1xuICBhbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudC5ib2R5LCBbJ2FwcCddLCB7XG4gICAgc3RyaWN0RGk6IHRydWUsXG4gIH0pO1xufSk7XG4iXX0=