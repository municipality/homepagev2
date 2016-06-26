System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', 'angular2/http', './bar.component', './home', './designs', './Blog/blog', './Fashion/fashion', './mobile.service'], function(exports_1, context_1) {
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
    var browser_1, core_1, router_1, router_2, http_1, bar_component_1, home_1, designs_1, blog_1, fashion_1, mobile_service_1;
    var App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (bar_component_1_1) {
                bar_component_1 = bar_component_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (designs_1_1) {
                designs_1 = designs_1_1;
            },
            function (blog_1_1) {
                blog_1 = blog_1_1;
            },
            function (fashion_1_1) {
                fashion_1 = fashion_1_1;
            },
            function (mobile_service_1_1) {
                mobile_service_1 = mobile_service_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App.prototype.ngAfterViewInit = function () {
                    document.getElementById("app-loading-mask").style.display = "none";
                };
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [bar_component_1.Bar, router_2.ROUTER_DIRECTIVES],
                        template: "\n        <bar></bar>\n        <div class=\"body-container\">\n            <router-outlet></router-outlet>\n        </div>\n    "
                    }),
                    router_2.RouteConfig([
                        { path: '/home', component: home_1.Home, name: 'Home' },
                        // { path: '/engineer', component: Engineer, name: "Engineer"},
                        { path: '/designs', component: designs_1.Designs, name: "Designs" },
                        { path: '/fashion/...', component: fashion_1.Fashion, name: "Fashion" },
                        { path: '/blog', component: blog_1.Blog, name: "Blog" },
                        { path: '/**', redirectTo: ['Home'] }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            browser_1.bootstrap(App, [http_1.HTTP_BINDINGS, mobile_service_1.MobileService].concat(router_1.ROUTER_PROVIDERS, [core_1.provide(router_1.LocationStrategy, { useClass: router_1.PathLocationStrategy })]));
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0NBO2dCQUVJO2dCQUNBLENBQUM7Z0JBRUQsNkJBQWUsR0FBZjtvQkFDSSxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3ZFLENBQUM7Z0JBM0JMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLEtBQUs7d0JBQ2hCLFVBQVUsRUFBRSxDQUFDLG1CQUFHLEVBQUUsMEJBQWlCLENBQUM7d0JBQ3BDLFFBQVEsRUFBRyxrSUFLVjtxQkFDSixDQUFDO29CQUVELG9CQUFXLENBQUU7d0JBQ1YsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTt3QkFDaEQsK0RBQStEO3dCQUMvRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQzt3QkFDeEQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxpQkFBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7d0JBQzVELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUM7d0JBQy9DLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtxQkFDeEMsQ0FBQzs7dUJBQUE7Z0JBV0YsVUFBQztZQUFELENBQUMsQUFURCxJQVNDO1lBS0QsbUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBYSxFQUFFLDhCQUFhLFNBQUsseUJBQWdCLEdBQUUsY0FBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUFvQixFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XHJcbmltcG9ydCB7cHJvdmlkZSwgQ29tcG9uZW50LCBJbmplY3RhYmxlLCBBZnRlclZpZXdJbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5LCBQYXRoTG9jYXRpb25TdHJhdGVneSwgUk9VVEVSX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWcsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcclxuaW1wb3J0IHtIVFRQX0JJTkRJTkdTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcclxuXHJcbmltcG9ydCB7QmFyfSBmcm9tICcuL2Jhci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0hvbWV9IGZyb20gJy4vaG9tZSc7XHJcbmltcG9ydCB7RW5naW5lZXJ9IGZyb20gJy4vZW5naW5lZXInO1xyXG5pbXBvcnQge0Rlc2lnbnN9IGZyb20gJy4vZGVzaWducyc7XHJcbmltcG9ydCB7QmxvZ30gZnJvbSAnLi9CbG9nL2Jsb2cnO1xyXG5pbXBvcnQge0Zhc2hpb259IGZyb20gJy4vRmFzaGlvbi9mYXNoaW9uJztcclxuXHJcbmltcG9ydCB7TW9iaWxlU2VydmljZX0gZnJvbSAnLi9tb2JpbGUuc2VydmljZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCAoe1xyXG4gICAgc2VsZWN0b3IgOiAnYXBwJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtCYXIsIFJPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHRlbXBsYXRlIDogYFxyXG4gICAgICAgIDxiYXI+PC9iYXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJvZHktY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuXHJcbkBSb3V0ZUNvbmZpZyAoW1xyXG4gICAgeyBwYXRoOiAnL2hvbWUnLCBjb21wb25lbnQ6IEhvbWUsIG5hbWU6ICdIb21lJyB9LFxyXG4gICAgLy8geyBwYXRoOiAnL2VuZ2luZWVyJywgY29tcG9uZW50OiBFbmdpbmVlciwgbmFtZTogXCJFbmdpbmVlclwifSxcclxuICAgIHsgcGF0aDogJy9kZXNpZ25zJywgY29tcG9uZW50OiBEZXNpZ25zLCBuYW1lOiBcIkRlc2lnbnNcIn0sXHJcbiAgICB7IHBhdGg6ICcvZmFzaGlvbi8uLi4nLCBjb21wb25lbnQ6IEZhc2hpb24sIG5hbWU6IFwiRmFzaGlvblwifSxcclxuICAgIHsgcGF0aDogJy9ibG9nJywgY29tcG9uZW50OiBCbG9nLCBuYW1lOiBcIkJsb2dcIn0sXHJcbiAgICB7IHBhdGg6ICcvKionLCByZWRpcmVjdFRvOiBbJ0hvbWUnXSB9XHJcbl0pXHJcblxyXG5jbGFzcyBBcHAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0ICgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcC1sb2FkaW5nLW1hc2tcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuYm9vdHN0cmFwKEFwcCwgW0hUVFBfQklORElOR1MsIE1vYmlsZVNlcnZpY2UsIC4uLlJPVVRFUl9QUk9WSURFUlMsIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBQYXRoTG9jYXRpb25TdHJhdGVneX0pXSk7XHJcbiJdfQ==