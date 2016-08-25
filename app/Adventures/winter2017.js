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
    var SeasonDefault, Winter2017Cool, Winter2017;
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
            Winter2017Cool = (function () {
                function Winter2017Cool() {
                }
                Winter2017Cool = __decorate([
                    core_1.Component({
                        template: "\n        <div>\n            <p>Cool</p>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Winter2017Cool);
                return Winter2017Cool;
            }());
            exports_1("Winter2017Cool", Winter2017Cool);
            Winter2017 = (function () {
                function Winter2017(params, router) {
                    this.router = router;
                    this.seasons = FashionVars.seasonItems;
                    this.season = "Winter2017";
                    this.listItems = this.seasons[this.season];
                }
                Winter2017 = __decorate([
                    core_1.Component({
                        selector: 'events',
                        template: "\n        <div class=\"events-container\">\n        <div class=\"events\">\n            <div class=\"header\">\n                <h4>Adventure</h4>\n            </div>\n            <div class=\"event\" *ngFor=\"let style of listItems\"\n            [routerLink]=\"[style.path]\"\n            [ngClass]=\"{'active': router.isRouteActive(router.generate([style.path]))}\">\n                <h3>{{style.display}}</h3>\n            </div>\n        </div>\n        </div>\n        <div class=\"presentation-router-container\">\n            <router-outlet></router-outlet>\n        </div>\n    ",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', component: SeasonDefault, name: "Winter2017Default", useAsDefault: true },
                        // { path: '/Cool', component: Winter2017Cool, name: 'Winter2017Cool'},
                        { path: '/**', redirectTo: ['Winter2017Default'] }
                    ]), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams, router_deprecated_1.Router])
                ], Winter2017);
                return Winter2017;
            }());
            exports_1("Winter2017", Winter2017);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ludGVyMjAxNy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndpbnRlcjIwMTcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFDSTtnQkFFQSxDQUFDO2dCQVhMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLHlDQUlUO3FCQUNKLENBQUM7O2lDQUFBO2dCQU1GLG9CQUFDO1lBQUQsQ0FBQyxBQUpELElBSUM7WUFKRCx5Q0FJQyxDQUFBO1lBVUQ7Z0JBQ0k7Z0JBRUEsQ0FBQztnQkFYTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRSxnRUFJVDtxQkFDSixDQUFDOztrQ0FBQTtnQkFNRixxQkFBQztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQsMkNBSUMsQ0FBQTtZQThCRDtnQkFLSSxvQkFBYSxNQUFvQixFQUFVLE1BQWE7b0JBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO29CQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFL0MsQ0FBQztnQkFyQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsUUFBUTt3QkFDbkIsUUFBUSxFQUFFLDZrQkFnQlQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMscUNBQWlCLENBQUM7cUJBQ2xDLENBQUM7b0JBRUQsK0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQzt3QkFDckYsdUVBQXVFO3dCQUN2RSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsbUJBQW1CLENBQUMsRUFBQztxQkFDcEQsQ0FBQzs7OEJBQUE7Z0JBWUYsaUJBQUM7WUFBRCxDQUFDLEFBWEQsSUFXQztZQVhELG1DQVdDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWcsIFJvdXRlciwgUm91dGVQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcbmltcG9ydCB7SHR0cH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCBGYXNoaW9uVmFycyA9IHJlcXVpcmUoJy4vYWR2ZW50dXJlcy5zZWFzb25zJyk7XG5cbkBDb21wb25lbnQgKHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTZWFzb25EZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG5cbkBDb21wb25lbnQgKHtcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+Q29vbDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFdpbnRlcjIwMTdDb29sIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG5cblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2V2ZW50cycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50cy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoND5BZHZlbnR1cmU8L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnRcIiAqbmdGb3I9XCJsZXQgc3R5bGUgb2YgbGlzdEl0ZW1zXCJcbiAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cIltzdHlsZS5wYXRoXVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6IHJvdXRlci5pc1JvdXRlQWN0aXZlKHJvdXRlci5nZW5lcmF0ZShbc3R5bGUucGF0aF0pKX1cIj5cbiAgICAgICAgICAgICAgICA8aDM+e3tzdHlsZS5kaXNwbGF5fX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXNlbnRhdGlvbi1yb3V0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAgICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBTZWFzb25EZWZhdWx0LCBuYW1lOiBcIldpbnRlcjIwMTdEZWZhdWx0XCIsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAgLy8geyBwYXRoOiAnL0Nvb2wnLCBjb21wb25lbnQ6IFdpbnRlcjIwMTdDb29sLCBuYW1lOiAnV2ludGVyMjAxN0Nvb2wnfSxcbiAgICB7IHBhdGg6ICcvKionLCByZWRpcmVjdFRvOiBbJ1dpbnRlcjIwMTdEZWZhdWx0J119XG5dKVxuZXhwb3J0IGNsYXNzIFdpbnRlcjIwMTcge1xuICAgIHNlYXNvbiA6IHN0cmluZztcbiAgICBsaXN0SXRlbXMgOiBzdHJpbmdbXTtcbiAgICBzZWFzb25zO1xuXG4gICAgY29uc3RydWN0b3IgKHBhcmFtcyA6IFJvdXRlUGFyYW1zLCBwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5zZWFzb25zID0gRmFzaGlvblZhcnMuc2Vhc29uSXRlbXM7XG4gICAgICAgIHRoaXMuc2Vhc29uID0gXCJXaW50ZXIyMDE3XCI7XG4gICAgICAgIHRoaXMubGlzdEl0ZW1zID0gdGhpcy5zZWFzb25zW3RoaXMuc2Vhc29uXTtcblxuICAgIH1cbn1cbiJdfQ==