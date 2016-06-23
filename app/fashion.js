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
    var SeasonDefault, SeasonTemplate, Fashion;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            SeasonDefault = (function () {
                function SeasonDefault() {
                }
                SeasonDefault = __decorate([
                    core_1.Component({
                        template: "\n        <div>\n\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], SeasonDefault);
                return SeasonDefault;
            }());
            exports_1("SeasonDefault", SeasonDefault);
            SeasonTemplate = (function () {
                function SeasonTemplate(params) {
                    this.season = params.get('season');
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], SeasonTemplate.prototype, "season", void 0);
                SeasonTemplate = __decorate([
                    core_1.Component({
                        template: "\n        <div>\n\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], SeasonTemplate);
                return SeasonTemplate;
            }());
            exports_1("SeasonTemplate", SeasonTemplate);
            Fashion = (function () {
                function Fashion(params, router) {
                    this.router = router;
                    this.seasons = [{
                            path: '2016Summer',
                            name: 'Summer 2016',
                        }];
                }
                Fashion = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n        <div class=\"fashion fadeIn\">\n            <div class=\"seasons\">\n                <div class=\"seasons-container\">\n                    <div class=\"header\">\n                        <h4>Seasons</h4>\n                    </div>\n                    <div class=\"season\" *ngFor=\"#season of seasons\"\n                    [routerLink]=\"[season.path, {season: season.path}]\"\n                    [ngClass]=\"{'active': router.isRouteActive(router.generate([season.path, {season: season.path}]))}\">\n                        <h3>{{season.name}}</h3>\n                    </div>\n                </div>\n            </div>\n            <router-outlet></router-outlet>\n        </div>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: SeasonDefault, name: "SeasonDefault", useAsDefault: true },
                        { path: '/:season', component: SeasonTemplate, name: "2016summer" },
                        { path: '/**', redirectTo: ['SeasonDefault'] }
                    ]), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.Router])
                ], Fashion);
                return Fashion;
            }());
            exports_1("Fashion", Fashion);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFzaGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhc2hpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFZQTtnQkFDSTtnQkFFQSxDQUFDO2dCQVhMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLHlDQUlUO3FCQUNKLENBQUM7O2lDQUFBO2dCQU1GLG9CQUFDO1lBQUQsQ0FBQyxBQUpELElBSUM7WUFKRCx5Q0FJQyxDQUFBO1lBVUQ7Z0JBR0ksd0JBQWEsTUFBb0I7b0JBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztnQkFKRDtvQkFBQyxZQUFLLEVBQUU7OzhEQUFBO2dCQVRaO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLHlDQUlUO3FCQUNKLENBQUM7O2tDQUFBO2dCQVFGLHFCQUFDO1lBQUQsQ0FBQyxBQU5ELElBTUM7WUFORCwyQ0FNQyxDQUFBO1lBNkJEO2dCQUtJLGlCQUFhLE1BQW9CLEVBQVUsTUFBYztvQkFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUM7NEJBQ1osSUFBSSxFQUFHLFlBQVk7NEJBQ25CLElBQUksRUFBRyxhQUFhO3lCQUN2QixDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFyQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixVQUFVLEVBQUUsQ0FBQywwQkFBaUIsQ0FBQzt3QkFDL0IsUUFBUSxFQUFHLGlzQkFnQlY7cUJBQ0osQ0FBQztvQkFFRCxvQkFBVyxDQUFDO3dCQUNULEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBQzt3QkFDakYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQzt3QkFDbEUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFO3FCQUNqRCxDQUFDOzsyQkFBQTtnQkFhRixjQUFDO1lBQUQsQ0FBQyxBQVhELElBV0M7WUFYRCw2QkFXQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnLCBSb3V0ZXIsIFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuQENvbXBvbmVudCAoe1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFNlYXNvbkRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cbn1cblxuQENvbXBvbmVudCAoe1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFNlYXNvblRlbXBsYXRlIHtcbiAgICBASW5wdXQoKSBzZWFzb24gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvciAocGFyYW1zIDogUm91dGVQYXJhbXMpIHtcbiAgICAgICAgdGhpcy5zZWFzb24gPSBwYXJhbXMuZ2V0KCdzZWFzb24nKTtcbiAgICB9XG59XG5cbkBDb21wb25lbnQgKHtcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmFzaGlvbiBmYWRlSW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb25zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXNvbnMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5TZWFzb25zPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb25cIiAqbmdGb3I9XCIjc2Vhc29uIG9mIHNlYXNvbnNcIlxuICAgICAgICAgICAgICAgICAgICBbcm91dGVyTGlua109XCJbc2Vhc29uLnBhdGgsIHtzZWFzb246IHNlYXNvbi5wYXRofV1cIlxuICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6IHJvdXRlci5pc1JvdXRlQWN0aXZlKHJvdXRlci5nZW5lcmF0ZShbc2Vhc29uLnBhdGgsIHtzZWFzb246IHNlYXNvbi5wYXRofV0pKX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57e3NlYXNvbi5uYW1lfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IFNlYXNvbkRlZmF1bHQsIG5hbWU6IFwiU2Vhc29uRGVmYXVsdFwiLCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuICAgIHsgcGF0aDogJy86c2Vhc29uJywgY29tcG9uZW50OiBTZWFzb25UZW1wbGF0ZSwgbmFtZTogXCIyMDE2c3VtbWVyXCJ9LFxuICAgIHsgcGF0aDogJy8qKicsIHJlZGlyZWN0VG86IFsnU2Vhc29uRGVmYXVsdCddIH1cbl0pXG5cbmV4cG9ydCBjbGFzcyBGYXNoaW9uIHtcblxuICAgIHNlYXNvbnMgOiBPYmplY3RbXTtcblxuICAgIHNlbGVjdGVkIDogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yIChwYXJhbXMgOiBSb3V0ZVBhcmFtcywgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLnNlYXNvbnMgPSBbe1xuICAgICAgICAgICAgcGF0aCA6ICcyMDE2U3VtbWVyJyxcbiAgICAgICAgICAgIG5hbWUgOiAnU3VtbWVyIDIwMTYnLFxuICAgICAgICB9XTtcbiAgICB9XG59XG4iXX0=