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
                        { path: '/LosAngeles', component: Summer2016LosAngeles, name: 'Summer2016LosAngeles' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWVyMjAxNi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1bW1lcjIwMTYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJBO2dCQUNJO2dCQUVBLENBQUM7Z0JBaEJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLHNCQUFzQjt3QkFDakMsVUFBVSxFQUFHLENBQUMsMENBQWtCLENBQUM7d0JBQ2pDLFFBQVEsRUFBRSwyUEFPVDtxQkFDSixDQUFDOzt3Q0FBQTtnQkFNRiwyQkFBQztZQUFELENBQUMsQUFKRCxJQUlDO1lBSkQsdURBSUMsQ0FBQTtZQW1DRDtnQkFLSSxvQkFBYSxNQUFvQixFQUFVLE1BQWE7b0JBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDO29CQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztvQkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFL0MsQ0FBQztnQkExQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsUUFBUTt3QkFDbkIsUUFBUSxFQUFFLHkzQkFxQlQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7cUJBQ2xDLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLHFDQUFhLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ2xGLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFDO3dCQUNyRixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBQztxQkFDakQsQ0FBQzs7OEJBQUE7Z0JBWUYsaUJBQUM7WUFBRCxDQUFDLEFBWEQsSUFXQztZQVhELG1DQVdDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWcsIFJvdXRlciwgUm91dGVQYXJhbXN9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0h0dHB9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5pbXBvcnQgQWR2ZW50dXJlc1ZhcnMgPSByZXF1aXJlKCcuL2FkdmVudHVyZXMuc2Vhc29ucycpO1xuaW1wb3J0IHtQcmVzZW50YXRpb25IZWFkZXJ9IGZyb20gJy4vYWR2ZW50dXJlcy5jb21wb25lbnRzJztcbmltcG9ydCB7U2Vhc29uRGVmYXVsdH0gZnJvbSAnLi9hZHZlbnR1cmVzLmNvbXBvbmVudHMnO1xuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnc3VtbWVyMjAxNmxvc2FuZ2VsZXMnLFxuICAgIGRpcmVjdGl2ZXMgOiBbUHJlc2VudGF0aW9uSGVhZGVyXSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJlc2VudGF0aW9uIHN1bW1lcjIwMTZsb3NhbmdlbGVzXCI+XG4gICAgICAgICAgICA8cHJlc2VudGF0aW9uLWhlYWRlcj48L3ByZXNlbnRhdGlvbi1oZWFkZXI+XG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkZXJcIiBhbGlnbj1cImNlbnRlclwiPkNoaWxsaW48L2gxPlxuXG4gICAgICAgICAgICA8aW1nIHNyYz1cImJyaWFuLWJsdXJyZWQuanBnXCI+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBTdW1tZXIyMDE2TG9zQW5nZWxlcyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuXG4gICAgfVxufVxuXG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdldmVudHMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJldmVudHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJldmVudHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDQ+QWR2ZW50dXJlPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50XCIgKm5nRm9yPVwiI2FkdmVudHVyZSBvZiBsaXN0SXRlbXNcIlxuICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiW2FkdmVudHVyZS5wYXRoXVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6IHJvdXRlci5pc1JvdXRlQWN0aXZlKHJvdXRlci5nZW5lcmF0ZShbYWR2ZW50dXJlLnBhdGhdKSl9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV2ZW50LW5hbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz57e2FkdmVudHVyZS5kaXNwbGF5fX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGg1ICpuZ0lmPVwiYWR2ZW50dXJlLmRhdGVFbmRcIj57e2FkdmVudHVyZS5kYXRlU3RhcnR9fSAtIHt7YWR2ZW50dXJlLmRhdGVFbmR9fTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxoNSAqbmdJZj1cImFkdmVudHVyZS5kYXRlRW5kID09IG51bGxcIj57e2FkdmVudHVyZS5kYXRlU3RhcnR9fTwvaDU+LS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJlc2VudGF0aW9uLXJvdXRlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5cbkBSb3V0ZUNvbmZpZyhbXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogU2Vhc29uRGVmYXVsdCwgbmFtZTogXCJTZWFzb25EZWZhdWx0MlwiLCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuICAgIHsgcGF0aDogJy9Mb3NBbmdlbGVzJywgY29tcG9uZW50OiBTdW1tZXIyMDE2TG9zQW5nZWxlcywgbmFtZTogJ1N1bW1lcjIwMTZMb3NBbmdlbGVzJ30sXG4gICAgeyBwYXRoOiAnLyoqJywgcmVkaXJlY3RUbzogWydTZWFzb25EZWZhdWx0MiddfVxuXSlcbmV4cG9ydCBjbGFzcyBTdW1tZXIyMDE2IHtcbiAgICBzZWFzb24gOiBzdHJpbmc7XG4gICAgbGlzdEl0ZW1zIDogc3RyaW5nW107XG4gICAgc2Vhc29ucztcblxuICAgIGNvbnN0cnVjdG9yIChwYXJhbXMgOiBSb3V0ZVBhcmFtcywgcHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7XG4gICAgICAgIHRoaXMuc2Vhc29ucyA9IEFkdmVudHVyZXNWYXJzLnNlYXNvbkl0ZW1zO1xuICAgICAgICB0aGlzLnNlYXNvbiA9IFwiU3VtbWVyMjAxNlwiO1xuICAgICAgICB0aGlzLmxpc3RJdGVtcyA9IHRoaXMuc2Vhc29uc1t0aGlzLnNlYXNvbl07XG5cbiAgICB9XG59XG4iXX0=