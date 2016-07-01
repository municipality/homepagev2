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
                        selector: 'summer2016chillin',
                        directives: [fashion_components_1.PresentationHeader],
                        template: "\n        <div class=\"presentation summer2016chillin\">\n            <presentation-header></presentation-header>\n            <h1 class=\"header\" align=\"center\">Chillin</h1>\n\n            <img src=\"brian-blurred.jpg\">\n        </div>\n    "
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
                        selector: 'styles',
                        template: "\n        <div class=\"styles-container\">\n        <div class=\"styles\">\n            <div class=\"header\">\n                <h4>Styles</h4>\n            </div>\n            <div class=\"style\" *ngFor=\"#style of listItems\"\n            [routerLink]=\"[style.path]\"\n            [ngClass]=\"{'active': router.isRouteActive(router.generate([style.path]))}\">\n                <h3>{{style.display}}</h3>\n            </div>\n        </div>\n        </div>\n        <div class=\"presentation-router-container\">\n            <router-outlet></router-outlet>\n        </div>\n\n    ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWVyMjAxNi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1bW1lcjIwMTYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQUNJO2dCQUVBLENBQUM7Z0JBaEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLG1CQUFtQjt3QkFDOUIsVUFBVSxFQUFHLENBQUMsdUNBQWtCLENBQUM7d0JBQ2pDLFFBQVEsRUFBRSx3UEFPVDtxQkFDSixDQUFDOztxQ0FBQTtnQkFNRix3QkFBQztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQsaURBSUMsQ0FBQTtZQStCRDtnQkFLSSxvQkFBYSxNQUFvQixFQUFVLE1BQWE7b0JBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO29CQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFL0MsQ0FBQztnQkF0Q0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsUUFBUTt3QkFDbkIsUUFBUSxFQUFFLHlrQkFpQlQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGtDQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ2xGLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFDO3dCQUM1RSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQztxQkFDakQsQ0FBQzs7OEJBQUE7Z0JBWUYsaUJBQUM7WUFBRCxDQUFDLEFBWEQsSUFXQztZQVhELG1DQVdDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWcsIFJvdXRlciwgUm91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5pbXBvcnQgRmFzaGlvblZhcnMgPSByZXF1aXJlKCcuL2Zhc2hpb24uc2Vhc29ucycpO1xuaW1wb3J0IHtQcmVzZW50YXRpb25IZWFkZXJ9IGZyb20gJy4vZmFzaGlvbi5jb21wb25lbnRzJztcbmltcG9ydCB7U2Vhc29uRGVmYXVsdH0gZnJvbSAnLi9mYXNoaW9uLmNvbXBvbmVudHMnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnc3VtbWVyMjAxNmNoaWxsaW4nLFxuICAgIGRpcmVjdGl2ZXMgOiBbUHJlc2VudGF0aW9uSGVhZGVyXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJlc2VudGF0aW9uIHN1bW1lcjIwMTZjaGlsbGluXCI+XG4gICAgICAgICAgICA8cHJlc2VudGF0aW9uLWhlYWRlcj48L3ByZXNlbnRhdGlvbi1oZWFkZXI+XG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkZXJcIiBhbGlnbj1cImNlbnRlclwiPkNoaWxsaW48L2gxPlxuXG4gICAgICAgICAgICA8aW1nIHNyYz1cImJyaWFuLWJsdXJyZWQuanBnXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdW1tZXIyMDE2Q2hpbGxpbiB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxufVxuXG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdzdHlsZXMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdHlsZXMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdHlsZXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDQ+U3R5bGVzPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0eWxlXCIgKm5nRm9yPVwiI3N0eWxlIG9mIGxpc3RJdGVtc1wiXG4gICAgICAgICAgICBbcm91dGVyTGlua109XCJbc3R5bGUucGF0aF1cIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydhY3RpdmUnOiByb3V0ZXIuaXNSb3V0ZUFjdGl2ZShyb3V0ZXIuZ2VuZXJhdGUoW3N0eWxlLnBhdGhdKSl9XCI+XG4gICAgICAgICAgICAgICAgPGgzPnt7c3R5bGUuZGlzcGxheX19PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmVzZW50YXRpb24tcm91dGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cblxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAgICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBTZWFzb25EZWZhdWx0LCBuYW1lOiBcIlNlYXNvbkRlZmF1bHQyXCIsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAgeyBwYXRoOiAnL0NoaWxsaW4nLCBjb21wb25lbnQ6IFN1bW1lcjIwMTZDaGlsbGluLCBuYW1lOiAnU3VtbWVyMjAxNkNoaWxsaW4nfSxcbiAgICB7IHBhdGg6ICcvKionLCByZWRpcmVjdFRvOiBbJ1NlYXNvbkRlZmF1bHQyJ119XG5dKVxuZXhwb3J0IGNsYXNzIFN1bW1lcjIwMTYge1xuICAgIHNlYXNvbiA6IHN0cmluZztcbiAgICBsaXN0SXRlbXMgOiBzdHJpbmdbXTtcbiAgICBzZWFzb25zO1xuXG4gICAgY29uc3RydWN0b3IgKHBhcmFtcyA6IFJvdXRlUGFyYW1zLCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5zZWFzb25zID0gRmFzaGlvblZhcnMuc2Vhc29uSXRlbXM7XG4gICAgICAgIHRoaXMuc2Vhc29uID0gXCJTdW1tZXIyMDE2XCI7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zID0gdGhpcy5zZWFzb25zW3RoaXMuc2Vhc29uXTtcblxuICAgIH1cbn1cbiJdfQ==