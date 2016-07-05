System.register(['angular2/core', 'angular2/router', './adventures.seasons', './summer2016', './winter2017', './adventures.components', './fall2016'], function(exports_1, context_1) {
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
    var core_1, router_1, AdventuresVars, summer2016_1, winter2017_1, adventures_components_1, fall2016_1;
    var Adventures;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
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
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n        <div class=\"adventures fadeIn\">\n            <div class=\"adventures-row\">\n            <div class=\"seasons-container\">\n            <div class=\"seasons\"\n            [ngClass]=\"{'split': !router.isRouteActive(router.generate(['SeasonDefault']))}\">\n                <div class=\"header\">\n                    <h4>Seasons</h4>\n                </div>\n                <div class=\"season\" *ngFor=\"#season of seasons\"\n                [routerLink]=\"[season.path]\"\n                [ngClass]=\"{'active': router.isRouteActive(router.generate([season.path]))}\">\n                    <h3>{{season.name}}</h3>\n                </div>\n            </div>\n            </div>\n            <div class=\"events-router-container\">\n                <router-outlet></router-outlet>\n            </div>\n            </div>\n        </div>\n\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: adventures_components_1.SeasonDefault, name: "SeasonDefault", useAsDefault: true },
                        { path: '/Summer2016/...', component: summer2016_1.Summer2016, name: "Summer2016" },
                        { path: '/Fall2016/...', component: fall2016_1.Fall2016, name: "Fall2016" },
                        { path: '/Winter2017/...', component: winter2017_1.Winter2017, name: "Winter2017" },
                        { path: '/**', redirectTo: ['SeasonDefault'] }
                    ]), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router])
                ], Adventures);
                return Adventures;
            }());
            exports_1("Adventures", Adventures);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWR2ZW50dXJlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkdmVudHVyZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2Q0E7Z0JBS0ksb0JBQWEsTUFBb0IsRUFBVSxNQUFjO29CQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQztnQkFDMUMsQ0FBQztnQkExQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsUUFBUSxFQUFHLDYxQkFzQlY7cUJBQ0osQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNULEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUscUNBQWEsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ2pGLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSx1QkFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7d0JBQ3JFLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsbUJBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO3dCQUMvRCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsdUJBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDO3dCQUNyRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUU7cUJBQ2pELENBQUM7OzhCQUFBO2dCQVVGLGlCQUFDO1lBQUQsQ0FBQyxBQVJELElBUUM7WUFSRCxtQ0FRQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnLCBSb3V0ZXIsIFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuaW1wb3J0IEFkdmVudHVyZXNWYXJzID0gcmVxdWlyZSgnLi9hZHZlbnR1cmVzLnNlYXNvbnMnKTtcbmltcG9ydCB7U3VtbWVyMjAxNn0gZnJvbSAnLi9zdW1tZXIyMDE2JztcbmltcG9ydCB7V2ludGVyMjAxN30gZnJvbSAnLi93aW50ZXIyMDE3JztcbmltcG9ydCB7U2Vhc29uRGVmYXVsdH0gZnJvbSAnLi9hZHZlbnR1cmVzLmNvbXBvbmVudHMnO1xuaW1wb3J0IHtGYWxsMjAxNn0gZnJvbSAnLi9mYWxsMjAxNic7XG5cbkBDb21wb25lbnQgKHtcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWR2ZW50dXJlcyBmYWRlSW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZHZlbnR1cmVzLXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXNvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29uc1wiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J3NwbGl0JzogIXJvdXRlci5pc1JvdXRlQWN0aXZlKHJvdXRlci5nZW5lcmF0ZShbJ1NlYXNvbkRlZmF1bHQnXSkpfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PlNlYXNvbnM8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb25cIiAqbmdGb3I9XCIjc2Vhc29uIG9mIHNlYXNvbnNcIlxuICAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cIltzZWFzb24ucGF0aF1cIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogcm91dGVyLmlzUm91dGVBY3RpdmUocm91dGVyLmdlbmVyYXRlKFtzZWFzb24ucGF0aF0pKX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPnt7c2Vhc29uLm5hbWV9fTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50cy1yb3V0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICBgXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IFNlYXNvbkRlZmF1bHQsIG5hbWU6IFwiU2Vhc29uRGVmYXVsdFwiLCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuICAgIHsgcGF0aDogJy9TdW1tZXIyMDE2Ly4uLicsIGNvbXBvbmVudDogU3VtbWVyMjAxNiwgbmFtZTogXCJTdW1tZXIyMDE2XCJ9LFxuICAgIHsgcGF0aDogJy9GYWxsMjAxNi8uLi4nLCBjb21wb25lbnQ6IEZhbGwyMDE2LCBuYW1lOiBcIkZhbGwyMDE2XCJ9LFxuICAgIHsgcGF0aDogJy9XaW50ZXIyMDE3Ly4uLicsIGNvbXBvbmVudDogV2ludGVyMjAxNywgbmFtZTogXCJXaW50ZXIyMDE3XCJ9LFxuICAgIHsgcGF0aDogJy8qKicsIHJlZGlyZWN0VG86IFsnU2Vhc29uRGVmYXVsdCddIH1cbl0pXG5cbmV4cG9ydCBjbGFzcyBBZHZlbnR1cmVzIHtcblxuICAgIHNlYXNvbnMgOiBPYmplY3RbXTtcblxuICAgIHNlbGVjdGVkIDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yIChwYXJhbXMgOiBSb3V0ZVBhcmFtcywgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLnNlYXNvbnMgPSBBZHZlbnR1cmVzVmFycy5zZWFzb25zO1xuICAgIH1cbn1cbiJdfQ==