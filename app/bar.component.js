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
                            name: "Blog",
                            display: "BLog",
                            path: "/blog",
                            icon: ""
                        },
                        {
                            name: "Designs",
                            display: "Designs",
                            path: "/designs",
                            icon: ""
                        },
                        {
                            name: "Fashion",
                            display: "Fashion",
                            path: "/fashion",
                            icon: ""
                        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBRUksYUFBcUIsTUFBZTtvQkFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO29CQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHO3dCQUNUOzRCQUNJLElBQUksRUFBRyxNQUFNOzRCQUNiLE9BQU8sRUFBRyxXQUFXOzRCQUNyQixJQUFJLEVBQUcsT0FBTzs0QkFDZCxJQUFJLEVBQUcsc0JBQXNCO3lCQUNoQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUcsTUFBTTs0QkFDYixPQUFPLEVBQUcsTUFBTTs0QkFDaEIsSUFBSSxFQUFHLE9BQU87NEJBQ2QsSUFBSSxFQUFHLEVBQUU7eUJBQ1o7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFHLFNBQVM7NEJBQ2hCLE9BQU8sRUFBRyxTQUFTOzRCQUNuQixJQUFJLEVBQUcsVUFBVTs0QkFDakIsSUFBSSxFQUFHLEVBQUU7eUJBQ1o7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFHLFNBQVM7NEJBQ2hCLE9BQU8sRUFBRyxTQUFTOzRCQUNuQixJQUFJLEVBQUcsVUFBVTs0QkFDakIsSUFBSSxFQUFHLEVBQUU7eUJBQ1o7cUJBQ0osQ0FBQztnQkFDTixDQUFDO2dCQTdDTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxLQUFLO3dCQUNoQixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsUUFBUSxFQUFHLDBhQVVWO3FCQUNKLENBQUM7O3VCQUFBO2dCQWdDRixVQUFDO1lBQUQsQ0FBQyxBQTlCRCxJQThCQztZQTlCRCxxQkE4QkMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xyXG5AQ29tcG9uZW50ICh7XHJcbiAgICBzZWxlY3RvciA6ICdiYXInLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHRlbXBsYXRlIDogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBbbmdDbGFzc109XCJ7J2xvZ28nOiBpPT0wLCAnaWNvbic6IGkhPTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjdGl2ZSc6IHJvdXRlci5pc1JvdXRlQWN0aXZlKHJvdXRlci5nZW5lcmF0ZShbaXRlbS5uYW1lXSkpIH1cIlxyXG4gICAgICAgICAgICAqbmdGb3I9XCIjaXRlbSBvZiBpdGVtczsgI2kgPSBpbmRleFwiXHJcbiAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cIltpdGVtLm5hbWVdXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17e2l0ZW0uaWNvbn19PlxyXG4gICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpICE9IDBcIj57e2l0ZW0uZGlzcGxheX19PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXIge1xyXG4gICAgaXRlbXMgOiBPYmplY3RbXTtcclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHJvdXRlciA6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWUgOiBcIkhvbWVcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXkgOiBcIkJyaWFuIExlZVwiLFxyXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiL2hvbWVcIixcclxuICAgICAgICAgICAgICAgIGljb24gOiBcImljb25zL2JyaWFuLWljb24ucG5nXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZSA6IFwiQmxvZ1wiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheSA6IFwiQkxvZ1wiLFxyXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiL2Jsb2dcIixcclxuICAgICAgICAgICAgICAgIGljb24gOiBcIlwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWUgOiBcIkRlc2lnbnNcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXkgOiBcIkRlc2lnbnNcIixcclxuICAgICAgICAgICAgICAgIHBhdGggOiBcIi9kZXNpZ25zXCIsXHJcbiAgICAgICAgICAgICAgICBpY29uIDogXCJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lIDogXCJGYXNoaW9uXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5IDogXCJGYXNoaW9uXCIsXHJcbiAgICAgICAgICAgICAgICBwYXRoIDogXCIvZmFzaGlvblwiLFxyXG4gICAgICAgICAgICAgICAgaWNvbiA6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuIl19