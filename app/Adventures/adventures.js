System.register(['@angular/core', '@angular/router-deprecated', './adventures.service', './adventures.seasons', './summer2016', './winter2017', './adventures.components', './fall2016'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, adventures_service_1, AdventuresVars, summer2016_1, winter2017_1, adventures_components_1, fall2016_1;
    var Adventures;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (adventures_service_1_1) {
                adventures_service_1 = adventures_service_1_1;
            },
            function (AdventuresVars_1) {
                AdventuresVars = AdventuresVars_1;
            },
            function (summer2016_1_1) {
                summer2016_1 = summer2016_1_1;
            },
            function (winter2017_1_1) {
                winter2017_1 = winter2017_1_1;
            },
            function (adventures_components_1_1) {
                adventures_components_1 = adventures_components_1_1;
            },
            function (fall2016_1_1) {
                fall2016_1 = fall2016_1_1;
            }],
        execute: function() {
            Adventures = (function () {
                function Adventures(params, router) {
                    this.router = router;
                    this.seasons = AdventuresVars.seasons;
                }
                Adventures = __decorate([
                    core_1.Component({
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [adventures_service_1.AdventureService],
                        template: "\n        <div class=\"adventures fadeIn\">\n            <div class=\"adventures-row\">\n            <div class=\"seasons-container\">\n            <div class=\"seasons\"\n            [ngClass]=\"{'split': !router.isRouteActive(router.generate(['SeasonDefault']))}\">\n                <div class=\"header\">\n                    <h4>Seasons</h4>\n                </div>\n                <div class=\"season\" *ngFor=\"let season of seasons\"\n                [routerLink]=\"[season.path]\"\n                [ngClass]=\"{'active': router.isRouteActive(router.generate([season.path]))}\">\n                    <h3>{{season.name}}</h3>\n                </div>\n            </div>\n            </div>\n            <div class=\"events-router-container\">\n                <router-outlet></router-outlet>\n            </div>\n            </div>\n        </div>\n\n    "
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', component: adventures_components_1.SeasonDefault, name: "SeasonDefault", useAsDefault: true },
                        { path: '/Summer2016/...', component: summer2016_1.Summer2016, name: "Summer2016" },
                        { path: '/Fall2016/...', component: fall2016_1.Fall2016, name: "Fall2016" },
                        { path: '/Winter2017/...', component: winter2017_1.Winter2017, name: "Winter2017" },
                        { path: '/**', redirectTo: ['SeasonDefault'] }
                    ]), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams, router_deprecated_1.Router])
                ], Adventures);
                return Adventures;
            }());
            exports_1("Adventures", Adventures);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkdmVudHVyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErQ0E7Z0JBS0ksb0JBQWEsTUFBb0IsRUFBVSxNQUFjO29CQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDMUMsQ0FBQztnQkEzQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQzt3QkFDL0IsU0FBUyxFQUFFLENBQUMscUNBQWdCLENBQUM7d0JBQzdCLFFBQVEsRUFBRyxnMkJBc0JWO3FCQUNKLENBQUM7b0JBRUQsK0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLHFDQUFhLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUNqRixFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsdUJBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDO3dCQUNyRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLG1CQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQzt3QkFDL0QsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLHVCQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQzt3QkFDckUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFO3FCQUNqRCxDQUFDOzs4QkFBQTtnQkFVRixpQkFBQztZQUFELENBQUMsQUFSRCxJQVFDO1lBUkQsbUNBUUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZywgUm91dGVyLCBSb3V0ZVBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuaW1wb3J0IHtIdHRwfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7QWR2ZW50dXJlU2VydmljZX0gZnJvbSAnLi9hZHZlbnR1cmVzLnNlcnZpY2UnO1xuXG5pbXBvcnQgQWR2ZW50dXJlc1ZhcnMgPSByZXF1aXJlKCcuL2FkdmVudHVyZXMuc2Vhc29ucycpO1xuaW1wb3J0IHtTdW1tZXIyMDE2fSBmcm9tICcuL3N1bW1lcjIwMTYnO1xuaW1wb3J0IHtXaW50ZXIyMDE3fSBmcm9tICcuL3dpbnRlcjIwMTcnO1xuaW1wb3J0IHtTZWFzb25EZWZhdWx0fSBmcm9tICcuL2FkdmVudHVyZXMuY29tcG9uZW50cyc7XG5pbXBvcnQge0ZhbGwyMDE2fSBmcm9tICcuL2ZhbGwyMDE2JztcblxuQENvbXBvbmVudCAoe1xuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgcHJvdmlkZXJzOiBbQWR2ZW50dXJlU2VydmljZV0sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZHZlbnR1cmVzIGZhZGVJblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkdmVudHVyZXMtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29ucy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb25zXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnc3BsaXQnOiAhcm91dGVyLmlzUm91dGVBY3RpdmUocm91dGVyLmdlbmVyYXRlKFsnU2Vhc29uRGVmYXVsdCddKSl9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+U2Vhc29uczwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXNvblwiICpuZ0Zvcj1cImxldCBzZWFzb24gb2Ygc2Vhc29uc1wiXG4gICAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiW3NlYXNvbi5wYXRoXVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydhY3RpdmUnOiByb3V0ZXIuaXNSb3V0ZUFjdGl2ZShyb3V0ZXIuZ2VuZXJhdGUoW3NlYXNvbi5wYXRoXSkpfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3tzZWFzb24ubmFtZX19PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnRzLXJvdXRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIGBcbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogU2Vhc29uRGVmYXVsdCwgbmFtZTogXCJTZWFzb25EZWZhdWx0XCIsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAgeyBwYXRoOiAnL1N1bW1lcjIwMTYvLi4uJywgY29tcG9uZW50OiBTdW1tZXIyMDE2LCBuYW1lOiBcIlN1bW1lcjIwMTZcIn0sXG4gICAgeyBwYXRoOiAnL0ZhbGwyMDE2Ly4uLicsIGNvbXBvbmVudDogRmFsbDIwMTYsIG5hbWU6IFwiRmFsbDIwMTZcIn0sXG4gICAgeyBwYXRoOiAnL1dpbnRlcjIwMTcvLi4uJywgY29tcG9uZW50OiBXaW50ZXIyMDE3LCBuYW1lOiBcIldpbnRlcjIwMTdcIn0sXG4gICAgeyBwYXRoOiAnLyoqJywgcmVkaXJlY3RUbzogWydTZWFzb25EZWZhdWx0J10gfVxuXSlcblxuZXhwb3J0IGNsYXNzIEFkdmVudHVyZXMge1xuXG4gICAgc2Vhc29ucyA6IE9iamVjdFtdO1xuXG4gICAgc2VsZWN0ZWQgOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IgKHBhcmFtcyA6IFJvdXRlUGFyYW1zLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuc2Vhc29ucyA9IEFkdmVudHVyZXNWYXJzLnNlYXNvbnM7XG4gICAgfVxufVxuIl19