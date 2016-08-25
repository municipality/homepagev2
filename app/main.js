System.register(['@angular/platform-browser-dynamic', '@angular/core', '@angular/router-deprecated', '@angular/http', './bar.component', './home', './designs', './Blog/blog', './mobile.service', './Adventures/adventures'], function(exports_1, context_1) {
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
    var platform_browser_dynamic_1, core_1, router_deprecated_1, router_deprecated_2, http_1, bar_component_1, home_1, designs_1, blog_1, mobile_service_1, adventures_1;
    var App;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
                router_deprecated_2 = router_deprecated_1_1;
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
            function (mobile_service_1_1) {
                mobile_service_1 = mobile_service_1_1;
            },
            function (adventures_1_1) {
                adventures_1 = adventures_1_1;
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
                        directives: [bar_component_1.Bar, router_deprecated_2.ROUTER_DIRECTIVES],
                        template: "\n        <bar></bar>\n        <div class=\"body-container\">\n            <router-outlet></router-outlet>\n        </div>\n    "
                    }),
                    router_deprecated_2.RouteConfig([
                        { path: '/home', component: home_1.Home, name: 'Home' },
                        // { path: '/engineer', component: Engineer, name: "Engineer"},
                        { path: '/projects', component: designs_1.Designs, name: "Projects" },
                        // { path: '/fashion/...', component: Fashion, name: "Fashion"},
                        { path: '/adventures/...', component: adventures_1.Adventures, name: "Adventures" },
                        { path: '/blog', component: blog_1.Blog, name: "Blog" },
                        { path: '/**', redirectTo: ['Home'] }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            platform_browser_dynamic_1.bootstrap(App, [http_1.HTTP_PROVIDERS, http_1.HTTP_BINDINGS, mobile_service_1.MobileService].concat(router_deprecated_1.ROUTER_PROVIDERS));
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUNBO2dCQUVJO2dCQUNBLENBQUM7Z0JBRUQsNkJBQWUsR0FBZjtvQkFDSSxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3ZFLENBQUM7Z0JBNUJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLEtBQUs7d0JBQ2hCLFVBQVUsRUFBRSxDQUFDLG1CQUFHLEVBQUUscUNBQWlCLENBQUM7d0JBQ3BDLFFBQVEsRUFBRyxrSUFLVjtxQkFDSixDQUFDO29CQUVELCtCQUFXLENBQUU7d0JBQ1YsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTt3QkFDaEQsK0RBQStEO3dCQUMvRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQzt3QkFDMUQsZ0VBQWdFO3dCQUNoRSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsdUJBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDO3dCQUNyRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDO3dCQUMvQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUU7cUJBQ3hDLENBQUM7O3VCQUFBO2dCQVdGLFVBQUM7WUFBRCxDQUFDLEFBVEQsSUFTQztZQUtELG9DQUFTLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQWMsRUFBRSxvQkFBYSxFQUFFLDhCQUFhLFNBQUssb0NBQWdCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQge3Byb3ZpZGUsIENvbXBvbmVudCwgSW5qZWN0YWJsZSwgQWZ0ZXJWaWV3SW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcbmltcG9ydCB7SFRUUF9CSU5ESU5HUywgSFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQge0Jhcn0gZnJvbSAnLi9iYXIuY29tcG9uZW50JztcbmltcG9ydCB7SG9tZX0gZnJvbSAnLi9ob21lJztcbmltcG9ydCB7RW5naW5lZXJ9IGZyb20gJy4vZW5naW5lZXInO1xuaW1wb3J0IHtEZXNpZ25zfSBmcm9tICcuL2Rlc2lnbnMnO1xuaW1wb3J0IHtCbG9nfSBmcm9tICcuL0Jsb2cvYmxvZyc7XG5pbXBvcnQge0Zhc2hpb259IGZyb20gJy4vRmFzaGlvbi9mYXNoaW9uJztcblxuaW1wb3J0IHtNb2JpbGVTZXJ2aWNlfSBmcm9tICcuL21vYmlsZS5zZXJ2aWNlJztcblxuaW1wb3J0IHtBZHZlbnR1cmVzfSBmcm9tICcuL0FkdmVudHVyZXMvYWR2ZW50dXJlcyc7XG5cblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2FwcCcsXG4gICAgZGlyZWN0aXZlczogW0JhciwgUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8YmFyPjwvYmFyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuQFJvdXRlQ29uZmlnIChbXG4gICAgeyBwYXRoOiAnL2hvbWUnLCBjb21wb25lbnQ6IEhvbWUsIG5hbWU6ICdIb21lJyB9LFxuICAgIC8vIHsgcGF0aDogJy9lbmdpbmVlcicsIGNvbXBvbmVudDogRW5naW5lZXIsIG5hbWU6IFwiRW5naW5lZXJcIn0sXG4gICAgeyBwYXRoOiAnL3Byb2plY3RzJywgY29tcG9uZW50OiBEZXNpZ25zLCBuYW1lOiBcIlByb2plY3RzXCJ9LFxuICAgIC8vIHsgcGF0aDogJy9mYXNoaW9uLy4uLicsIGNvbXBvbmVudDogRmFzaGlvbiwgbmFtZTogXCJGYXNoaW9uXCJ9LFxuICAgIHsgcGF0aDogJy9hZHZlbnR1cmVzLy4uLicsIGNvbXBvbmVudDogQWR2ZW50dXJlcywgbmFtZTogXCJBZHZlbnR1cmVzXCJ9LFxuICAgIHsgcGF0aDogJy9ibG9nJywgY29tcG9uZW50OiBCbG9nLCBuYW1lOiBcIkJsb2dcIn0sXG4gICAgeyBwYXRoOiAnLyoqJywgcmVkaXJlY3RUbzogWydIb21lJ10gfVxuXSlcblxuY2xhc3MgQXBwIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0ICgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHAtbG9hZGluZy1tYXNrXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG5cbn1cblxuXG5cblxuYm9vdHN0cmFwKEFwcCwgW0hUVFBfUFJPVklERVJTLCBIVFRQX0JJTkRJTkdTLCBNb2JpbGVTZXJ2aWNlLCAuLi5ST1VURVJfUFJPVklERVJTXSk7XG4iXX0=