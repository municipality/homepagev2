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
                        template: "\n        <div class=\"fashion fadeIn\">\n            <div class=\"fashion-row\">\n            <div class=\"seasons-container\">\n            <div class=\"seasons\"\n            [ngClass]=\"{'split': !router.isRouteActive(router.generate(['SeasonDefault']))}\">\n                <div class=\"header\">\n                    <h4>Seasons</h4>\n                </div>\n                <div class=\"season\" *ngFor=\"#season of seasons\"\n                [routerLink]=\"[season.path]\"\n                [ngClass]=\"{'active': router.isRouteActive(router.generate([season.path]))}\">\n                    <h3>{{season.name}}</h3>\n                </div>\n            </div>\n            </div>\n            <div class=\"styles-router-container\">\n                <router-outlet></router-outlet>\n            </div>\n            </div>\n        </div>\n\n    "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFzaGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhc2hpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE0Q0E7Z0JBS0ksaUJBQWEsTUFBb0IsRUFBVSxNQUFjO29CQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztnQkFDdkMsQ0FBQztnQkF6Q0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsUUFBUSxFQUFHLHUxQkFzQlY7cUJBQ0osQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNULEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsa0NBQWEsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ2pGLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSx1QkFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7d0JBQ3JFLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSx1QkFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7d0JBQ3JFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBRTtxQkFDakQsQ0FBQzs7MkJBQUE7Z0JBVUYsY0FBQztZQUFELENBQUMsQUFSRCxJQVFDO1lBUkQsNkJBUUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZywgUm91dGVyLCBSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCBGYXNoaW9uVmFycyA9IHJlcXVpcmUoJy4vZmFzaGlvbi5zZWFzb25zJyk7XG5pbXBvcnQge1N1bW1lcjIwMTZ9IGZyb20gJy4vc3VtbWVyMjAxNic7XG5pbXBvcnQge1dpbnRlcjIwMTd9IGZyb20gJy4vd2ludGVyMjAxNyc7XG5pbXBvcnQge1NlYXNvbkRlZmF1bHR9IGZyb20gJy4vZmFzaGlvbi5jb21wb25lbnRzJztcblxuXG5AQ29tcG9uZW50ICh7XG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZhc2hpb24gZmFkZUluXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmFzaGlvbi1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb25zLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXNvbnNcIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydzcGxpdCc6ICFyb3V0ZXIuaXNSb3V0ZUFjdGl2ZShyb3V0ZXIuZ2VuZXJhdGUoWydTZWFzb25EZWZhdWx0J10pKX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND5TZWFzb25zPC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29uXCIgKm5nRm9yPVwiI3NlYXNvbiBvZiBzZWFzb25zXCJcbiAgICAgICAgICAgICAgICBbcm91dGVyTGlua109XCJbc2Vhc29uLnBhdGhdXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6IHJvdXRlci5pc1JvdXRlQWN0aXZlKHJvdXRlci5nZW5lcmF0ZShbc2Vhc29uLnBhdGhdKSl9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz57e3NlYXNvbi5uYW1lfX08L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdHlsZXMtcm91dGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgYFxufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAgICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBTZWFzb25EZWZhdWx0LCBuYW1lOiBcIlNlYXNvbkRlZmF1bHRcIiwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcbiAgICB7IHBhdGg6ICcvU3VtbWVyMjAxNi8uLi4nLCBjb21wb25lbnQ6IFN1bW1lcjIwMTYsIG5hbWU6IFwiU3VtbWVyMjAxNlwifSxcbiAgICB7IHBhdGg6ICcvV2ludGVyMjAxNy8uLi4nLCBjb21wb25lbnQ6IFdpbnRlcjIwMTcsIG5hbWU6IFwiV2ludGVyMjAxN1wifSxcbiAgICB7IHBhdGg6ICcvKionLCByZWRpcmVjdFRvOiBbJ1NlYXNvbkRlZmF1bHQnXSB9XG5dKVxuXG5leHBvcnQgY2xhc3MgRmFzaGlvbiB7XG5cbiAgICBzZWFzb25zIDogT2JqZWN0W107XG5cbiAgICBzZWxlY3RlZCA6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvciAocGFyYW1zIDogUm91dGVQYXJhbXMsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5zZWFzb25zID0gRmFzaGlvblZhcnMuc2Vhc29ucztcbiAgICB9XG59XG4iXX0=