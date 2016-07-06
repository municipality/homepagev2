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
                            icon: "icons/blog-icon.png"
                        },
                        {
                            name: "Projects",
                            display: "Projects",
                            path: "/projects",
                            icon: ""
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
                        template: "\n        <div class=\"container\" #container>\n            <div [ngClass]=\"{'logo': i==0, 'icon': i!=0,\n                             'active': router.isRouteActive(router.generate([item.name])) }\"\n            *ngFor=\"#item of items; #i = index\"\n            [routerLink]=\"[item.name]\" (click)=\"click(item.name)\">\n                <img src={{item.icon}}>\n                <p *ngIf=\"i != 0\">{{item.display}}</p>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], Bar);
                return Bar;
            }());
            exports_1("Bar", Bar);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBR0ksYUFBcUIsTUFBZTtvQkFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO29CQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHO3dCQUNUOzRCQUNJLElBQUksRUFBRyxNQUFNOzRCQUNiLE9BQU8sRUFBRyxXQUFXOzRCQUNyQixJQUFJLEVBQUcsT0FBTzs0QkFDZCxJQUFJLEVBQUcsc0JBQXNCO3lCQUNoQzt3QkFDRDs0QkFDSSxJQUFJLEVBQUcsWUFBWTs0QkFDbkIsT0FBTyxFQUFHLFlBQVk7NEJBQ3RCLElBQUksRUFBRyxhQUFhOzRCQUNwQixJQUFJLEVBQUcsRUFBRTt5QkFDWjt3QkFDRDs0QkFDSSxJQUFJLEVBQUcsTUFBTTs0QkFDYixPQUFPLEVBQUcsT0FBTzs0QkFDakIsSUFBSSxFQUFHLE9BQU87NEJBQ2QsSUFBSSxFQUFHLHFCQUFxQjt5QkFDL0I7d0JBQ0Q7NEJBQ0ksSUFBSSxFQUFHLFVBQVU7NEJBQ2pCLE9BQU8sRUFBRyxVQUFVOzRCQUNwQixJQUFJLEVBQUcsV0FBVzs0QkFDbEIsSUFBSSxFQUFHLEVBQUU7eUJBQ1o7cUJBRUosQ0FBQztnQkFDTixDQUFDO2dCQUVELDZCQUFlLEdBQWY7b0JBQ0ksNEJBQTRCO29CQUM1Qiw4REFBOEQ7b0JBQzlELHVFQUF1RTtvQkFDdkUsSUFBSTtnQkFDUixDQUFDO2dCQUVELG1CQUFLLEdBQUwsVUFBTyxJQUFJO29CQUNQLDRCQUE0QjtvQkFDNUIsZ0VBQWdFO29CQUNoRSw2QkFBNkI7b0JBQzdCLHVFQUF1RTtvQkFDdkUsSUFBSTtvQkFDSixTQUFTO29CQUNULG1FQUFtRTtvQkFDbkUsSUFBSTtnQkFDUixDQUFDO2dCQS9DRDtvQkFBQyxnQkFBUyxDQUFDLFdBQVcsQ0FBQzs7c0RBQUE7Z0JBbEIzQjtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxLQUFLO3dCQUNoQixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsUUFBUSxFQUFHLGtkQVVWO3FCQUNKLENBQUM7O3VCQUFBO2dCQW9ERixVQUFDO1lBQUQsQ0FBQyxBQWxERCxJQWtEQztZQWxERCxxQkFrREMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2JhcicsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiICNjb250YWluZXI+XG4gICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsnbG9nbyc6IGk9PTAsICdpY29uJzogaSE9MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjdGl2ZSc6IHJvdXRlci5pc1JvdXRlQWN0aXZlKHJvdXRlci5nZW5lcmF0ZShbaXRlbS5uYW1lXSkpIH1cIlxuICAgICAgICAgICAgKm5nRm9yPVwiI2l0ZW0gb2YgaXRlbXM7ICNpID0gaW5kZXhcIlxuICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiW2l0ZW0ubmFtZV1cIiAoY2xpY2spPVwiY2xpY2soaXRlbS5uYW1lKVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt7aXRlbS5pY29ufX0+XG4gICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpICE9IDBcIj57e2l0ZW0uZGlzcGxheX19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBCYXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBpdGVtcyA6IE9iamVjdFtdO1xuICAgIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIGNvbnRhaW5lcjtcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lIDogXCJIb21lXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheSA6IFwiQnJpYW4gTGVlXCIsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiL2hvbWVcIixcbiAgICAgICAgICAgICAgICBpY29uIDogXCJpY29ucy9icmlhbi1pY29uLnBuZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWUgOiBcIkFkdmVudHVyZXNcIixcbiAgICAgICAgICAgICAgICBkaXNwbGF5IDogXCJBZHZlbnR1cmVzXCIsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiL2FkdmVudHVyZXNcIixcbiAgICAgICAgICAgICAgICBpY29uIDogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lIDogXCJCbG9nXCIsXG4gICAgICAgICAgICAgICAgZGlzcGxheSA6IFwiQiBMb2dcIixcbiAgICAgICAgICAgICAgICBwYXRoIDogXCIvYmxvZ1wiLFxuICAgICAgICAgICAgICAgIGljb24gOiBcImljb25zL2Jsb2ctaWNvbi5wbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lIDogXCJQcm9qZWN0c1wiLFxuICAgICAgICAgICAgICAgIGRpc3BsYXkgOiBcIlByb2plY3RzXCIsXG4gICAgICAgICAgICAgICAgcGF0aCA6IFwiL3Byb2plY3RzXCIsXG4gICAgICAgICAgICAgICAgaWNvbiA6IFwiXCJcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQgKCkge1xuICAgICAgICAvLyB2YXIgcm91dGVyID0gdGhpcy5yb3V0ZXI7XG4gICAgICAgIC8vIGlmKHJvdXRlci5pc1JvdXRlQWN0aXZlKHJvdXRlci5nZW5lcmF0ZShbXCJBZHZlbnR1cmVzXCJdKSkpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGVbXCJiYWNrZ3JvdW5kLWNvbG9yXCJdID0gXCJibHVlXCI7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBjbGljayAobmFtZSkge1xuICAgICAgICAvLyB2YXIgcm91dGVyID0gdGhpcy5yb3V0ZXI7XG4gICAgICAgIC8vIC8vaWYocm91dGVyLmlzUm91dGVBY3RpdmUocm91dGVyLmdlbmVyYXRlKFtcIkFkdmVudHVyZXNcIl0pKSkge1xuICAgICAgICAvLyBpZihuYW1lID09IFwiQWR2ZW50dXJlc1wiKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnN0eWxlW1wiYmFja2dyb3VuZC1jb2xvclwiXSA9IFwiYmx1ZVwiO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5zdHlsZVtcImJhY2tncm91bmQtY29sb3JcIl0gPSBcIlwiO1xuICAgICAgICAvLyB9XG4gICAgfVxufVxuIl19