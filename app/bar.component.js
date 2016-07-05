System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var Bar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Bar = (function () {
                function Bar(router) {
                    this.router = router;
                    this.items = [
                        {
                            name: "Home",
                            display: "Brian Lee",
                            path: "/home",
                            icon: "icons/brian-icon.png"
                        },
                        {
                            name: "Adventures",
                            display: "Adventures",
                            path: "/adventures",
                            icon: ""
                        },
                        {
                            name: "Blog",
                            display: "B Log",
                            path: "/blog",
                            icon: ""
                        },
                        {
                            name: "Projects",
                            display: "Projects",
                            path: "/projects",
                            icon: ""
                        },
                    ];
                }
                Bar = __decorate([
                    core_1.Component({
                        selector: 'bar',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n        <div class=\"container\">\n            <div [ngClass]=\"{'logo': i==0, 'icon': i!=0,\n                             'active': router.isRouteActive(router.generate([item.name])) }\"\n            *ngFor=\"#item of items; #i = index\"\n            [routerLink]=\"[item.name]\">\n                <img src={{item.icon}}>\n                <p *ngIf=\"i != 0\">{{item.display}}</p>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Bar);
                return Bar;
            }());
            exports_1("Bar", Bar);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBRUksYUFBcUIsTUFBZTtvQkFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO29CQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHO3dCQUNUOzRCQUNJLElBQUksRUFBRyxNQUFNOzRCQUNiLE9BQU8sRUFBRyxXQUFXOzRCQUNyQixJQUFJLEVBQUcsT0FBTzs0QkFDZCxJQUFJLEVBQUcsc0JBQXNCO3lCQUNoQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUcsWUFBWTs0QkFDbkIsT0FBTyxFQUFHLFlBQVk7NEJBQ3RCLElBQUksRUFBRyxhQUFhOzRCQUNwQixJQUFJLEVBQUcsRUFBRTt5QkFDWjt3QkFDRDs0QkFDSSxJQUFJLEVBQUcsTUFBTTs0QkFDYixPQUFPLEVBQUcsT0FBTzs0QkFDakIsSUFBSSxFQUFHLE9BQU87NEJBQ2QsSUFBSSxFQUFHLEVBQUU7eUJBQ1o7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFHLFVBQVU7NEJBQ2pCLE9BQU8sRUFBRyxVQUFVOzRCQUNwQixJQUFJLEVBQUcsV0FBVzs0QkFDbEIsSUFBSSxFQUFHLEVBQUU7eUJBQ1o7cUJBRUosQ0FBQztnQkFDTixDQUFDO2dCQTlDTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxLQUFLO3dCQUNoQixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsUUFBUSxFQUFHLDBhQVVWO3FCQUNKLENBQUM7O3VCQUFBO2dCQWlDRixVQUFDO1lBQUQsQ0FBQyxBQS9CRCxJQStCQztZQS9CRCxxQkErQkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdiYXInLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieydsb2dvJzogaT09MCwgJ2ljb24nOiBpIT0wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWN0aXZlJzogcm91dGVyLmlzUm91dGVBY3RpdmUocm91dGVyLmdlbmVyYXRlKFtpdGVtLm5hbWVdKSkgfVwiXG4gICAgICAgICAgICAqbmdGb3I9XCIjaXRlbSBvZiBpdGVtczsgI2kgPSBpbmRleFwiXG4gICAgICAgICAgICBbcm91dGVyTGlua109XCJbaXRlbS5uYW1lXVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt7aXRlbS5pY29ufX0+XG4gICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpICE9IDBcIj57e2l0ZW0uZGlzcGxheX19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBCYXIge1xuICAgIGl0ZW1zIDogT2JqZWN0W107XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgcm91dGVyIDogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZSA6IFwiSG9tZVwiLFxuICAgICAgICAgICAgICAgIGRpc3BsYXkgOiBcIkJyaWFuIExlZVwiLFxuICAgICAgICAgICAgICAgIHBhdGggOiBcIi9ob21lXCIsXG4gICAgICAgICAgICAgICAgaWNvbiA6IFwiaWNvbnMvYnJpYW4taWNvbi5wbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lIDogXCJBZHZlbnR1cmVzXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheSA6IFwiQWR2ZW50dXJlc1wiLFxuICAgICAgICAgICAgICAgIHBhdGggOiBcIi9hZHZlbnR1cmVzXCIsXG4gICAgICAgICAgICAgICAgaWNvbiA6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZSA6IFwiQmxvZ1wiLFxuICAgICAgICAgICAgICAgIGRpc3BsYXkgOiBcIkIgTG9nXCIsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiL2Jsb2dcIixcbiAgICAgICAgICAgICAgICBpY29uIDogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lIDogXCJQcm9qZWN0c1wiLFxuICAgICAgICAgICAgICAgIGRpc3BsYXkgOiBcIlByb2plY3RzXCIsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiL3Byb2plY3RzXCIsXG4gICAgICAgICAgICAgICAgaWNvbiA6IFwiXCJcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgXTtcbiAgICB9XG59XG4iXX0=