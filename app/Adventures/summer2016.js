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
                        template: "\n        <div class=\"events-container\">\n        <div class=\"events\">\n            <div class=\"header\">\n                <h4>Adventure</h4>\n            </div>\n            <div class=\"event\" *ngFor=\"let adventure of listItems\"\n            [routerLink]=\"[adventure.path]\"\n            [ngClass]=\"{'active': router.isRouteActive(router.generate([adventure.path]))}\">\n                <div class=\"event-name-container\">\n                    <h3>{{adventure.display}}</h3>\n                    <!--<h5 *ngIf=\"adventure.dateEnd\">{{adventure.dateStart}} - {{adventure.dateEnd}}</h5>\n                    <h5 *ngIf=\"adventure.dateEnd == null\">{{adventure.dateStart}}</h5>-->\n                </div>\n            </div>\n        </div>\n        </div>\n        <div class=\"presentation-router-container\">\n            <router-outlet></router-outlet>\n        </div>\n\n    ",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', component: adventures_components_2.SeasonDefault, name: "SeasonDefault2", useAsDefault: true },
                        //{ path: '/LosAngeles', component: Summer2016LosAngeles, name: 'Summer2016LosAngeles'},
                        { path: '/LosAngeles', component: adventures_components_2.PhotoGallery, name: 'Summer2016LosAngeles', data: { id: "LA" } },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWVyMjAxNi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1bW1lcjIwMTYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUJBO2dCQUNJO2dCQUVBLENBQUM7Z0JBbEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLHNCQUFzQjt3QkFDakMsVUFBVSxFQUFHLENBQUMsMENBQWtCLENBQUM7d0JBQ2pDLFFBQVEsRUFBRSxvV0FTVDtxQkFDSixDQUFDOzt3Q0FBQTtnQkFNRiwyQkFBQztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQsdURBSUMsQ0FBQTtZQXFDRDtnQkFLSSxvQkFBYSxNQUFvQixFQUFVLE1BQWE7b0JBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDO29CQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFL0MsQ0FBQztnQkEzQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsUUFBUTt3QkFDbkIsUUFBUSxFQUFFLDQzQkFxQlQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMscUNBQWlCLENBQUM7cUJBQ2xDLENBQUM7b0JBRUQsK0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLHFDQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ2xGLHdGQUF3Rjt3QkFDeEYsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxvQ0FBWSxFQUFFLElBQUksRUFBRSxzQkFBc0IsRUFBRSxJQUFJLEVBQUUsRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFDLEVBQUM7d0JBQy9GLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO3FCQUNqRCxDQUFDOzs4QkFBQTtnQkFZRixpQkFBQztZQUFELENBQUMsQUFYRCxJQVdDO1lBWEQsbUNBV0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZUNvbmZpZywgUm91dGVyLCBSb3V0ZVBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xuaW1wb3J0IHtIdHRwfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuaW1wb3J0IEFkdmVudHVyZXNWYXJzID0gcmVxdWlyZSgnLi9hZHZlbnR1cmVzLnNlYXNvbnMnKTtcbmltcG9ydCB7UHJlc2VudGF0aW9uSGVhZGVyfSBmcm9tICcuL2FkdmVudHVyZXMuY29tcG9uZW50cyc7XG5pbXBvcnQge1NlYXNvbkRlZmF1bHQsIFBob3RvR2FsbGVyeX0gZnJvbSAnLi9hZHZlbnR1cmVzLmNvbXBvbmVudHMnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnc3VtbWVyMjAxNmxvc2FuZ2VsZXMnLFxuICAgIGRpcmVjdGl2ZXMgOiBbUHJlc2VudGF0aW9uSGVhZGVyXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJlc2VudGF0aW9uIHN1bW1lcjIwMTZsb3NhbmdlbGVzXCI+XG4gICAgICAgICAgICA8cHJlc2VudGF0aW9uLWhlYWRlcj48L3ByZXNlbnRhdGlvbi1oZWFkZXI+XG4gICAgICAgICAgICA8IS0tPGgxIGNsYXNzPVwiaGVhZGVyXCIgYWxpZ249XCJjZW50ZXJcIj5DaGlsbGluPC9oMT4tLT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNhbnRhLW1vbmljYVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJzYW50YS1tb25pY2EtaW1nXCIgc3JjPVwiaW1hZ2VzL3NhbnRhbW9uaWNhLmpwZ1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdW1tZXIyMDE2TG9zQW5nZWxlcyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxufVxuXG5cblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2V2ZW50cycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50cy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxoND5BZHZlbnR1cmU8L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnRcIiAqbmdGb3I9XCJsZXQgYWR2ZW50dXJlIG9mIGxpc3RJdGVtc1wiXG4gICAgICAgICAgICBbcm91dGVyTGlua109XCJbYWR2ZW50dXJlLnBhdGhdXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogcm91dGVyLmlzUm91dGVBY3RpdmUocm91dGVyLmdlbmVyYXRlKFthZHZlbnR1cmUucGF0aF0pKX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXZlbnQtbmFtZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPnt7YWR2ZW50dXJlLmRpc3BsYXl9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08aDUgKm5nSWY9XCJhZHZlbnR1cmUuZGF0ZUVuZFwiPnt7YWR2ZW50dXJlLmRhdGVTdGFydH19IC0ge3thZHZlbnR1cmUuZGF0ZUVuZH19PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGg1ICpuZ0lmPVwiYWR2ZW50dXJlLmRhdGVFbmQgPT0gbnVsbFwiPnt7YWR2ZW50dXJlLmRhdGVTdGFydH19PC9oNT4tLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmVzZW50YXRpb24tcm91dGVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cblxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAgICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBTZWFzb25EZWZhdWx0LCBuYW1lOiBcIlNlYXNvbkRlZmF1bHQyXCIsIHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAgLy97IHBhdGg6ICcvTG9zQW5nZWxlcycsIGNvbXBvbmVudDogU3VtbWVyMjAxNkxvc0FuZ2VsZXMsIG5hbWU6ICdTdW1tZXIyMDE2TG9zQW5nZWxlcyd9LFxuICAgIHsgcGF0aDogJy9Mb3NBbmdlbGVzJywgY29tcG9uZW50OiBQaG90b0dhbGxlcnksIG5hbWU6ICdTdW1tZXIyMDE2TG9zQW5nZWxlcycsIGRhdGE6IHtpZDogXCJMQVwifX0sXG4gICAgeyBwYXRoOiAnLyoqJywgcmVkaXJlY3RUbzogWydTZWFzb25EZWZhdWx0MiddfVxuXSlcbmV4cG9ydCBjbGFzcyBTdW1tZXIyMDE2IHtcbiAgICBzZWFzb24gOiBzdHJpbmc7XG4gICAgbGlzdEl0ZW1zIDogc3RyaW5nW107XG4gICAgc2Vhc29ucztcblxuICAgIGNvbnN0cnVjdG9yIChwYXJhbXMgOiBSb3V0ZVBhcmFtcywgcHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7XG4gICAgICAgIHRoaXMuc2Vhc29ucyA9IEFkdmVudHVyZXNWYXJzLnNlYXNvbkl0ZW1zO1xuICAgICAgICB0aGlzLnNlYXNvbiA9IFwiU3VtbWVyMjAxNlwiO1xuICAgICAgICB0aGlzLmxpc3RJdGVtcyA9IHRoaXMuc2Vhc29uc1t0aGlzLnNlYXNvbl07XG5cbiAgICB9XG59XG4iXX0=