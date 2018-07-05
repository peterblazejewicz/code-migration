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
angular.module('app', ['ui.router', 'i18n', 'hello']);
angular.module('app')
    .run(['i18n', function (i18n) {
        var logger = new loggers.MyLogger();
        logger.log(i18n.helloMessage + " Stranger");
    }]);
var components;
(function (components) {
    var hello;
    (function (hello) {
        var HelloController = (function () {
            function HelloController() {
                this.logger = new loggers.MyLogger();
            }
            HelloController.prototype.$onInit = function () {
                this.logger.log("$onInit");
            };
            HelloController.prototype.$postLink = function () {
                this.logger.log("$postLink");
            };
            return HelloController;
        }());
        hello.HelloController = HelloController;
    })(hello = components.hello || (components.hello = {}));
})(components || (components = {}));
var components;
(function (components) {
    var hello;
    (function (hello) {
        hello.HelloComponent = {
            templateUrl: "./src/components/hello/hello.template.html",
            controller: components.hello.HelloController,
            bindings: {
                greeting: "<"
            }
        };
    })(hello = components.hello || (components.hello = {}));
})(components || (components = {}));
(function (angular) {
    angular.module('hello', [])
        .component('helloComponent', components.hello.HelloComponent);
})(angular);
function appConfig($locationProvider) {
    $locationProvider.html5Mode(true);
}
;
appConfig.$inject = ['$locationProvider'];
angular.module('app').config(appConfig);
(function (angular, undefined) {
    var HelloConfig = function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('hello', {
            url: '/',
            component: 'helloComponent',
        });
        $urlRouterProvider.otherwise('/');
    };
    HelloConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    angular.module('hello')
        .config(HelloConfig);
})(angular);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlcnMvQmFzZUxvZ2dlci50cyIsIi4uL3NyYy9sb2dnZXJzL015TG9nZ2VyLnRzIiwiLi4vc3JjL2FwcC5tb2R1bGUuanMiLCIuLi9zcmMvY29tcG9uZW50cy9oZWxsby9oZWxsby5jb250cm9sbGVyLnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvaGVsbG8vaGVsbG8uY29tcG9uZW50LnRzIiwiLi4vc3JjL2NvbXBvbmVudHMvaGVsbG8vaGVsbG8uanMiLCIuLi9zcmMvYXBwLmNvbmZpZy5qcyIsIi4uL3NyYy9jb21wb25lbnRzL2hlbGxvL2hlbGxvLmNvbmZpZy5qcyIsIi4uL3NyYy9pMThuLnRzIiwiLi4vc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQVUsT0FBTyxDQVdoQjtBQVhELFdBQVUsT0FBTztJQUNmO1FBQ0Usb0JBQW9CLElBQVk7WUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQUcsQ0FBQztRQUNwQyx3QkFBRyxHQUFILFVBQUksR0FBVztZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRUQsNkJBQVEsR0FBUjtZQUNFLE9BQVUsSUFBSSxDQUFDLElBQUksWUFBUyxDQUFDO1FBQy9CLENBQUM7UUFDSCxpQkFBQztJQUFELENBQUMsQUFURCxJQVNDO0lBVHFCLGtCQUFVLGFBUy9CLENBQUE7QUFDSCxDQUFDLEVBWFMsT0FBTyxLQUFQLE9BQU8sUUFXaEI7QUNURCxJQUFVLE9BQU8sQ0FlaEI7QUFmRCxXQUFVLE9BQU87SUFNZjtRQUE4Qiw0QkFBa0I7UUFDOUM7bUJBQ0Usa0JBQU0sVUFBVSxDQUFDO1FBQ25CLENBQUM7UUFFRCxzQkFBRyxHQUFILFVBQUksR0FBVztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUNI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Q0FBQyxPQUFPLENBQUM7U0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQ3hCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FDWlosQ0FBQyxVQUFBLE9BQU87SUFDTixPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQWUsTUFBTSxFQUFFO1FBQ3hELFlBQVksRUFBRSxPQUFPO1FBQ3JCLGNBQWMsRUFBRSxTQUFTO0tBQzFCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FDTFosT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUNkLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3hDLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgbG9nZ2VycyB7XG4gIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlTG9nZ2VyIGltcGxlbWVudHMgSUxvZ2dlciB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuYW1lOiBzdHJpbmcpIHt9XG4gICAgbG9nKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgICB9XG5cbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIGAke3RoaXMubmFtZX0gbG9nZ2VyYDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBlcy9JTG9nZ2VyLmQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vQmFzZUxvZ2dlci50c1wiIC8+XG5uYW1lc3BhY2UgbG9nZ2VycyB7XG4gIC8qKlxuICAgKiBAZXhwb3J0XG4gICAqIEBjbGFzcyBNeUxvZ2dlclxuICAgKiBAaW1wbGVtZW50cyB7SUxvZ2dlcn1cbiAgICovXG4gIGV4cG9ydCBjbGFzcyBNeUxvZ2dlciBleHRlbmRzIGxvZ2dlcnMuQmFzZUxvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoXCJNeUxvZ2dlclwiKTtcbiAgICB9XG5cbiAgICBsb2cobXNnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBAdHMtY2hlY2tcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2xvZ2dlcnMvTXlMb2dnZXIudHNcIiAvPlxuXG5hbmd1bGFyLm1vZHVsZSgnYXBwJywgWyd1aS5yb3V0ZXInLCAnaTE4bicsICdoZWxsbyddKTtcblxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gIC5ydW4oWydpMThuJywgaTE4biA9PiB7XG4gICAgLyoqIEB0eXBlIHtJTG9nZ2VyfSAqL1xuICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBsb2dnZXJzLk15TG9nZ2VyKCk7XG4gICAgbG9nZ2VyLmxvZyhgJHtpMThuLmhlbGxvTWVzc2FnZX0gU3RyYW5nZXJgKTtcbiAgfV0pO1xuIiwiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJhbmd1bGFyXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi9sb2dnZXJzL015TG9nZ2VyLnRzXCIgLz5cbm5hbWVzcGFjZSBjb21wb25lbnRzLmhlbGxvIHtcbiAgLyoqXG4gICAqIEBleHBvcnRcbiAgICogQGNsYXNzIEhlbGxvQ29udHJvbGxlclxuICAgKi9cbiAgZXhwb3J0IGNsYXNzIEhlbGxvQ29udHJvbGxlciBpbXBsZW1lbnRzIGFuZ3VsYXIuSUNvbXBvbmVudENvbnRyb2xsZXIge1xuICAgIHByaXZhdGUgbG9nZ2VyOiBJTG9nZ2VyID0gbmV3IGxvZ2dlcnMuTXlMb2dnZXIoKTtcblxuICAgICRvbkluaXQoKSB7XG4gICAgICB0aGlzLmxvZ2dlci5sb2coXCIkb25Jbml0XCIpO1xuICAgIH1cblxuICAgICRwb3N0TGluaygpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmxvZyhcIiRwb3N0TGlua1wiKTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJoZWxsby5jb250cm9sbGVyLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiYW5ndWxhclwiIC8+XG5uYW1lc3BhY2UgY29tcG9uZW50cy5oZWxsbyB7XG4gIGV4cG9ydCBjb25zdCBIZWxsb0NvbXBvbmVudDogYW5ndWxhci5JQ29tcG9uZW50T3B0aW9ucyA9IHtcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NyYy9jb21wb25lbnRzL2hlbGxvL2hlbGxvLnRlbXBsYXRlLmh0bWxcIixcbiAgICBjb250cm9sbGVyOiBjb21wb25lbnRzLmhlbGxvLkhlbGxvQ29udHJvbGxlcixcbiAgICBiaW5kaW5nczoge1xuICAgICAgZ3JlZXRpbmc6IFwiPFwiXG4gICAgfVxuICB9O1xufVxuIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImhlbGxvLmNvbXBvbmVudC50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cImFuZ3VsYXJcIiAvPlxuXG4oZnVuY3Rpb24gKGFuZ3VsYXIpIHtcbiAgYW5ndWxhci5tb2R1bGUoJ2hlbGxvJywgW10pXG4gICAgLmNvbXBvbmVudCgnaGVsbG9Db21wb25lbnQnLCBjb21wb25lbnRzLmhlbGxvLkhlbGxvQ29tcG9uZW50KTtcblxufSkoYW5ndWxhcik7XG4iLCIvLyBAdHMtY2hlY2tcbi8qKlxuICogQHBhcmFtIHthbmd1bGFyLklMb2NhdGlvblByb3ZpZGVyfSAkbG9jYXRpb25Qcm92aWRlclxuICovXG5mdW5jdGlvbiBhcHBDb25maWcoJGxvY2F0aW9uUHJvdmlkZXIpIHtcbiAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xufTtcbmFwcENvbmZpZy4kaW5qZWN0ID0gWyckbG9jYXRpb25Qcm92aWRlciddO1xuYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbmZpZyhhcHBDb25maWcpO1xuIiwiKGZ1bmN0aW9uIChhbmd1bGFyLCB1bmRlZmluZWQpIHtcbiAgY29uc3QgSGVsbG9Db25maWcgPSAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgPT4ge1xuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdoZWxsbycsIHtcbiAgICAgIHVybDogJy8nLFxuICAgICAgY29tcG9uZW50OiAnaGVsbG9Db21wb25lbnQnLFxuICAgIH0pO1xuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbiAgfTtcbiAgSGVsbG9Db25maWcuJGluamVjdCA9IFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJ107XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2hlbGxvJylcbiAgICAuY29uZmlnKEhlbGxvQ29uZmlnKVxufSkoYW5ndWxhcik7XG4iLCIoYW5ndWxhciA9PiB7XG4gIGFuZ3VsYXIubW9kdWxlKFwiaTE4blwiLCBbXSkuY29uc3RhbnQ8aTE4blByb3BUeXBlPihcImkxOG5cIiwge1xuICAgIGhlbGxvTWVzc2FnZTogXCJoZWxsb1wiLFxuICAgIGdvb2RieWVNZXNzYWdlOiBcImdvb2RieWVcIlxuICB9KTtcbn0pKGFuZ3VsYXIpO1xuIiwiYW5ndWxhci5lbGVtZW50KCgpID0+IHtcbiAgYW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQuYm9keSwgWydhcHAnXSwge1xuICAgIHN0cmljdERpOiB0cnVlLFxuICB9KTtcbn0pO1xuIl19