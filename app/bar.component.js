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
                function Bar() {
                    this.items = [
                        {
                            name: "Home",
                            display: "Brian Lee",
                            path: "/home",
                            icon: "icons/brian-icon.png"
                        },
                        {
                            name: "Designs",
                            display: "Designs",
                            path: "/designs",
                            icon: ""
                        }
                    ];
                    this.active = 0;
                }
                Bar = __decorate([
                    core_1.Component({
                        selector: 'bar',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n        <div [ngClass]=\"{'logo': i==0, 'icon': i!=0}\" *ngFor=\"#item of items; #i = index\"\n        [routerLink]=\"[item.name]\">\n            <img src={{item.icon}}>\n            <p *ngIf=\"i != 0\">{{item.display}}</p>\n        </div>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Bar);
                return Bar;
            }());
            exports_1("Bar", Bar);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnQkE7Z0JBR0k7b0JBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRzt3QkFDVDs0QkFDSSxJQUFJLEVBQUcsTUFBTTs0QkFDYixPQUFPLEVBQUcsV0FBVzs0QkFDckIsSUFBSSxFQUFHLE9BQU87NEJBQ2QsSUFBSSxFQUFHLHNCQUFzQjt5QkFDaEM7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFHLFNBQVM7NEJBQ2hCLE9BQU8sRUFBRyxTQUFTOzRCQUNuQixJQUFJLEVBQUcsVUFBVTs0QkFDakIsSUFBSSxFQUFHLEVBQUU7eUJBQ1o7cUJBQ0osQ0FBQztvQkFDRixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDcEIsQ0FBQztnQkFqQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUcsS0FBSzt3QkFDaEIsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7d0JBQy9CLFFBQVEsRUFBRyw2UEFRVjtxQkFDSixDQUFDOzt1QkFBQTtnQkFzQkYsVUFBQztZQUFELENBQUMsQUFwQkQsSUFvQkM7WUFwQkQscUJBb0JDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2JhcicsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBbbmdDbGFzc109XCJ7J2xvZ28nOiBpPT0wLCAnaWNvbic6IGkhPTB9XCIgKm5nRm9yPVwiI2l0ZW0gb2YgaXRlbXM7ICNpID0gaW5kZXhcIlxuICAgICAgICBbcm91dGVyTGlua109XCJbaXRlbS5uYW1lXVwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3tpdGVtLmljb259fT5cbiAgICAgICAgICAgIDxwICpuZ0lmPVwiaSAhPSAwXCI+e3tpdGVtLmRpc3BsYXl9fTwvcD5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBCYXIge1xuICAgIGl0ZW1zIDogT2JqZWN0W107XG4gICAgYWN0aXZlO1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lIDogXCJIb21lXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheSA6IFwiQnJpYW4gTGVlXCIsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiL2hvbWVcIixcbiAgICAgICAgICAgICAgICBpY29uIDogXCJpY29ucy9icmlhbi1pY29uLnBuZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWUgOiBcIkRlc2lnbnNcIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5IDogXCJEZXNpZ25zXCIsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiL2Rlc2lnbnNcIixcbiAgICAgICAgICAgICAgICBpY29uIDogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IDA7XG4gICAgfVxufVxuIl19