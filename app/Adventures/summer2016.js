System.register(['@angular/core', '@angular/router-deprecated', './adventures.seasons', './adventures.components'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, AdventuresVars, adventures_components_1, adventures_components_2;
    var Summer2016LosAngeles, Summer2016;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (AdventuresVars_1) {
                AdventuresVars = AdventuresVars_1;
            },
            function (adventures_components_1_1) {
                adventures_components_1 = adventures_components_1_1;
                adventures_components_2 = adventures_components_1_1;
            }],
        execute: function() {
            Summer2016LosAngeles = (function () {
                function Summer2016LosAngeles() {
                }
                Summer2016LosAngeles = __decorate([
                    core_1.Component({
                        selector: 'summer2016losangeles',
                        directives: [adventures_components_1.PresentationHeader],
                        template: "\n        <div class=\"presentation summer2016losangeles\">\n            <presentation-header></presentation-header>\n            <!--<h1 class=\"header\" align=\"center\">Chillin</h1>-->\n\n            <div class=\"santa-monica\">\n                <img class=\"santa-monica-img\" src=\"images/santamonica.jpg\">\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Summer2016LosAngeles);
                return Summer2016LosAngeles;
            }());
            exports_1("Summer2016LosAngeles", Summer2016LosAngeles);
            Summer2016 = (function () {
                function Summer2016(params, router) {
                    this.router = router;
                    this.seasons = AdventuresVars.seasonItems;
                    this.season = "Summer2016";
                    this.listItems = this.seasons[this.season];
                }
                Summer2016 = __decorate([
                    core_1.Component({
                        selector: 'events',
                        template: "\n        <div class=\"events-container\">\n        <div class=\"events\">\n            <div class=\"header\">\n                <h4>Adventure</h4>\n            </div>\n            <div class=\"event\" *ngFor=\"let adventure of listItems\"\n            [routerLink]=\"[adventure.path, adventure.path]\"\n            [ngClass]=\"{'active': router.isRouteActive(router.generate([adventure.path]))}\">\n                <div class=\"event-name-container\">\n                    <h3>{{adventure.display}}</h3>\n                    <!--<h5 *ngIf=\"adventure.dateEnd\">{{adventure.dateStart}} - {{adventure.dateEnd}}</h5>\n                    <h5 *ngIf=\"adventure.dateEnd == null\">{{adventure.dateStart}}</h5>-->\n                </div>\n            </div>\n        </div>\n        </div>\n        <div class=\"presentation-router-container\">\n            <router-outlet></router-outlet>\n        </div>\n\n    ",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', component: adventures_components_2.SeasonDefault, name: "SeasonDefault2", useAsDefault: true },
                        //{ path: '/LosAngeles', component: Summer2016LosAngeles, name: 'Summer2016LosAngeles'},
                        { path: '/LosAngeles', component: adventures_components_2.PhotoGallery, name: 'Summer2016LosAngeles' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWVyMjAxNi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1bW1lcjIwMTYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUJBO2dCQUNJO2dCQUVBLENBQUM7Z0JBbEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLHNCQUFzQjt3QkFDakMsVUFBVSxFQUFHLENBQUMsMENBQWtCLENBQUM7d0JBQ2pDLFFBQVEsRUFBRSxvV0FTVDtxQkFDSixDQUFDOzt3Q0FBQTtnQkFNRiwyQkFBQztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQsdURBSUMsQ0FBQTtZQXFDRDtnQkFLSSxvQkFBYSxNQUFvQixFQUFVLE1BQWE7b0JBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDO29CQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFL0MsQ0FBQztnQkEzQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsUUFBUTt3QkFDbkIsUUFBUSxFQUFFLDQ0QkFxQlQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMscUNBQWlCLENBQUM7cUJBQ2xDLENBQUM7b0JBRUQsK0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLHFDQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ2xGLHdGQUF3Rjt3QkFDeEYsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxvQ0FBWSxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBQzt3QkFDN0UsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEVBQUM7cUJBQ2pELENBQUM7OzhCQUFBO2dCQVlGLGlCQUFDO1lBQUQsQ0FBQyxBQVhELElBV0M7WUFYRCxtQ0FXQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnLCBSb3V0ZXIsIFJvdXRlUGFyYW1zfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5pbXBvcnQge0h0dHB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgQWR2ZW50dXJlc1ZhcnMgPSByZXF1aXJlKCcuL2FkdmVudHVyZXMuc2Vhc29ucycpO1xuaW1wb3J0IHtQcmVzZW50YXRpb25IZWFkZXJ9IGZyb20gJy4vYWR2ZW50dXJlcy5jb21wb25lbnRzJztcbmltcG9ydCB7U2Vhc29uRGVmYXVsdCwgUGhvdG9HYWxsZXJ5fSBmcm9tICcuL2FkdmVudHVyZXMuY29tcG9uZW50cyc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdzdW1tZXIyMDE2bG9zYW5nZWxlcycsXG4gICAgZGlyZWN0aXZlcyA6IFtQcmVzZW50YXRpb25IZWFkZXJdLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmVzZW50YXRpb24gc3VtbWVyMjAxNmxvc2FuZ2VsZXNcIj5cbiAgICAgICAgICAgIDxwcmVzZW50YXRpb24taGVhZGVyPjwvcHJlc2VudGF0aW9uLWhlYWRlcj5cbiAgICAgICAgICAgIDwhLS08aDEgY2xhc3M9XCJoZWFkZXJcIiBhbGlnbj1cImNlbnRlclwiPkNoaWxsaW48L2gxPi0tPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2FudGEtbW9uaWNhXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInNhbnRhLW1vbmljYS1pbWdcIiBzcmM9XCJpbWFnZXMvc2FudGFtb25pY2EuanBnXCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFN1bW1lcjIwMTZMb3NBbmdlbGVzIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG5cblxuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnZXZlbnRzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGg0PkFkdmVudHVyZTwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJldmVudFwiICpuZ0Zvcj1cImxldCBhZHZlbnR1cmUgb2YgbGlzdEl0ZW1zXCJcbiAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cIlthZHZlbnR1cmUucGF0aCwgYWR2ZW50dXJlLnBhdGhdXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogcm91dGVyLmlzUm91dGVBY3RpdmUocm91dGVyLmdlbmVyYXRlKFthZHZlbnR1cmUucGF0aF0pKX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtbmFtZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPnt7YWR2ZW50dXJlLmRpc3BsYXl9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08aDUgKm5nSWY9XCJhZHZlbnR1cmUuZGF0ZUVuZFwiPnt7YWR2ZW50dXJlLmRhdGVTdGFydH19IC0ge3thZHZlbnR1cmUuZGF0ZUVuZH19PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGg1ICpuZ0lmPVwiYWR2ZW50dXJlLmRhdGVFbmQgPT0gbnVsbFwiPnt7YWR2ZW50dXJlLmRhdGVTdGFydH19PC9oNT4tLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmVzZW50YXRpb24tcm91dGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cblxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAgICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBTZWFzb25EZWZhdWx0LCBuYW1lOiBcIlNlYXNvbkRlZmF1bHQyXCIsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAgLy97IHBhdGg6ICcvTG9zQW5nZWxlcycsIGNvbXBvbmVudDogU3VtbWVyMjAxNkxvc0FuZ2VsZXMsIG5hbWU6ICdTdW1tZXIyMDE2TG9zQW5nZWxlcyd9LFxuICAgIHsgcGF0aDogJy9Mb3NBbmdlbGVzJywgY29tcG9uZW50OiBQaG90b0dhbGxlcnksIG5hbWU6ICdTdW1tZXIyMDE2TG9zQW5nZWxlcyd9LFxuICAgIHsgcGF0aDogJy8qKicsIHJlZGlyZWN0VG86IFsnU2Vhc29uRGVmYXVsdDInXX1cbl0pXG5leHBvcnQgY2xhc3MgU3VtbWVyMjAxNiB7XG4gICAgc2Vhc29uIDogc3RyaW5nO1xuICAgIGxpc3RJdGVtcyA6IHN0cmluZ1tdO1xuICAgIHNlYXNvbnM7XG5cbiAgICBjb25zdHJ1Y3RvciAocGFyYW1zIDogUm91dGVQYXJhbXMsIHByaXZhdGUgcm91dGVyOlJvdXRlcikge1xuICAgICAgICB0aGlzLnNlYXNvbnMgPSBBZHZlbnR1cmVzVmFycy5zZWFzb25JdGVtcztcbiAgICAgICAgdGhpcy5zZWFzb24gPSBcIlN1bW1lcjIwMTZcIjtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMgPSB0aGlzLnNlYXNvbnNbdGhpcy5zZWFzb25dO1xuXG4gICAgfVxufVxuIl19