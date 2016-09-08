System.register(['@angular/router', './home', './designs', './Blog/blog', './Adventures/adventures'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_1, designs_1, blog_1, adventures_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
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
            function (adventures_1_1) {
                adventures_1 = adventures_1_1;
            }],
        execute: function() {
            routes = [
                { path: 'home', component: home_1.Home },
                // { path: '/engineer', component: Engineer, name: "Engineer"},
                { path: 'projects', component: designs_1.Designs },
                // { path: '/fashion/...', component: Fashion, name: "Fashion"},
                { path: 'adventures/...', component: adventures_1.Adventures },
                { path: 'blog', component: blog_1.Blog },
                { path: '', redirectTo: '/home' }
            ];
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [router_1.provideRouter(routes)]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O1FBVU0sTUFBTSxFQVVDLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVYzQixNQUFNLEdBQWtCO2dCQUMxQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQUksRUFBRTtnQkFDakMsK0RBQStEO2dCQUMvRCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFPLEVBQUM7Z0JBQ3ZDLGdFQUFnRTtnQkFDaEUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLHVCQUFVLEVBQUM7Z0JBQ2hELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBSSxFQUFDO2dCQUNoQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQzthQUNuQyxDQUFDO1lBRVcsa0NBQUEsb0JBQW9CLEdBQUcsQ0FBQyxzQkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvdmlkZVJvdXRlciwgUm91dGVyQ29uZmlnfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtCYXJ9IGZyb20gJy4vYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge0hvbWV9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQge0VuZ2luZWVyfSBmcm9tICcuL2VuZ2luZWVyJztcbmltcG9ydCB7RGVzaWduc30gZnJvbSAnLi9kZXNpZ25zJztcbmltcG9ydCB7QmxvZ30gZnJvbSAnLi9CbG9nL2Jsb2cnO1xuaW1wb3J0IHtGYXNoaW9ufSBmcm9tICcuL0Zhc2hpb24vZmFzaGlvbic7XG5pbXBvcnQge0FkdmVudHVyZXN9IGZyb20gJy4vQWR2ZW50dXJlcy9hZHZlbnR1cmVzJztcblxuXG5jb25zdCByb3V0ZXMgOiBSb3V0ZXJDb25maWcgPSBbXG4gICAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZSB9LFxuICAgIC8vIHsgcGF0aDogJy9lbmdpbmVlcicsIGNvbXBvbmVudDogRW5naW5lZXIsIG5hbWU6IFwiRW5naW5lZXJcIn0sXG4gICAgeyBwYXRoOiAncHJvamVjdHMnLCBjb21wb25lbnQ6IERlc2lnbnN9LFxuICAgIC8vIHsgcGF0aDogJy9mYXNoaW9uLy4uLicsIGNvbXBvbmVudDogRmFzaGlvbiwgbmFtZTogXCJGYXNoaW9uXCJ9LFxuICAgIHsgcGF0aDogJ2FkdmVudHVyZXMvLi4uJywgY29tcG9uZW50OiBBZHZlbnR1cmVzfSxcbiAgICB7IHBhdGg6ICdibG9nJywgY29tcG9uZW50OiBCbG9nfSxcbiAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2hvbWUnfVxuXTtcblxuZXhwb3J0IGNvbnN0IEFQUF9ST1VURVJfUFJPVklERVJTID0gW3Byb3ZpZGVSb3V0ZXIocm91dGVzKV07XG4iXX0=