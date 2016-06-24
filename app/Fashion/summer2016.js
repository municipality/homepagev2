System.register(['angular2/core', 'angular2/router', './fashion.seasons', './fashion.components'], function(exports_1, context_1) {
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
    var core_1, router_1, FashionVars, fashion_components_1, fashion_components_2;
    var Summer2016Chillin, Summer2016;
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
            function (fashion_components_1_1) {
                fashion_components_1 = fashion_components_1_1;
                fashion_components_2 = fashion_components_1_1;
            }],
        execute: function() {
            Summer2016Chillin = (function () {
                function Summer2016Chillin() {
                }
                Summer2016Chillin = __decorate([
                    core_1.Component({
                        directives: [fashion_components_1.PresentationHeader],
                        template: "\n        <div class=\"presentation\">\n            <presentation-header></presentation-header>\n            <p>Chillin</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Summer2016Chillin);
                return Summer2016Chillin;
            }());
            exports_1("Summer2016Chillin", Summer2016Chillin);
            Summer2016 = (function () {
                function Summer2016(params, router) {
                    this.router = router;
                    this.seasons = FashionVars.seasonItems;
                    this.season = "Summer2016";
                    this.listItems = this.seasons[this.season];
                }
                Summer2016 = __decorate([
                    core_1.Component({
                        template: "\n        <div class=\"styles\">\n            <div class=\"header\">\n                <h4>Styles</h4>\n            </div>\n            <div class=\"style\" *ngFor=\"#style of listItems\"\n            [routerLink]=\"[style.path]\"\n            [ngClass]=\"{'active': router.isRouteActive(router.generate([style.path]))}\">\n                <h3>{{style.display}}</h3>\n            </div>\n        </div>\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: fashion_components_2.SeasonDefault, name: "SeasonDefault2", useAsDefault: true },
                        { path: '/Chillin', component: Summer2016Chillin, name: 'Summer2016Chillin' },
                        { path: '/**', redirectTo: ['SeasonDefault2'] }
                    ]), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router])
                ], Summer2016);
                return Summer2016;
            }());
            exports_1("Summer2016", Summer2016);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWVyMjAxNi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1bW1lcjIwMTYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQUNJO2dCQUVBLENBQUM7Z0JBYkw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixVQUFVLEVBQUcsQ0FBQyx1Q0FBa0IsQ0FBQzt3QkFDakMsUUFBUSxFQUFFLG1KQUtUO3FCQUNKLENBQUM7O3FDQUFBO2dCQU1GLHdCQUFDO1lBQUQsQ0FBQyxBQUpELElBSUM7WUFKRCxpREFJQyxDQUFBO1lBeUJEO2dCQUtJLG9CQUFhLE1BQW9CLEVBQVUsTUFBYTtvQkFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO29CQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUUvQyxDQUFDO2dCQWhDTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRSxrY0FZVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDbEMsQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNULEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsa0NBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQzt3QkFDbEYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUM7d0JBQzVFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO3FCQUNqRCxDQUFDOzs4QkFBQTtnQkFZRixpQkFBQztZQUFELENBQUMsQUFYRCxJQVdDO1lBWEQsbUNBV0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZywgUm91dGVyLCBSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCBGYXNoaW9uVmFycyA9IHJlcXVpcmUoJy4vZmFzaGlvbi5zZWFzb25zJyk7XG5pbXBvcnQge1ByZXNlbnRhdGlvbkhlYWRlcn0gZnJvbSAnLi9mYXNoaW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IHtTZWFzb25EZWZhdWx0fSBmcm9tICcuL2Zhc2hpb24uY29tcG9uZW50cyc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBkaXJlY3RpdmVzIDogW1ByZXNlbnRhdGlvbkhlYWRlcl0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXNlbnRhdGlvblwiPlxuICAgICAgICAgICAgPHByZXNlbnRhdGlvbi1oZWFkZXI+PC9wcmVzZW50YXRpb24taGVhZGVyPlxuICAgICAgICAgICAgPHA+Q2hpbGxpbjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFN1bW1lcjIwMTZDaGlsbGluIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG5cblxuQENvbXBvbmVudCAoe1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdHlsZXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDQ+U3R5bGVzPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0eWxlXCIgKm5nRm9yPVwiI3N0eWxlIG9mIGxpc3RJdGVtc1wiXG4gICAgICAgICAgICBbcm91dGVyTGlua109XCJbc3R5bGUucGF0aF1cIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydhY3RpdmUnOiByb3V0ZXIuaXNSb3V0ZUFjdGl2ZShyb3V0ZXIuZ2VuZXJhdGUoW3N0eWxlLnBhdGhdKSl9XCI+XG4gICAgICAgICAgICAgICAgPGgzPnt7c3R5bGUuZGlzcGxheX19PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAgICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBTZWFzb25EZWZhdWx0LCBuYW1lOiBcIlNlYXNvbkRlZmF1bHQyXCIsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAgeyBwYXRoOiAnL0NoaWxsaW4nLCBjb21wb25lbnQ6IFN1bW1lcjIwMTZDaGlsbGluLCBuYW1lOiAnU3VtbWVyMjAxNkNoaWxsaW4nfSxcbiAgICB7IHBhdGg6ICcvKionLCByZWRpcmVjdFRvOiBbJ1NlYXNvbkRlZmF1bHQyJ119XG5dKVxuZXhwb3J0IGNsYXNzIFN1bW1lcjIwMTYge1xuICAgIHNlYXNvbiA6IHN0cmluZztcbiAgICBsaXN0SXRlbXMgOiBzdHJpbmdbXTtcbiAgICBzZWFzb25zO1xuXG4gICAgY29uc3RydWN0b3IgKHBhcmFtcyA6IFJvdXRlUGFyYW1zLCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5zZWFzb25zID0gRmFzaGlvblZhcnMuc2Vhc29uSXRlbXM7XG4gICAgICAgIHRoaXMuc2Vhc29uID0gXCJTdW1tZXIyMDE2XCI7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zID0gdGhpcy5zZWFzb25zW3RoaXMuc2Vhc29uXTtcblxuICAgIH1cbn1cbiJdfQ==