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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWVyMjAxNi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1bW1lcjIwMTYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQUNJO2dCQUVBLENBQUM7Z0JBYkw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixVQUFVLEVBQUcsQ0FBQyx1Q0FBa0IsQ0FBQzt3QkFDakMsUUFBUSxFQUFFLG1KQUtUO3FCQUNKLENBQUM7O3FDQUFBO2dCQU1GLHdCQUFDO1lBQUQsQ0FBQyxBQUpELElBSUM7WUFKRCxpREFJQyxDQUFBO1lBeUJEO2dCQUtJLG9CQUFhLE1BQW9CLEVBQVUsTUFBYTtvQkFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO29CQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUUvQyxDQUFDO2dCQWhDTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRSxrY0FZVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQztxQkFDbEMsQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNULEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsa0NBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQzt3QkFDbEYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUM7d0JBQzVFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO3FCQUNqRCxDQUFDOzs4QkFBQTtnQkFZRixpQkFBQztZQUFELENBQUMsQUFYRCxJQVdDO1lBWEQsbUNBV0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnLCBSb3V0ZXIsIFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xyXG5cclxuaW1wb3J0IEZhc2hpb25WYXJzID0gcmVxdWlyZSgnLi9mYXNoaW9uLnNlYXNvbnMnKTtcclxuaW1wb3J0IHtQcmVzZW50YXRpb25IZWFkZXJ9IGZyb20gJy4vZmFzaGlvbi5jb21wb25lbnRzJztcclxuaW1wb3J0IHtTZWFzb25EZWZhdWx0fSBmcm9tICcuL2Zhc2hpb24uY29tcG9uZW50cyc7XHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbiAgICBkaXJlY3RpdmVzIDogW1ByZXNlbnRhdGlvbkhlYWRlcl0sXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmVzZW50YXRpb25cIj5cclxuICAgICAgICAgICAgPHByZXNlbnRhdGlvbi1oZWFkZXI+PC9wcmVzZW50YXRpb24taGVhZGVyPlxyXG4gICAgICAgICAgICA8cD5DaGlsbGluPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1bW1lcjIwMTZDaGlsbGluIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50ICh7XHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdHlsZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGg0PlN0eWxlczwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3R5bGVcIiAqbmdGb3I9XCIjc3R5bGUgb2YgbGlzdEl0ZW1zXCJcclxuICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiW3N0eWxlLnBhdGhdXCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydhY3RpdmUnOiByb3V0ZXIuaXNSb3V0ZUFjdGl2ZShyb3V0ZXIuZ2VuZXJhdGUoW3N0eWxlLnBhdGhdKSl9XCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+e3tzdHlsZS5kaXNwbGF5fX08L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxyXG59KVxyXG5cclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IFNlYXNvbkRlZmF1bHQsIG5hbWU6IFwiU2Vhc29uRGVmYXVsdDJcIiwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcclxuICAgIHsgcGF0aDogJy9DaGlsbGluJywgY29tcG9uZW50OiBTdW1tZXIyMDE2Q2hpbGxpbiwgbmFtZTogJ1N1bW1lcjIwMTZDaGlsbGluJ30sXHJcbiAgICB7IHBhdGg6ICcvKionLCByZWRpcmVjdFRvOiBbJ1NlYXNvbkRlZmF1bHQyJ119XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBTdW1tZXIyMDE2IHtcclxuICAgIHNlYXNvbiA6IHN0cmluZztcclxuICAgIGxpc3RJdGVtcyA6IHN0cmluZ1tdO1xyXG4gICAgc2Vhc29ucztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocGFyYW1zIDogUm91dGVQYXJhbXMsIHByaXZhdGUgcm91dGVyOlJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuc2Vhc29ucyA9IEZhc2hpb25WYXJzLnNlYXNvbkl0ZW1zO1xyXG4gICAgICAgIHRoaXMuc2Vhc29uID0gXCJTdW1tZXIyMDE2XCI7XHJcbiAgICAgICAgdGhpcy5saXN0SXRlbXMgPSB0aGlzLnNlYXNvbnNbdGhpcy5zZWFzb25dO1xyXG5cclxuICAgIH1cclxufVxyXG4iXX0=