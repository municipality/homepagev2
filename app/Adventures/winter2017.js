System.register(['angular2/core', 'angular2/router', './adventures.seasons'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, FashionVars;
    var SeasonDefault, Winter2017Cool, Winter2017;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (FashionVars_1) {
                FashionVars = FashionVars_1;
            }],
        execute: function() {
            SeasonDefault = (function () {
                function SeasonDefault() {
                }
                SeasonDefault = __decorate([
                    core_1.Component({
                        template: "\n        <div>\n\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SeasonDefault);
                return SeasonDefault;
            }());
            exports_1("SeasonDefault", SeasonDefault);
            Winter2017Cool = (function () {
                function Winter2017Cool() {
                }
                Winter2017Cool = __decorate([
                    core_1.Component({
                        template: "\n        <div>\n            <p>Cool</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Winter2017Cool);
                return Winter2017Cool;
            }());
            exports_1("Winter2017Cool", Winter2017Cool);
            Winter2017 = (function () {
                function Winter2017(params, router) {
                    this.router = router;
                    this.seasons = FashionVars.seasonItems;
                    this.season = "Winter2017";
                    this.listItems = this.seasons[this.season];
                }
                Winter2017 = __decorate([
                    core_1.Component({
                        template: "\n        <div class=\"styles\">\n            <div class=\"header\">\n                <h4>Styles</h4>\n            </div>\n            <div class=\"style\" *ngFor=\"#style of listItems\"\n            [routerLink]=\"[style.path]\"\n            [ngClass]=\"{'active': router.isRouteActive(router.generate([style.path]))}\">\n                <h3>{{style.display}}</h3>\n            </div>\n        </div>\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: SeasonDefault, name: "Winter2017Default", useAsDefault: true },
                        { path: '/Cool', component: Winter2017Cool, name: 'Winter2017Cool' },
                        { path: '/**', redirectTo: ['Winter2017Default'] }
                    ]), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router])
                ], Winter2017);
                return Winter2017;
            }());
            exports_1("Winter2017", Winter2017);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ludGVyMjAxNy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndpbnRlcjIwMTcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFDSTtnQkFFQSxDQUFDO2dCQVhMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLHlDQUlUO3FCQUNKLENBQUM7O2lDQUFBO2dCQU1GLG9CQUFDO1lBQUQsQ0FBQyxBQUpELElBSUM7WUFKRCx5Q0FJQyxDQUFBO1lBVUQ7Z0JBQ0k7Z0JBRUEsQ0FBQztnQkFYTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRSxnRUFJVDtxQkFDSixDQUFDOztrQ0FBQTtnQkFNRixxQkFBQztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQsMkNBSUMsQ0FBQTtZQXlCRDtnQkFLSSxvQkFBYSxNQUFvQixFQUFVLE1BQWE7b0JBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO29CQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFL0MsQ0FBQztnQkFoQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUsa2NBWVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQzt3QkFDckYsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFDO3dCQUNuRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBQztxQkFDcEQsQ0FBQzs7OEJBQUE7Z0JBWUYsaUJBQUM7WUFBRCxDQUFDLEFBWEQsSUFXQztZQVhELG1DQVdDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWcsIFJvdXRlciwgUm91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5pbXBvcnQgRmFzaGlvblZhcnMgPSByZXF1aXJlKCcuL2FkdmVudHVyZXMuc2Vhc29ucycpO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgU2Vhc29uRGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxufVxuXG5AQ29tcG9uZW50ICh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPkNvb2w8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBXaW50ZXIyMDE3Q29vbCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxufVxuXG5cbkBDb21wb25lbnQgKHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic3R5bGVzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGg0PlN0eWxlczwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdHlsZVwiICpuZ0Zvcj1cIiNzdHlsZSBvZiBsaXN0SXRlbXNcIlxuICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiW3N0eWxlLnBhdGhdXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogcm91dGVyLmlzUm91dGVBY3RpdmUocm91dGVyLmdlbmVyYXRlKFtzdHlsZS5wYXRoXSkpfVwiPlxuICAgICAgICAgICAgICAgIDxoMz57e3N0eWxlLmRpc3BsYXl9fTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogU2Vhc29uRGVmYXVsdCwgbmFtZTogXCJXaW50ZXIyMDE3RGVmYXVsdFwiLCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuICAgIHsgcGF0aDogJy9Db29sJywgY29tcG9uZW50OiBXaW50ZXIyMDE3Q29vbCwgbmFtZTogJ1dpbnRlcjIwMTdDb29sJ30sXG4gICAgeyBwYXRoOiAnLyoqJywgcmVkaXJlY3RUbzogWydXaW50ZXIyMDE3RGVmYXVsdCddfVxuXSlcbmV4cG9ydCBjbGFzcyBXaW50ZXIyMDE3IHtcbiAgICBzZWFzb24gOiBzdHJpbmc7XG4gICAgbGlzdEl0ZW1zIDogc3RyaW5nW107XG4gICAgc2Vhc29ucztcblxuICAgIGNvbnN0cnVjdG9yIChwYXJhbXMgOiBSb3V0ZVBhcmFtcywgcHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7XG4gICAgICAgIHRoaXMuc2Vhc29ucyA9IEZhc2hpb25WYXJzLnNlYXNvbkl0ZW1zO1xuICAgICAgICB0aGlzLnNlYXNvbiA9IFwiV2ludGVyMjAxN1wiO1xuICAgICAgICB0aGlzLmxpc3RJdGVtcyA9IHRoaXMuc2Vhc29uc1t0aGlzLnNlYXNvbl07XG5cbiAgICB9XG59XG4iXX0=