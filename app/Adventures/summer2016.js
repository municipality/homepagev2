System.register(['angular2/core', 'angular2/router', './adventures.seasons', './adventures.components'], function(exports_1, context_1) {
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
    var core_1, router_1, AdventuresVars, adventures_components_1, adventures_components_2;
    var Summer2016LosAngeles, Summer2016;
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
                        template: "\n        <div class=\"events-container\">\n        <div class=\"events\">\n            <div class=\"header\">\n                <h4>Adventure</h4>\n            </div>\n            <div class=\"event\" *ngFor=\"#adventure of listItems\"\n            [routerLink]=\"[adventure.path]\"\n            [ngClass]=\"{'active': router.isRouteActive(router.generate([adventure.path]))}\">\n                <div class=\"event-name-container\">\n                    <h3>{{adventure.display}}</h3>\n                    <!--<h5 *ngIf=\"adventure.dateEnd\">{{adventure.dateStart}} - {{adventure.dateEnd}}</h5>\n                    <h5 *ngIf=\"adventure.dateEnd == null\">{{adventure.dateStart}}</h5>-->\n                </div>\n            </div>\n        </div>\n        </div>\n        <div class=\"presentation-router-container\">\n            <router-outlet></router-outlet>\n        </div>\n\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: adventures_components_2.SeasonDefault, name: "SeasonDefault2", useAsDefault: true },
                        //{ path: '/LosAngeles', component: Summer2016LosAngeles, name: 'Summer2016LosAngeles'},
                        { path: '/LosAngeles', component: adventures_components_2.PhotoGallery, name: 'Summer2016LosAngeles', data: { id: "LA" } },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWVyMjAxNi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1bW1lcjIwMTYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUJBO2dCQUNJO2dCQUVBLENBQUM7Z0JBbEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLHNCQUFzQjt3QkFDakMsVUFBVSxFQUFHLENBQUMsMENBQWtCLENBQUM7d0JBQ2pDLFFBQVEsRUFBRSxvV0FTVDtxQkFDSixDQUFDOzt3Q0FBQTtnQkFNRiwyQkFBQztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQsdURBSUMsQ0FBQTtZQXFDRDtnQkFLSSxvQkFBYSxNQUFvQixFQUFVLE1BQWE7b0JBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDO29CQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFL0MsQ0FBQztnQkEzQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsUUFBUTt3QkFDbkIsUUFBUSxFQUFFLHkzQkFxQlQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLHFDQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ2xGLHdGQUF3Rjt3QkFDeEYsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxvQ0FBWSxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFDLEVBQUM7d0JBQy9GLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO3FCQUNqRCxDQUFDOzs4QkFBQTtnQkFZRixpQkFBQztZQUFELENBQUMsQUFYRCxJQVdDO1lBWEQsbUNBV0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZywgUm91dGVyLCBSb3V0ZVBhcmFtc30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SHR0cH0gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCBBZHZlbnR1cmVzVmFycyA9IHJlcXVpcmUoJy4vYWR2ZW50dXJlcy5zZWFzb25zJyk7XG5pbXBvcnQge1ByZXNlbnRhdGlvbkhlYWRlcn0gZnJvbSAnLi9hZHZlbnR1cmVzLmNvbXBvbmVudHMnO1xuaW1wb3J0IHtTZWFzb25EZWZhdWx0LCBQaG90b0dhbGxlcnl9IGZyb20gJy4vYWR2ZW50dXJlcy5jb21wb25lbnRzJztcblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ3N1bW1lcjIwMTZsb3NhbmdlbGVzJyxcbiAgICBkaXJlY3RpdmVzIDogW1ByZXNlbnRhdGlvbkhlYWRlcl0sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByZXNlbnRhdGlvbiBzdW1tZXIyMDE2bG9zYW5nZWxlc1wiPlxuICAgICAgICAgICAgPHByZXNlbnRhdGlvbi1oZWFkZXI+PC9wcmVzZW50YXRpb24taGVhZGVyPlxuICAgICAgICAgICAgPCEtLTxoMSBjbGFzcz1cImhlYWRlclwiIGFsaWduPVwiY2VudGVyXCI+Q2hpbGxpbjwvaDE+LS0+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYW50YS1tb25pY2FcIj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwic2FudGEtbW9uaWNhLWltZ1wiIHNyYz1cImltYWdlcy9zYW50YW1vbmljYS5qcGdcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgU3VtbWVyMjAxNkxvc0FuZ2VsZXMge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cbn1cblxuXG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdldmVudHMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJldmVudHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldmVudHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDQ+QWR2ZW50dXJlPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50XCIgKm5nRm9yPVwiI2FkdmVudHVyZSBvZiBsaXN0SXRlbXNcIlxuICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiW2FkdmVudHVyZS5wYXRoXVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6IHJvdXRlci5pc1JvdXRlQWN0aXZlKHJvdXRlci5nZW5lcmF0ZShbYWR2ZW50dXJlLnBhdGhdKSl9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LW5hbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz57e2FkdmVudHVyZS5kaXNwbGF5fX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGg1ICpuZ0lmPVwiYWR2ZW50dXJlLmRhdGVFbmRcIj57e2FkdmVudHVyZS5kYXRlU3RhcnR9fSAtIHt7YWR2ZW50dXJlLmRhdGVFbmR9fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxoNSAqbmdJZj1cImFkdmVudHVyZS5kYXRlRW5kID09IG51bGxcIj57e2FkdmVudHVyZS5kYXRlU3RhcnR9fTwvaDU+LS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJlc2VudGF0aW9uLXJvdXRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogU2Vhc29uRGVmYXVsdCwgbmFtZTogXCJTZWFzb25EZWZhdWx0MlwiLCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuICAgIC8veyBwYXRoOiAnL0xvc0FuZ2VsZXMnLCBjb21wb25lbnQ6IFN1bW1lcjIwMTZMb3NBbmdlbGVzLCBuYW1lOiAnU3VtbWVyMjAxNkxvc0FuZ2VsZXMnfSxcbiAgICB7IHBhdGg6ICcvTG9zQW5nZWxlcycsIGNvbXBvbmVudDogUGhvdG9HYWxsZXJ5LCBuYW1lOiAnU3VtbWVyMjAxNkxvc0FuZ2VsZXMnLCBkYXRhOiB7aWQ6IFwiTEFcIn19LFxuICAgIHsgcGF0aDogJy8qKicsIHJlZGlyZWN0VG86IFsnU2Vhc29uRGVmYXVsdDInXX1cbl0pXG5leHBvcnQgY2xhc3MgU3VtbWVyMjAxNiB7XG4gICAgc2Vhc29uIDogc3RyaW5nO1xuICAgIGxpc3RJdGVtcyA6IHN0cmluZ1tdO1xuICAgIHNlYXNvbnM7XG5cbiAgICBjb25zdHJ1Y3RvciAocGFyYW1zIDogUm91dGVQYXJhbXMsIHByaXZhdGUgcm91dGVyOlJvdXRlcikge1xuICAgICAgICB0aGlzLnNlYXNvbnMgPSBBZHZlbnR1cmVzVmFycy5zZWFzb25JdGVtcztcbiAgICAgICAgdGhpcy5zZWFzb24gPSBcIlN1bW1lcjIwMTZcIjtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMgPSB0aGlzLnNlYXNvbnNbdGhpcy5zZWFzb25dO1xuXG4gICAgfVxufVxuIl19