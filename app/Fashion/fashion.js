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
                        template: "\n        <div class=\"fashion fadeIn\">\n            <div class=\"seasons\"\n            [ngClass]=\"{'split': !router.isRouteActive(router.generate(['SeasonDefault']))}\">\n                <div class=\"header\">\n                    <h4>Seasons</h4>\n                </div>\n                <div class=\"season\" *ngFor=\"#season of seasons\"\n                [routerLink]=\"[season.path]\"\n                [ngClass]=\"{'active': router.isRouteActive(router.generate([season.path]))}\">\n                    <h3>{{season.name}}</h3>\n                </div>\n            </div>\n            <div class=\"styles-router-container\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFzaGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhc2hpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1Q0E7Z0JBS0ksaUJBQWEsTUFBb0IsRUFBVSxNQUFjO29CQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztnQkFDdkMsQ0FBQztnQkFwQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsUUFBUSxFQUFHLHF0QkFpQlY7cUJBQ0osQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNULEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsa0NBQWEsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ2pGLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSx1QkFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7d0JBQ3JFLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSx1QkFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7d0JBQ3JFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRTtxQkFDakQsQ0FBQzs7MkJBQUE7Z0JBVUYsY0FBQztZQUFELENBQUMsQUFSRCxJQVFDO1lBUkQsNkJBUUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZywgUm91dGVyLCBSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCBGYXNoaW9uVmFycyA9IHJlcXVpcmUoJy4vZmFzaGlvbi5zZWFzb25zJyk7XG5pbXBvcnQge1N1bW1lcjIwMTZ9IGZyb20gJy4vc3VtbWVyMjAxNic7XG5pbXBvcnQge1dpbnRlcjIwMTd9IGZyb20gJy4vd2ludGVyMjAxNyc7XG5pbXBvcnQge1NlYXNvbkRlZmF1bHR9IGZyb20gJy4vZmFzaGlvbi5jb21wb25lbnRzJztcblxuXG5AQ29tcG9uZW50ICh7XG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZhc2hpb24gZmFkZUluXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29uc1wiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J3NwbGl0JzogIXJvdXRlci5pc1JvdXRlQWN0aXZlKHJvdXRlci5nZW5lcmF0ZShbJ1NlYXNvbkRlZmF1bHQnXSkpfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PlNlYXNvbnM8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb25cIiAqbmdGb3I9XCIjc2Vhc29uIG9mIHNlYXNvbnNcIlxuICAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cIltzZWFzb24ucGF0aF1cIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogcm91dGVyLmlzUm91dGVBY3RpdmUocm91dGVyLmdlbmVyYXRlKFtzZWFzb24ucGF0aF0pKX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPnt7c2Vhc29uLm5hbWV9fTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdHlsZXMtcm91dGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IFNlYXNvbkRlZmF1bHQsIG5hbWU6IFwiU2Vhc29uRGVmYXVsdFwiLCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuICAgIHsgcGF0aDogJy9TdW1tZXIyMDE2Ly4uLicsIGNvbXBvbmVudDogU3VtbWVyMjAxNiwgbmFtZTogXCJTdW1tZXIyMDE2XCJ9LFxuICAgIHsgcGF0aDogJy9XaW50ZXIyMDE3Ly4uLicsIGNvbXBvbmVudDogV2ludGVyMjAxNywgbmFtZTogXCJXaW50ZXIyMDE3XCJ9LFxuICAgIHsgcGF0aDogJy8qKicsIHJlZGlyZWN0VG86IFsnU2Vhc29uRGVmYXVsdCddIH1cbl0pXG5cbmV4cG9ydCBjbGFzcyBGYXNoaW9uIHtcblxuICAgIHNlYXNvbnMgOiBPYmplY3RbXTtcblxuICAgIHNlbGVjdGVkIDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yIChwYXJhbXMgOiBSb3V0ZVBhcmFtcywgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLnNlYXNvbnMgPSBGYXNoaW9uVmFycy5zZWFzb25zO1xuICAgIH1cbn1cbiJdfQ==