System.register(['angular2/core', 'angular2/router', './fashion.seasons', './summer2016', './winter2017'], function(exports_1, context_1) {
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
    var core_1, router_1, FashionVars, summer2016_1, winter2017_1;
    var SeasonDefault, Fashion;
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
            },
            function (summer2016_1_1) {
                summer2016_1 = summer2016_1_1;
            },
            function (winter2017_1_1) {
                winter2017_1 = winter2017_1_1;
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
            Fashion = (function () {
                function Fashion(params, router) {
                    this.router = router;
                    this.seasons = FashionVars.seasons;
                }
                Fashion = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n        <div class=\"fashion fadeIn\">\n            <div class=\"seasons\">\n                <div class=\"header\">\n                    <h4>Seasons</h4>\n                </div>\n                <div class=\"season\" *ngFor=\"#season of seasons\"\n                [routerLink]=\"[season.path]\"\n                [ngClass]=\"{'active': router.isRouteActive(router.generate([season.path]))}\">\n                    <h3>{{season.name}}</h3>\n                </div>\n            </div>\n            <router-outlet></router-outlet>\n        </div>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: SeasonDefault, name: "SeasonDefault", useAsDefault: true },
                        { path: '/Summer2016/...', component: summer2016_1.Summer2016, name: "Summer2016" },
                        { path: '/Winter2017/...', component: winter2017_1.Winter2017, name: "Winter2017" },
                        { path: '/**', redirectTo: ['SeasonDefault'] }
                    ]), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router])
                ], Fashion);
                return Fashion;
            }());
            exports_1("Fashion", Fashion);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFzaGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhc2hpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBQ0k7Z0JBRUEsQ0FBQztnQkFYTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRSx5Q0FJVDtxQkFDSixDQUFDOztpQ0FBQTtnQkFNRixvQkFBQztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQseUNBSUMsQ0FBQTtZQTRCRDtnQkFLSSxpQkFBYSxNQUFvQixFQUFVLE1BQWM7b0JBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO2dCQUN2QyxDQUFDO2dCQWpDTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3dCQUMvQixRQUFRLEVBQUcsd2lCQWNWO3FCQUNKLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ2pGLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSx1QkFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7d0JBQ3JFLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSx1QkFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7d0JBQ3JFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRTtxQkFDakQsQ0FBQzs7MkJBQUE7Z0JBVUYsY0FBQztZQUFELENBQUMsQUFSRCxJQVFDO1lBUkQsNkJBUUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZywgUm91dGVyLCBSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCBGYXNoaW9uVmFycyA9IHJlcXVpcmUoJy4vZmFzaGlvbi5zZWFzb25zJyk7XG5pbXBvcnQge1N1bW1lcjIwMTZ9IGZyb20gJy4vc3VtbWVyMjAxNic7XG5pbXBvcnQge1dpbnRlcjIwMTd9IGZyb20gJy4vd2ludGVyMjAxNyc7XG5cbkBDb21wb25lbnQgKHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWFzb25EZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG5cbkBDb21wb25lbnQgKHtcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmFzaGlvbiBmYWRlSW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb25zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+U2Vhc29uczwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXNvblwiICpuZ0Zvcj1cIiNzZWFzb24gb2Ygc2Vhc29uc1wiXG4gICAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiW3NlYXNvbi5wYXRoXVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydhY3RpdmUnOiByb3V0ZXIuaXNSb3V0ZUFjdGl2ZShyb3V0ZXIuZ2VuZXJhdGUoW3NlYXNvbi5wYXRoXSkpfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3tzZWFzb24ubmFtZX19PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IFNlYXNvbkRlZmF1bHQsIG5hbWU6IFwiU2Vhc29uRGVmYXVsdFwiLCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuICAgIHsgcGF0aDogJy9TdW1tZXIyMDE2Ly4uLicsIGNvbXBvbmVudDogU3VtbWVyMjAxNiwgbmFtZTogXCJTdW1tZXIyMDE2XCJ9LFxuICAgIHsgcGF0aDogJy9XaW50ZXIyMDE3Ly4uLicsIGNvbXBvbmVudDogV2ludGVyMjAxNywgbmFtZTogXCJXaW50ZXIyMDE3XCJ9LFxuICAgIHsgcGF0aDogJy8qKicsIHJlZGlyZWN0VG86IFsnU2Vhc29uRGVmYXVsdCddIH1cbl0pXG5cbmV4cG9ydCBjbGFzcyBGYXNoaW9uIHtcblxuICAgIHNlYXNvbnMgOiBPYmplY3RbXTtcblxuICAgIHNlbGVjdGVkIDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yIChwYXJhbXMgOiBSb3V0ZVBhcmFtcywgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLnNlYXNvbnMgPSBGYXNoaW9uVmFycy5zZWFzb25zO1xuICAgIH1cbn1cbiJdfQ==