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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0NBO2dCQUVJO2dCQUNBLENBQUM7Z0JBRUQsNkJBQWUsR0FBZjtvQkFDSSxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3ZFLENBQUM7Z0JBM0JMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLEtBQUs7d0JBQ2hCLFVBQVUsRUFBRSxDQUFDLG1CQUFHLEVBQUUsMEJBQWlCLENBQUM7d0JBQ3BDLFFBQVEsRUFBRyxrSUFLVjtxQkFDSixDQUFDO29CQUVELG9CQUFXLENBQUU7d0JBQ1YsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTt3QkFDaEQsK0RBQStEO3dCQUMvRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQzt3QkFDeEQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxpQkFBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7d0JBQzVELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUM7d0JBQy9DLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtxQkFDeEMsQ0FBQzs7dUJBQUE7Z0JBV0YsVUFBQztZQUFELENBQUMsQUFURCxJQVNDO1lBS0QsbUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBYSxFQUFFLDhCQUFhLFNBQUsseUJBQWdCLEdBQUUsY0FBTyxDQUFDLHlCQUFnQixFQUFFLEVBQUMsUUFBUSxFQUFFLDZCQUFvQixFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge3Byb3ZpZGUsIENvbXBvbmVudCwgSW5qZWN0YWJsZSwgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIFBhdGhMb2NhdGlvblN0cmF0ZWd5LCBST1VURVJfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtST1VURVJfRElSRUNUSVZFUywgUm91dGVDb25maWcsIFJvdXRlcn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7SFRUUF9CSU5ESU5HU30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmltcG9ydCB7QmFyfSBmcm9tICcuL2Jhci5jb21wb25lbnQnO1xuaW1wb3J0IHtIb21lfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHtFbmdpbmVlcn0gZnJvbSAnLi9lbmdpbmVlcic7XG5pbXBvcnQge0Rlc2lnbnN9IGZyb20gJy4vZGVzaWducyc7XG5pbXBvcnQge0Jsb2d9IGZyb20gJy4vQmxvZy9ibG9nJztcbmltcG9ydCB7RmFzaGlvbn0gZnJvbSAnLi9GYXNoaW9uL2Zhc2hpb24nO1xuXG5pbXBvcnQge01vYmlsZVNlcnZpY2V9IGZyb20gJy4vbW9iaWxlLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICdhcHAnLFxuICAgIGRpcmVjdGl2ZXM6IFtCYXIsIFJPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGJhcj48L2Jhcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvZHktY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5cbkBSb3V0ZUNvbmZpZyAoW1xuICAgIHsgcGF0aDogJy9ob21lJywgY29tcG9uZW50OiBIb21lLCBuYW1lOiAnSG9tZScgfSxcbiAgICAvLyB7IHBhdGg6ICcvZW5naW5lZXInLCBjb21wb25lbnQ6IEVuZ2luZWVyLCBuYW1lOiBcIkVuZ2luZWVyXCJ9LFxuICAgIHsgcGF0aDogJy9kZXNpZ25zJywgY29tcG9uZW50OiBEZXNpZ25zLCBuYW1lOiBcIkRlc2lnbnNcIn0sXG4gICAgeyBwYXRoOiAnL2Zhc2hpb24vLi4uJywgY29tcG9uZW50OiBGYXNoaW9uLCBuYW1lOiBcIkZhc2hpb25cIn0sXG4gICAgeyBwYXRoOiAnL2Jsb2cnLCBjb21wb25lbnQ6IEJsb2csIG5hbWU6IFwiQmxvZ1wifSxcbiAgICB7IHBhdGg6ICcvKionLCByZWRpcmVjdFRvOiBbJ0hvbWUnXSB9XG5dKVxuXG5jbGFzcyBBcHAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQgKCkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcC1sb2FkaW5nLW1hc2tcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxufVxuXG5cblxuXG5ib290c3RyYXAoQXBwLCBbSFRUUF9CSU5ESU5HUywgTW9iaWxlU2VydmljZSwgLi4uUk9VVEVSX1BST1ZJREVSUywgcHJvdmlkZShMb2NhdGlvblN0cmF0ZWd5LCB7dXNlQ2xhc3M6IFBhdGhMb2NhdGlvblN0cmF0ZWd5fSldKTtcbiJdfQ==