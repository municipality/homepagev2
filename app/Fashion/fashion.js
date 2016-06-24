System.register(['angular2/core', 'angular2/router', './fashion.seasons', './summer2016', './winter2017', './fashion.components'], function(exports_1, context_1) {
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
    var core_1, router_1, FashionVars, summer2016_1, winter2017_1, fashion_components_1;
    var Fashion;
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
            },
            function (fashion_components_1_1) {
                fashion_components_1 = fashion_components_1_1;
            }],
        execute: function() {
            Fashion = (function () {
                function Fashion(params, router) {
                    this.router = router;
                    this.seasons = FashionVars.seasons;
                }
                Fashion = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n        <div class=\"fashion fadeIn\">\n            <div class=\"seasons\"\n            [ngClass]=\"{'split': !router.isRouteActive(router.generate(['SeasonDefault']))}\">\n                <div class=\"header\">\n                    <h4>Seasons</h4>\n                </div>\n                <div class=\"season\" *ngFor=\"#season of seasons\"\n                [routerLink]=\"[season.path]\"\n                [ngClass]=\"{'active': router.isRouteActive(router.generate([season.path]))}\">\n                    <h3>{{season.name}}</h3>\n                </div>\n            </div>\n            <router-outlet></router-outlet>\n        </div>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: fashion_components_1.SeasonDefault, name: "SeasonDefault", useAsDefault: true },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFzaGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhc2hpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQ0E7Z0JBS0ksaUJBQWEsTUFBb0IsRUFBVSxNQUFjO29CQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztnQkFDdkMsQ0FBQztnQkFsQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsUUFBUSxFQUFHLHdvQkFlVjtxQkFDSixDQUFDO29CQUVELG9CQUFXLENBQUM7d0JBQ1QsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxrQ0FBYSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQzt3QkFDakYsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLHVCQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQzt3QkFDckUsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLHVCQUFVLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQzt3QkFDckUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFO3FCQUNqRCxDQUFDOzsyQkFBQTtnQkFVRixjQUFDO1lBQUQsQ0FBQyxBQVJELElBUUM7WUFSRCw2QkFRQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnLCBSb3V0ZXIsIFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuaW1wb3J0IEZhc2hpb25WYXJzID0gcmVxdWlyZSgnLi9mYXNoaW9uLnNlYXNvbnMnKTtcbmltcG9ydCB7U3VtbWVyMjAxNn0gZnJvbSAnLi9zdW1tZXIyMDE2JztcbmltcG9ydCB7V2ludGVyMjAxN30gZnJvbSAnLi93aW50ZXIyMDE3JztcbmltcG9ydCB7U2Vhc29uRGVmYXVsdH0gZnJvbSAnLi9mYXNoaW9uLmNvbXBvbmVudHMnO1xuXG5cbkBDb21wb25lbnQgKHtcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmFzaGlvbiBmYWRlSW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb25zXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnc3BsaXQnOiAhcm91dGVyLmlzUm91dGVBY3RpdmUocm91dGVyLmdlbmVyYXRlKFsnU2Vhc29uRGVmYXVsdCddKSl9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+U2Vhc29uczwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXNvblwiICpuZ0Zvcj1cIiNzZWFzb24gb2Ygc2Vhc29uc1wiXG4gICAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiW3NlYXNvbi5wYXRoXVwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydhY3RpdmUnOiByb3V0ZXIuaXNSb3V0ZUFjdGl2ZShyb3V0ZXIuZ2VuZXJhdGUoW3NlYXNvbi5wYXRoXSkpfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3tzZWFzb24ubmFtZX19PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IFNlYXNvbkRlZmF1bHQsIG5hbWU6IFwiU2Vhc29uRGVmYXVsdFwiLCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuICAgIHsgcGF0aDogJy9TdW1tZXIyMDE2Ly4uLicsIGNvbXBvbmVudDogU3VtbWVyMjAxNiwgbmFtZTogXCJTdW1tZXIyMDE2XCJ9LFxuICAgIHsgcGF0aDogJy9XaW50ZXIyMDE3Ly4uLicsIGNvbXBvbmVudDogV2ludGVyMjAxNywgbmFtZTogXCJXaW50ZXIyMDE3XCJ9LFxuICAgIHsgcGF0aDogJy8qKicsIHJlZGlyZWN0VG86IFsnU2Vhc29uRGVmYXVsdCddIH1cbl0pXG5cbmV4cG9ydCBjbGFzcyBGYXNoaW9uIHtcblxuICAgIHNlYXNvbnMgOiBPYmplY3RbXTtcblxuICAgIHNlbGVjdGVkIDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yIChwYXJhbXMgOiBSb3V0ZVBhcmFtcywgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLnNlYXNvbnMgPSBGYXNoaW9uVmFycy5zZWFzb25zO1xuICAgIH1cbn1cbiJdfQ==