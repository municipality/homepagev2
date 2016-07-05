System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', 'angular2/http', './bar.component', './home', './designs', './Blog/blog', './mobile.service', './Adventures/adventures'], function(exports_1, context_1) {
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
    var browser_1, core_1, router_1, router_2, http_1, bar_component_1, home_1, designs_1, blog_1, mobile_service_1, adventures_1;
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
                        directives: [bar_component_1.Bar, router_2.ROUTER_DIRECTIVES],
                        template: "\n        <bar></bar>\n        <div class=\"body-container\">\n            <router-outlet></router-outlet>\n        </div>\n    "
                    }),
                    router_2.RouteConfig([
                        { path: '/home', component: home_1.Home, name: 'Home' },
                        // { path: '/engineer', component: Engineer, name: "Engineer"},
                        { path: '/designs', component: designs_1.Designs, name: "Designs" },
                        // { path: '/fashion/...', component: Fashion, name: "Fashion"},
                        { path: '/adventures/...', component: adventures_1.Adventures, name: "Adventures" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBdUNBO2dCQUVJO2dCQUNBLENBQUM7Z0JBRUQsNkJBQWUsR0FBZjtvQkFDSSxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ3ZFLENBQUM7Z0JBNUJMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFHLEtBQUs7d0JBQ2hCLFVBQVUsRUFBRSxDQUFDLG1CQUFHLEVBQUUsMEJBQWlCLENBQUM7d0JBQ3BDLFFBQVEsRUFBRyxrSUFLVjtxQkFDSixDQUFDO29CQUVELG9CQUFXLENBQUU7d0JBQ1YsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTt3QkFDaEQsK0RBQStEO3dCQUMvRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQzt3QkFDeEQsZ0VBQWdFO3dCQUNoRSxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsdUJBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDO3dCQUNyRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDO3dCQUMvQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUU7cUJBQ3hDLENBQUM7O3VCQUFBO2dCQVdGLFVBQUM7WUFBRCxDQUFDLEFBVEQsSUFTQztZQUtELG1CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQWEsRUFBRSw4QkFBYSxTQUFLLHlCQUFnQixHQUFFLGNBQU8sQ0FBQyx5QkFBZ0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw2QkFBb0IsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtib290c3RyYXB9IGZyb20gJ2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXInO1xuaW1wb3J0IHtwcm92aWRlLCBDb21wb25lbnQsIEluamVjdGFibGUsIEFmdGVyVmlld0luaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtMb2NhdGlvblN0cmF0ZWd5LCBQYXRoTG9jYXRpb25TdHJhdGVneSwgUk9VVEVSX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnLCBSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0hUVFBfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuXG5pbXBvcnQge0Jhcn0gZnJvbSAnLi9iYXIuY29tcG9uZW50JztcbmltcG9ydCB7SG9tZX0gZnJvbSAnLi9ob21lJztcbmltcG9ydCB7RW5naW5lZXJ9IGZyb20gJy4vZW5naW5lZXInO1xuaW1wb3J0IHtEZXNpZ25zfSBmcm9tICcuL2Rlc2lnbnMnO1xuaW1wb3J0IHtCbG9nfSBmcm9tICcuL0Jsb2cvYmxvZyc7XG5pbXBvcnQge0Zhc2hpb259IGZyb20gJy4vRmFzaGlvbi9mYXNoaW9uJztcblxuaW1wb3J0IHtNb2JpbGVTZXJ2aWNlfSBmcm9tICcuL21vYmlsZS5zZXJ2aWNlJztcblxuaW1wb3J0IHtBZHZlbnR1cmVzfSBmcm9tICcuL0FkdmVudHVyZXMvYWR2ZW50dXJlcyc7XG5cblxuQENvbXBvbmVudCAoe1xuICAgIHNlbGVjdG9yIDogJ2FwcCcsXG4gICAgZGlyZWN0aXZlczogW0JhciwgUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8YmFyPjwvYmFyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuQFJvdXRlQ29uZmlnIChbXG4gICAgeyBwYXRoOiAnL2hvbWUnLCBjb21wb25lbnQ6IEhvbWUsIG5hbWU6ICdIb21lJyB9LFxuICAgIC8vIHsgcGF0aDogJy9lbmdpbmVlcicsIGNvbXBvbmVudDogRW5naW5lZXIsIG5hbWU6IFwiRW5naW5lZXJcIn0sXG4gICAgeyBwYXRoOiAnL2Rlc2lnbnMnLCBjb21wb25lbnQ6IERlc2lnbnMsIG5hbWU6IFwiRGVzaWduc1wifSxcbiAgICAvLyB7IHBhdGg6ICcvZmFzaGlvbi8uLi4nLCBjb21wb25lbnQ6IEZhc2hpb24sIG5hbWU6IFwiRmFzaGlvblwifSxcbiAgICB7IHBhdGg6ICcvYWR2ZW50dXJlcy8uLi4nLCBjb21wb25lbnQ6IEFkdmVudHVyZXMsIG5hbWU6IFwiQWR2ZW50dXJlc1wifSxcbiAgICB7IHBhdGg6ICcvYmxvZycsIGNvbXBvbmVudDogQmxvZywgbmFtZTogXCJCbG9nXCJ9LFxuICAgIHsgcGF0aDogJy8qKicsIHJlZGlyZWN0VG86IFsnSG9tZSddIH1cbl0pXG5cbmNsYXNzIEFwcCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCAoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwLWxvYWRpbmctbWFza1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG59XG5cblxuXG5cbmJvb3RzdHJhcChBcHAsIFtIVFRQX0JJTkRJTkdTLCBNb2JpbGVTZXJ2aWNlLCAuLi5ST1VURVJfUFJPVklERVJTLCBwcm92aWRlKExvY2F0aW9uU3RyYXRlZ3ksIHt1c2VDbGFzczogUGF0aExvY2F0aW9uU3RyYXRlZ3l9KV0pO1xuIl19