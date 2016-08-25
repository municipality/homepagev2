System.register(['@angular/core', '@angular/router-deprecated', './fashion.seasons', './fashion.components'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, FashionVars, fashion_components_1, fashion_components_2;
    var Summer2016LosAngeles, Summer2016;
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
            },
            function (fashion_components_1_1) {
                fashion_components_1 = fashion_components_1_1;
                fashion_components_2 = fashion_components_1_1;
            }],
        execute: function() {
            Summer2016LosAngeles = (function () {
                function Summer2016LosAngeles() {
                }
                Summer2016LosAngeles = __decorate([
                    core_1.Component({
                        selector: 'summer2016losangeles',
                        directives: [fashion_components_1.PresentationHeader],
                        template: "\n        <div class=\"presentation summer2016losangeles\">\n            <presentation-header></presentation-header>\n            <h1 class=\"header\" align=\"center\">Chillin</h1>\n\n            <img src=\"brian-blurred.jpg\">\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Summer2016LosAngeles);
                return Summer2016LosAngeles;
            }());
            exports_1("Summer2016LosAngeles", Summer2016LosAngeles);
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
                        template: "\n        <div class=\"styles-container\">\n        <div class=\"styles\">\n            <div class=\"header\">\n                <h4>Styles</h4>\n            </div>\n            <div class=\"style\" *ngFor=\"let style of listItems\"\n            [routerLink]=\"[style.path]\"\n            [ngClass]=\"{'active': router.isRouteActive(router.generate([style.path]))}\">\n                <h3>{{style.display}}</h3>\n            </div>\n        </div>\n        </div>\n        <div class=\"presentation-router-container\">\n            <router-outlet></router-outlet>\n        </div>\n\n    ",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', component: fashion_components_2.SeasonDefault, name: "SeasonDefault2", useAsDefault: true },
                        { path: '/LosAngeles', component: Summer2016LosAngeles, name: 'Summer2016LosAngeles' },
                        { path: '/**', redirectTo: ['SeasonDefault2'] }
                    ]), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams, router_deprecated_1.Router])
                ], Summer2016);
                return Summer2016;
            }());
            exports_1("Summer2016", Summer2016);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWVyMjAxNi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1bW1lcjIwMTYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQUNJO2dCQUVBLENBQUM7Z0JBaEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLHNCQUFzQjt3QkFDakMsVUFBVSxFQUFHLENBQUMsdUNBQWtCLENBQUM7d0JBQ2pDLFFBQVEsRUFBRSwyUEFPVDtxQkFDSixDQUFDOzt3Q0FBQTtnQkFNRiwyQkFBQztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQsdURBSUMsQ0FBQTtZQStCRDtnQkFLSSxvQkFBYSxNQUFvQixFQUFVLE1BQWE7b0JBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO29CQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFL0MsQ0FBQztnQkF0Q0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsUUFBUTt3QkFDbkIsUUFBUSxFQUFFLDRrQkFpQlQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMscUNBQWlCLENBQUM7cUJBQ2xDLENBQUM7b0JBRUQsK0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGtDQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ2xGLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFDO3dCQUNyRixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQztxQkFDakQsQ0FBQzs7OEJBQUE7Z0JBWUYsaUJBQUM7WUFBRCxDQUFDLEFBWEQsSUFXQztZQVhELG1DQVdDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWcsIFJvdXRlciwgUm91dGVQYXJhbXN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcbmltcG9ydCB7SHR0cH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCBGYXNoaW9uVmFycyA9IHJlcXVpcmUoJy4vZmFzaGlvbi5zZWFzb25zJyk7XG5pbXBvcnQge1ByZXNlbnRhdGlvbkhlYWRlcn0gZnJvbSAnLi9mYXNoaW9uLmNvbXBvbmVudHMnO1xuaW1wb3J0IHtTZWFzb25EZWZhdWx0fSBmcm9tICcuL2Zhc2hpb24uY29tcG9uZW50cyc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdzdW1tZXIyMDE2bG9zYW5nZWxlcycsXG4gICAgZGlyZWN0aXZlcyA6IFtQcmVzZW50YXRpb25IZWFkZXJdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmVzZW50YXRpb24gc3VtbWVyMjAxNmxvc2FuZ2VsZXNcIj5cbiAgICAgICAgICAgIDxwcmVzZW50YXRpb24taGVhZGVyPjwvcHJlc2VudGF0aW9uLWhlYWRlcj5cbiAgICAgICAgICAgIDxoMSBjbGFzcz1cImhlYWRlclwiIGFsaWduPVwiY2VudGVyXCI+Q2hpbGxpbjwvaDE+XG5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiYnJpYW4tYmx1cnJlZC5qcGdcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFN1bW1lcjIwMTZMb3NBbmdlbGVzIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG5cblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ3N0eWxlcycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInN0eWxlcy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0eWxlc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoND5TdHlsZXM8L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3R5bGVcIiAqbmdGb3I9XCJsZXQgc3R5bGUgb2YgbGlzdEl0ZW1zXCJcbiAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cIltzdHlsZS5wYXRoXVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6IHJvdXRlci5pc1JvdXRlQWN0aXZlKHJvdXRlci5nZW5lcmF0ZShbc3R5bGUucGF0aF0pKX1cIj5cbiAgICAgICAgICAgICAgICA8aDM+e3tzdHlsZS5kaXNwbGF5fX08L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXNlbnRhdGlvbi1yb3V0ZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IFNlYXNvbkRlZmF1bHQsIG5hbWU6IFwiU2Vhc29uRGVmYXVsdDJcIiwgdXNlQXNEZWZhdWx0OiB0cnVlfSxcbiAgICB7IHBhdGg6ICcvTG9zQW5nZWxlcycsIGNvbXBvbmVudDogU3VtbWVyMjAxNkxvc0FuZ2VsZXMsIG5hbWU6ICdTdW1tZXIyMDE2TG9zQW5nZWxlcyd9LFxuICAgIHsgcGF0aDogJy8qKicsIHJlZGlyZWN0VG86IFsnU2Vhc29uRGVmYXVsdDInXX1cbl0pXG5leHBvcnQgY2xhc3MgU3VtbWVyMjAxNiB7XG4gICAgc2Vhc29uIDogc3RyaW5nO1xuICAgIGxpc3RJdGVtcyA6IHN0cmluZ1tdO1xuICAgIHNlYXNvbnM7XG5cbiAgICBjb25zdHJ1Y3RvciAocGFyYW1zIDogUm91dGVQYXJhbXMsIHByaXZhdGUgcm91dGVyOlJvdXRlcikge1xuICAgICAgICB0aGlzLnNlYXNvbnMgPSBGYXNoaW9uVmFycy5zZWFzb25JdGVtcztcbiAgICAgICAgdGhpcy5zZWFzb24gPSBcIlN1bW1lcjIwMTZcIjtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMgPSB0aGlzLnNlYXNvbnNbdGhpcy5zZWFzb25dO1xuXG4gICAgfVxufVxuIl19