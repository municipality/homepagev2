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
                            icon: "icons/brian-icon.png",
                            iconCls: ''
                        },
                        {
                            name: "Adventures",
                            display: "Adventures",
                            path: "/adventures",
                            icon: "icons/adventure-icon.png",
                            iconCls: 'icon-adventure'
                        },
                        {
                            name: "Blog",
                            display: "B Log",
                            path: "/blog",
                            icon: "icons/blog-icon.png",
                            iconCls: 'icon-blog'
                        },
                        {
                            name: "Projects",
                            display: "Projects",
                            path: "/projects",
                            icon: "icons/projects-icon.png",
                            iconCls: 'icon-github'
                        },
                    ];
                }
                Bar.prototype.ngAfterViewInit = function () {
                    // var router = this.router;
                    // if(router.isRouteActive(router.generate(["Adventures"]))) {
                    //     this.container.nativeElement.style["background-color"] = "blue";
                    // }
                };
                Bar.prototype.click = function (name) {
                    // var router = this.router;
                    // //if(router.isRouteActive(router.generate(["Adventures"]))) {
                    // if(name == "Adventures") {
                    //     this.container.nativeElement.style["background-color"] = "blue";
                    // }
                    // else {
                    //     this.container.nativeElement.style["background-color"] = "";
                    // }
                };
                __decorate([
                    core_1.ViewChild('container'), 
                    __metadata('design:type', Object)
                ], Bar.prototype, "container", void 0);
                Bar = __decorate([
                    core_1.Component({
                        selector: 'bar',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n        <div class=\"container\" #container>\n            <div [ngClass]=\"{'logo': i==0, 'icon': i!=0,\n                             'active': router.isRouteActive(router.generate([item.name])) }\"\n            *ngFor=\"#item of items; #i = index\"\n            [routerLink]=\"[item.name]\" (click)=\"click(item.name)\">\n                <img *ngIf=\"i==0\" src={{item.icon}}>\n                <div *ngIf=\"i!=0\" class=\"icon-sym {{item.iconCls}}\"></div>\n                <p *ngIf=\"i != 0\">{{item.display}}</p>\n\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Bar);
                return Bar;
            }());
            exports_1("Bar", Bar);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0ksYUFBcUIsTUFBZTtvQkFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO29CQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHO3dCQUNUOzRCQUNJLElBQUksRUFBRyxNQUFNOzRCQUNiLE9BQU8sRUFBRyxXQUFXOzRCQUNyQixJQUFJLEVBQUcsT0FBTzs0QkFDZCxJQUFJLEVBQUcsc0JBQXNCOzRCQUM3QixPQUFPLEVBQUUsRUFBRTt5QkFDZDt3QkFDRDs0QkFDSSxJQUFJLEVBQUcsWUFBWTs0QkFDbkIsT0FBTyxFQUFHLFlBQVk7NEJBQ3RCLElBQUksRUFBRyxhQUFhOzRCQUNwQixJQUFJLEVBQUcsMEJBQTBCOzRCQUNqQyxPQUFPLEVBQUcsZ0JBQWdCO3lCQUM3Qjt3QkFDRDs0QkFDSSxJQUFJLEVBQUcsTUFBTTs0QkFDYixPQUFPLEVBQUcsT0FBTzs0QkFDakIsSUFBSSxFQUFHLE9BQU87NEJBQ2QsSUFBSSxFQUFHLHFCQUFxQjs0QkFDNUIsT0FBTyxFQUFHLFdBQVc7eUJBQ3hCO3dCQUNEOzRCQUNJLElBQUksRUFBRyxVQUFVOzRCQUNqQixPQUFPLEVBQUcsVUFBVTs0QkFDcEIsSUFBSSxFQUFHLFdBQVc7NEJBQ2xCLElBQUksRUFBRyx5QkFBeUI7NEJBQ2hDLE9BQU8sRUFBRyxhQUFhO3lCQUMxQjtxQkFFSixDQUFDO2dCQUNOLENBQUM7Z0JBRUQsNkJBQWUsR0FBZjtvQkFDSSw0QkFBNEI7b0JBQzVCLDhEQUE4RDtvQkFDOUQsdUVBQXVFO29CQUN2RSxJQUFJO2dCQUNSLENBQUM7Z0JBRUQsbUJBQUssR0FBTCxVQUFPLElBQUk7b0JBQ1AsNEJBQTRCO29CQUM1QixnRUFBZ0U7b0JBQ2hFLDZCQUE2QjtvQkFDN0IsdUVBQXVFO29CQUN2RSxJQUFJO29CQUNKLFNBQVM7b0JBQ1QsbUVBQW1FO29CQUNuRSxJQUFJO2dCQUNSLENBQUM7Z0JBbkREO29CQUFDLGdCQUFTLENBQUMsV0FBVyxDQUFDOztzREFBQTtnQkFwQjNCO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLEtBQUs7d0JBQ2hCLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3dCQUMvQixRQUFRLEVBQUcsbWpCQVlWO3FCQUNKLENBQUM7O3VCQUFBO2dCQXdERixVQUFDO1lBQUQsQ0FBQyxBQXRERCxJQXNEQztZQXRERCxxQkFzREMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2JhcicsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiICNjb250YWluZXI+XG4gICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsnbG9nbyc6IGk9PTAsICdpY29uJzogaSE9MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjdGl2ZSc6IHJvdXRlci5pc1JvdXRlQWN0aXZlKHJvdXRlci5nZW5lcmF0ZShbaXRlbS5uYW1lXSkpIH1cIlxuICAgICAgICAgICAgKm5nRm9yPVwiI2l0ZW0gb2YgaXRlbXM7ICNpID0gaW5kZXhcIlxuICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiW2l0ZW0ubmFtZV1cIiAoY2xpY2spPVwiY2xpY2soaXRlbS5uYW1lKVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgKm5nSWY9XCJpPT0wXCIgc3JjPXt7aXRlbS5pY29ufX0+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImkhPTBcIiBjbGFzcz1cImljb24tc3ltIHt7aXRlbS5pY29uQ2xzfX1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCAqbmdJZj1cImkgIT0gMFwiPnt7aXRlbS5kaXNwbGF5fX08L3A+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQmFyIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgaXRlbXMgOiBPYmplY3RbXTtcbiAgICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXI7XG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgcm91dGVyIDogUm91dGVyKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZSA6IFwiSG9tZVwiLFxuICAgICAgICAgICAgICAgIGRpc3BsYXkgOiBcIkJyaWFuIExlZVwiLFxuICAgICAgICAgICAgICAgIHBhdGggOiBcIi9ob21lXCIsXG4gICAgICAgICAgICAgICAgaWNvbiA6IFwiaWNvbnMvYnJpYW4taWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lIDogXCJBZHZlbnR1cmVzXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheSA6IFwiQWR2ZW50dXJlc1wiLFxuICAgICAgICAgICAgICAgIHBhdGggOiBcIi9hZHZlbnR1cmVzXCIsXG4gICAgICAgICAgICAgICAgaWNvbiA6IFwiaWNvbnMvYWR2ZW50dXJlLWljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgaWNvbkNscyA6ICdpY29uLWFkdmVudHVyZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZSA6IFwiQmxvZ1wiLFxuICAgICAgICAgICAgICAgIGRpc3BsYXkgOiBcIkIgTG9nXCIsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiL2Jsb2dcIixcbiAgICAgICAgICAgICAgICBpY29uIDogXCJpY29ucy9ibG9nLWljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgaWNvbkNscyA6ICdpY29uLWJsb2cnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWUgOiBcIlByb2plY3RzXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheSA6IFwiUHJvamVjdHNcIixcbiAgICAgICAgICAgICAgICBwYXRoIDogXCIvcHJvamVjdHNcIixcbiAgICAgICAgICAgICAgICBpY29uIDogXCJpY29ucy9wcm9qZWN0cy1pY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgIGljb25DbHMgOiAnaWNvbi1naXRodWInXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0ICgpIHtcbiAgICAgICAgLy8gdmFyIHJvdXRlciA9IHRoaXMucm91dGVyO1xuICAgICAgICAvLyBpZihyb3V0ZXIuaXNSb3V0ZUFjdGl2ZShyb3V0ZXIuZ2VuZXJhdGUoW1wiQWR2ZW50dXJlc1wiXSkpKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IFwiYmx1ZVwiO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgY2xpY2sgKG5hbWUpIHtcbiAgICAgICAgLy8gdmFyIHJvdXRlciA9IHRoaXMucm91dGVyO1xuICAgICAgICAvLyAvL2lmKHJvdXRlci5pc1JvdXRlQWN0aXZlKHJvdXRlci5nZW5lcmF0ZShbXCJBZHZlbnR1cmVzXCJdKSkpIHtcbiAgICAgICAgLy8gaWYobmFtZSA9PSBcIkFkdmVudHVyZXNcIikge1xuICAgICAgICAvLyAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBcImJsdWVcIjtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgLy8gICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gXCJcIjtcbiAgICAgICAgLy8gfVxuICAgIH1cbn1cbiJdfQ==