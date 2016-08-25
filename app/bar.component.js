System.register(['@angular/core', '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1;
    var Bar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
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
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        template: "\n        <div class=\"container\" #container>\n            <div [ngClass]=\"{'logo': i==0, 'icon': i!=0,\n                             'active': router.isRouteActive(router.generate([item.name])) }\"\n            *ngFor=\"let item of items; #i = index\"\n            [routerLink]=\"[item.name]\" (click)=\"click(item.name)\">\n                <img *ngIf=\"i==0\" src={{item.icon}}>\n                <div *ngIf=\"i!=0\" class=\"icon-sym {{item.iconCls}}\"></div>\n                <p *ngIf=\"i != 0\">{{item.display}}</p>\n\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router])
                ], Bar);
                return Bar;
            }());
            exports_1("Bar", Bar);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBR0ksYUFBcUIsTUFBZTtvQkFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO29CQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHO3dCQUNUOzRCQUNJLElBQUksRUFBRyxNQUFNOzRCQUNiLE9BQU8sRUFBRyxXQUFXOzRCQUNyQixJQUFJLEVBQUcsT0FBTzs0QkFDZCxJQUFJLEVBQUcsc0JBQXNCOzRCQUM3QixPQUFPLEVBQUUsRUFBRTt5QkFDZDt3QkFDRDs0QkFDSSxJQUFJLEVBQUcsWUFBWTs0QkFDbkIsT0FBTyxFQUFHLFlBQVk7NEJBQ3RCLElBQUksRUFBRyxhQUFhOzRCQUNwQixJQUFJLEVBQUcsMEJBQTBCOzRCQUNqQyxPQUFPLEVBQUcsZ0JBQWdCO3lCQUM3Qjt3QkFDRDs0QkFDSSxJQUFJLEVBQUcsTUFBTTs0QkFDYixPQUFPLEVBQUcsT0FBTzs0QkFDakIsSUFBSSxFQUFHLE9BQU87NEJBQ2QsSUFBSSxFQUFHLHFCQUFxQjs0QkFDNUIsT0FBTyxFQUFHLFdBQVc7eUJBQ3hCO3dCQUNEOzRCQUNJLElBQUksRUFBRyxVQUFVOzRCQUNqQixPQUFPLEVBQUcsVUFBVTs0QkFDcEIsSUFBSSxFQUFHLFdBQVc7NEJBQ2xCLElBQUksRUFBRyx5QkFBeUI7NEJBQ2hDLE9BQU8sRUFBRyxhQUFhO3lCQUMxQjtxQkFFSixDQUFDO2dCQUNOLENBQUM7Z0JBRUQsNkJBQWUsR0FBZjtvQkFDSSw0QkFBNEI7b0JBQzVCLDhEQUE4RDtvQkFDOUQsdUVBQXVFO29CQUN2RSxJQUFJO2dCQUNSLENBQUM7Z0JBRUQsbUJBQUssR0FBTCxVQUFPLElBQUk7b0JBQ1AsNEJBQTRCO29CQUM1QixnRUFBZ0U7b0JBQ2hFLDZCQUE2QjtvQkFDN0IsdUVBQXVFO29CQUN2RSxJQUFJO29CQUNKLFNBQVM7b0JBQ1QsbUVBQW1FO29CQUNuRSxJQUFJO2dCQUNSLENBQUM7Z0JBbkREO29CQUFDLGdCQUFTLENBQUMsV0FBVyxDQUFDOztzREFBQTtnQkFwQjNCO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLEtBQUs7d0JBQ2hCLFVBQVUsRUFBRSxDQUFDLHFDQUFpQixDQUFDO3dCQUMvQixRQUFRLEVBQUcsc2pCQVlWO3FCQUNKLENBQUM7O3VCQUFBO2dCQXdERixVQUFDO1lBQUQsQ0FBQyxBQXRERCxJQXNEQztZQXRERCxxQkFzREMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnYmFyJyxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgI2NvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXYgW25nQ2xhc3NdPVwieydsb2dvJzogaT09MCwgJ2ljb24nOiBpIT0wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWN0aXZlJzogcm91dGVyLmlzUm91dGVBY3RpdmUocm91dGVyLmdlbmVyYXRlKFtpdGVtLm5hbWVdKSkgfVwiXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgI2kgPSBpbmRleFwiXG4gICAgICAgICAgICBbcm91dGVyTGlua109XCJbaXRlbS5uYW1lXVwiIChjbGljayk9XCJjbGljayhpdGVtLm5hbWUpXCI+XG4gICAgICAgICAgICAgICAgPGltZyAqbmdJZj1cImk9PTBcIiBzcmM9e3tpdGVtLmljb259fT5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaSE9MFwiIGNsYXNzPVwiaWNvbi1zeW0ge3tpdGVtLmljb25DbHN9fVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiaSAhPSAwXCI+e3tpdGVtLmRpc3BsYXl9fTwvcD5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBCYXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBpdGVtcyA6IE9iamVjdFtdO1xuICAgIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIGNvbnRhaW5lcjtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lIDogXCJIb21lXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheSA6IFwiQnJpYW4gTGVlXCIsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiL2hvbWVcIixcbiAgICAgICAgICAgICAgICBpY29uIDogXCJpY29ucy9icmlhbi1pY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgIGljb25DbHM6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWUgOiBcIkFkdmVudHVyZXNcIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5IDogXCJBZHZlbnR1cmVzXCIsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiL2FkdmVudHVyZXNcIixcbiAgICAgICAgICAgICAgICBpY29uIDogXCJpY29ucy9hZHZlbnR1cmUtaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICBpY29uQ2xzIDogJ2ljb24tYWR2ZW50dXJlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lIDogXCJCbG9nXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheSA6IFwiQiBMb2dcIixcbiAgICAgICAgICAgICAgICBwYXRoIDogXCIvYmxvZ1wiLFxuICAgICAgICAgICAgICAgIGljb24gOiBcImljb25zL2Jsb2ctaWNvbi5wbmdcIixcbiAgICAgICAgICAgICAgICBpY29uQ2xzIDogJ2ljb24tYmxvZydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZSA6IFwiUHJvamVjdHNcIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5IDogXCJQcm9qZWN0c1wiLFxuICAgICAgICAgICAgICAgIHBhdGggOiBcIi9wcm9qZWN0c1wiLFxuICAgICAgICAgICAgICAgIGljb24gOiBcImljb25zL3Byb2plY3RzLWljb24ucG5nXCIsXG4gICAgICAgICAgICAgICAgaWNvbkNscyA6ICdpY29uLWdpdGh1YidcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQgKCkge1xuICAgICAgICAvLyB2YXIgcm91dGVyID0gdGhpcy5yb3V0ZXI7XG4gICAgICAgIC8vIGlmKHJvdXRlci5pc1JvdXRlQWN0aXZlKHJvdXRlci5nZW5lcmF0ZShbXCJBZHZlbnR1cmVzXCJdKSkpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gXCJibHVlXCI7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBjbGljayAobmFtZSkge1xuICAgICAgICAvLyB2YXIgcm91dGVyID0gdGhpcy5yb3V0ZXI7XG4gICAgICAgIC8vIC8vaWYocm91dGVyLmlzUm91dGVBY3RpdmUocm91dGVyLmdlbmVyYXRlKFtcIkFkdmVudHVyZXNcIl0pKSkge1xuICAgICAgICAvLyBpZihuYW1lID09IFwiQWR2ZW50dXJlc1wiKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IFwiYmx1ZVwiO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBcIlwiO1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuIl19