System.register(['@angular/core', '@angular/router-deprecated', './adventures.seasons'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, FashionVars;
    var SeasonDefault, Fall2016Cool, Fall2016;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
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
            Fall2016Cool = (function () {
                function Fall2016Cool() {
                }
                Fall2016Cool = __decorate([
                    core_1.Component({
                        template: "\n        <div>\n            <p>Cool</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Fall2016Cool);
                return Fall2016Cool;
            }());
            exports_1("Fall2016Cool", Fall2016Cool);
            Fall2016 = (function () {
                function Fall2016(params, router) {
                    this.router = router;
                    this.seasons = FashionVars.seasonItems;
                    this.season = "Fall2016";
                    this.listItems = this.seasons[this.season];
                }
                Fall2016 = __decorate([
                    core_1.Component({
                        selector: 'events',
                        template: "\n        <div class=\"events-container\">\n        <div class=\"events\">\n            <div class=\"header\">\n                <h4>Adventure</h4>\n            </div>\n            <div class=\"event\" *ngFor=\"let style of listItems\"\n            [routerLink]=\"[style.path]\"\n            [ngClass]=\"{'active': router.isRouteActive(router.generate([style.path]))}\">\n                <h3>{{style.display}}</h3>\n            </div>\n        </div>\n        </div>\n        <div class=\"presentation-router-container\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', component: SeasonDefault, name: "Fall2016Default", useAsDefault: true },
                        // { path: '/Cool', component: Winter2017Cool, name: 'Winter2017Cool'},
                        { path: '/**', redirectTo: ['Fall2016Default'] }
                    ]), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams, router_deprecated_1.Router])
                ], Fall2016);
                return Fall2016;
            }());
            exports_1("Fall2016", Fall2016);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFsbDIwMTYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmYWxsMjAxNi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWNBO2dCQUNJO2dCQUVBLENBQUM7Z0JBWEw7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUseUNBSVQ7cUJBQ0osQ0FBQzs7aUNBQUE7Z0JBTUYsb0JBQUM7WUFBRCxDQUFDLEFBSkQsSUFJQztZQUpELHlDQUlDLENBQUE7WUFVRDtnQkFDSTtnQkFFQSxDQUFDO2dCQVhMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLGdFQUlUO3FCQUNKLENBQUM7O2dDQUFBO2dCQU1GLG1CQUFDO1lBQUQsQ0FBQyxBQUpELElBSUM7WUFKRCx1Q0FJQyxDQUFBO1lBOEJEO2dCQUtJLGtCQUFhLE1BQW9CLEVBQVUsTUFBYTtvQkFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO29CQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUUvQyxDQUFDO2dCQXJDTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxRQUFRO3dCQUNuQixRQUFRLEVBQUUsNmtCQWdCVDt3QkFDRCxVQUFVLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQztxQkFDbEMsQ0FBQztvQkFFRCwrQkFBVyxDQUFDO3dCQUNULEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3dCQUNuRix1RUFBdUU7d0JBQ3ZFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFDO3FCQUNsRCxDQUFDOzs0QkFBQTtnQkFZRixlQUFDO1lBQUQsQ0FBQyxBQVhELElBV0M7WUFYRCwrQkFXQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnLCBSb3V0ZXIsIFJvdXRlUGFyYW1zfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5pbXBvcnQge0h0dHB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgRmFzaGlvblZhcnMgPSByZXF1aXJlKCcuL2FkdmVudHVyZXMuc2Vhc29ucycpO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgU2Vhc29uRGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxufVxuXG5AQ29tcG9uZW50ICh7XG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPkNvb2w8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBGYWxsMjAxNkNvb2wge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cbn1cblxuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnZXZlbnRzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGg0PkFkdmVudHVyZTwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudFwiICpuZ0Zvcj1cImxldCBzdHlsZSBvZiBsaXN0SXRlbXNcIlxuICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiW3N0eWxlLnBhdGhdXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogcm91dGVyLmlzUm91dGVBY3RpdmUocm91dGVyLmdlbmVyYXRlKFtzdHlsZS5wYXRoXSkpfVwiPlxuICAgICAgICAgICAgICAgIDxoMz57e3N0eWxlLmRpc3BsYXl9fTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJlc2VudGF0aW9uLXJvdXRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IFNlYXNvbkRlZmF1bHQsIG5hbWU6IFwiRmFsbDIwMTZEZWZhdWx0XCIsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAgLy8geyBwYXRoOiAnL0Nvb2wnLCBjb21wb25lbnQ6IFdpbnRlcjIwMTdDb29sLCBuYW1lOiAnV2ludGVyMjAxN0Nvb2wnfSxcbiAgICB7IHBhdGg6ICcvKionLCByZWRpcmVjdFRvOiBbJ0ZhbGwyMDE2RGVmYXVsdCddfVxuXSlcbmV4cG9ydCBjbGFzcyBGYWxsMjAxNiB7XG4gICAgc2Vhc29uIDogc3RyaW5nO1xuICAgIGxpc3RJdGVtcyA6IHN0cmluZ1tdO1xuICAgIHNlYXNvbnM7XG5cbiAgICBjb25zdHJ1Y3RvciAocGFyYW1zIDogUm91dGVQYXJhbXMsIHByaXZhdGUgcm91dGVyOlJvdXRlcikge1xuICAgICAgICB0aGlzLnNlYXNvbnMgPSBGYXNoaW9uVmFycy5zZWFzb25JdGVtcztcbiAgICAgICAgdGhpcy5zZWFzb24gPSBcIkZhbGwyMDE2XCI7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zID0gdGhpcy5zZWFzb25zW3RoaXMuc2Vhc29uXTtcblxuICAgIH1cbn1cbiJdfQ==