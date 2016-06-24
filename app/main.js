System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', './bar.component', './home', './designs', './blog', './Fashion/fashion', './mobile.service'], function(exports_1, context_1) {
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
    var browser_1, core_1, router_1, router_2, bar_component_1, home_1, designs_1, blog_1, fashion_1, mobile_service_1;
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
            browser_1.bootstrap(App, [mobile_service_1.MobileService].concat(router_1.ROUTER_PROVIDERS, [core_1.provide(router_1.LocationStrategy, { useClass: router_1.PathLocationStrategy })]));
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUNBO2dCQUVJO2dCQUNBLENBQUM7Z0JBRUQsNkJBQWUsR0FBZjtvQkFDSSxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3ZFLENBQUM7Z0JBM0JMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLEtBQUs7d0JBQ2hCLFVBQVUsRUFBRSxDQUFDLG1CQUFHLEVBQUUsMEJBQWlCLENBQUM7d0JBQ3BDLFFBQVEsRUFBRyxrSUFLVjtxQkFDSixDQUFDO29CQUVELG9CQUFXLENBQUU7d0JBQ1YsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTt3QkFDaEQsK0RBQStEO3dCQUMvRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQzt3QkFDeEQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxpQkFBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7d0JBQzVELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUM7d0JBQy9DLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtxQkFDeEMsQ0FBQzs7dUJBQUE7Z0JBV0YsVUFBQztZQUFELENBQUMsQUFURCxJQVNDO1lBS0QsbUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyw4QkFBYSxTQUFLLHlCQUFnQixHQUFFLGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtwcm92aWRlLCBDb21wb25lbnQsIEluamVjdGFibGUsIEFmdGVyVmlld0luaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5LCBQYXRoTG9jYXRpb25TdHJhdGVneSwgUk9VVEVSX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5cbmltcG9ydCB7QmFyfSBmcm9tICcuL2Jhci5jb21wb25lbnQnO1xuaW1wb3J0IHtIb21lfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHtFbmdpbmVlcn0gZnJvbSAnLi9lbmdpbmVlcic7XG5pbXBvcnQge0Rlc2lnbnN9IGZyb20gJy4vZGVzaWducyc7XG5pbXBvcnQge0Jsb2d9IGZyb20gJy4vYmxvZyc7XG5pbXBvcnQge0Zhc2hpb259IGZyb20gJy4vRmFzaGlvbi9mYXNoaW9uJztcblxuaW1wb3J0IHtNb2JpbGVTZXJ2aWNlfSBmcm9tICcuL21vYmlsZS5zZXJ2aWNlJztcblxuXG5AQ29tcG9uZW50ICh7XG4gICAgc2VsZWN0b3IgOiAnYXBwJyxcbiAgICBkaXJlY3RpdmVzOiBbQmFyLCBST1VURVJfRElSRUNUSVZFU10sXG4gICAgdGVtcGxhdGUgOiBgXG4gICAgICAgIDxiYXI+PC9iYXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib2R5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5AUm91dGVDb25maWcgKFtcbiAgICB7IHBhdGg6ICcvaG9tZScsIGNvbXBvbmVudDogSG9tZSwgbmFtZTogJ0hvbWUnIH0sXG4gICAgLy8geyBwYXRoOiAnL2VuZ2luZWVyJywgY29tcG9uZW50OiBFbmdpbmVlciwgbmFtZTogXCJFbmdpbmVlclwifSxcbiAgICB7IHBhdGg6ICcvZGVzaWducycsIGNvbXBvbmVudDogRGVzaWducywgbmFtZTogXCJEZXNpZ25zXCJ9LFxuICAgIHsgcGF0aDogJy9mYXNoaW9uLy4uLicsIGNvbXBvbmVudDogRmFzaGlvbiwgbmFtZTogXCJGYXNoaW9uXCJ9LFxuICAgIHsgcGF0aDogJy9ibG9nJywgY29tcG9uZW50OiBCbG9nLCBuYW1lOiBcIkJsb2dcIn0sXG4gICAgeyBwYXRoOiAnLyoqJywgcmVkaXJlY3RUbzogWydIb21lJ10gfVxuXSlcblxuY2xhc3MgQXBwIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0ICgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHAtbG9hZGluZy1tYXNrXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbn1cblxuXG5cblxuYm9vdHN0cmFwKEFwcCwgW01vYmlsZVNlcnZpY2UsIC4uLlJPVVRFUl9QUk9WSURFUlMsIHByb3ZpZGUoTG9jYXRpb25TdHJhdGVneSwge3VzZUNsYXNzOiBQYXRoTG9jYXRpb25TdHJhdGVneX0pXSk7XG4iXX0=