System.register(['angular2/core', 'angular2/router', './fashion.seasons'], function(exports_1, context_1) {
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
    var core_1, router_1, FashionVars;
    var SeasonDefault, SeasonTemplate, Fashion;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (FashionVars_1) {
                FashionVars = FashionVars_1;
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
                    this.seasons = FashionVars.seasonItems;
                    this.season = params.get('season');
                    this.listItems = this.seasons[this.season];
                }
                SeasonTemplate = __decorate([
                    core_1.Component({
                        template: "\n        <div class=\"styles\">\n            <div class=\"header\">\n                <h4>Styles</h4>\n            </div>\n            <div class=\"style\" *ngFor=\"#style of listItems\">\n                <h3>{{style.display}}</h3>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], SeasonTemplate);
                return SeasonTemplate;
            }());
            exports_1("SeasonTemplate", SeasonTemplate);
            Fashion = (function () {
                function Fashion(params, router) {
                    this.router = router;
                    this.seasons = FashionVars.seasons;
                }
                Fashion = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n        <div class=\"fashion fadeIn\">\n            <div class=\"seasons\">\n                <div class=\"header\">\n                    <h4>Seasons</h4>\n                </div>\n                <div class=\"season\" *ngFor=\"#season of seasons\"\n                [routerLink]=\"['SeasonTemplate', {season: season.path}]\"\n                [ngClass]=\"{'active': router.isRouteActive(router.generate(['SeasonTemplate', {season: season.path}]))}\">\n                    <h3>{{season.name}}</h3>\n                </div>\n            </div>\n            <router-outlet></router-outlet>\n        </div>\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/', component: SeasonDefault, name: "SeasonDefault", useAsDefault: true },
                        { path: '/:season', component: SeasonTemplate, name: "SeasonTemplate" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFzaGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhc2hpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFjQTtnQkFDSTtnQkFFQSxDQUFDO2dCQVhMO29CQUFDLGdCQUFTLENBQUU7d0JBQ1IsUUFBUSxFQUFFLHlDQUlUO3FCQUNKLENBQUM7O2lDQUFBO2dCQU1GLG9CQUFDO1lBQUQsQ0FBQyxBQUpELElBSUM7WUFKRCx5Q0FJQyxDQUFBO1lBZUQ7Z0JBS0ksd0JBQWEsTUFBb0I7b0JBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUUvQyxDQUFDO2dCQXZCTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRSxtUkFTVDtxQkFDSixDQUFDOztrQ0FBQTtnQkFhRixxQkFBQztZQUFELENBQUMsQUFYRCxJQVdDO1lBWEQsMkNBV0MsQ0FBQTtZQTJCRDtnQkFLSSxpQkFBYSxNQUFvQixFQUFVLE1BQWM7b0JBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtvQkFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO2dCQUN2QyxDQUFDO2dCQWhDTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3dCQUMvQixRQUFRLEVBQUcsZ21CQWNWO3FCQUNKLENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7d0JBQ2pGLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBQzt3QkFDdEUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFO3FCQUNqRCxDQUFDOzsyQkFBQTtnQkFVRixjQUFDO1lBQUQsQ0FBQyxBQVJELElBUUM7WUFSRCw2QkFRQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnLCBSb3V0ZXIsIFJvdXRlUGFyYW1zfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIdHRwfSBmcm9tICdhbmd1bGFyMi9odHRwJztcblxuaW1wb3J0IEZhc2hpb25WYXJzID0gcmVxdWlyZSgnLi9mYXNoaW9uLnNlYXNvbnMnKTtcblxuQENvbXBvbmVudCAoe1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFNlYXNvbkRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcblxuICAgIH1cbn1cblxuQENvbXBvbmVudCAoe1xuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdHlsZXNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aDQ+U3R5bGVzPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0eWxlXCIgKm5nRm9yPVwiI3N0eWxlIG9mIGxpc3RJdGVtc1wiPlxuICAgICAgICAgICAgICAgIDxoMz57e3N0eWxlLmRpc3BsYXl9fTwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcblxuZXhwb3J0IGNsYXNzIFNlYXNvblRlbXBsYXRlIHtcbiAgICBzZWFzb24gOiBzdHJpbmc7XG4gICAgbGlzdEl0ZW1zIDogc3RyaW5nW107XG4gICAgc2Vhc29ucztcblxuICAgIGNvbnN0cnVjdG9yIChwYXJhbXMgOiBSb3V0ZVBhcmFtcykge1xuICAgICAgICB0aGlzLnNlYXNvbnMgPSBGYXNoaW9uVmFycy5zZWFzb25JdGVtcztcbiAgICAgICAgdGhpcy5zZWFzb24gPSBwYXJhbXMuZ2V0KCdzZWFzb24nKTtcbiAgICAgICAgdGhpcy5saXN0SXRlbXMgPSB0aGlzLnNlYXNvbnNbdGhpcy5zZWFzb25dO1xuXG4gICAgfVxufVxuXG5AQ29tcG9uZW50ICh7XG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImZhc2hpb24gZmFkZUluXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Vhc29uc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg0PlNlYXNvbnM8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFzb25cIiAqbmdGb3I9XCIjc2Vhc29uIG9mIHNlYXNvbnNcIlxuICAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cIlsnU2Vhc29uVGVtcGxhdGUnLCB7c2Vhc29uOiBzZWFzb24ucGF0aH1dXCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2FjdGl2ZSc6IHJvdXRlci5pc1JvdXRlQWN0aXZlKHJvdXRlci5nZW5lcmF0ZShbJ1NlYXNvblRlbXBsYXRlJywge3NlYXNvbjogc2Vhc29uLnBhdGh9XSkpfVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+e3tzZWFzb24ubmFtZX19PC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IFNlYXNvbkRlZmF1bHQsIG5hbWU6IFwiU2Vhc29uRGVmYXVsdFwiLCB1c2VBc0RlZmF1bHQ6IHRydWV9LFxuICAgIHsgcGF0aDogJy86c2Vhc29uJywgY29tcG9uZW50OiBTZWFzb25UZW1wbGF0ZSwgbmFtZTogXCJTZWFzb25UZW1wbGF0ZVwifSxcbiAgICB7IHBhdGg6ICcvKionLCByZWRpcmVjdFRvOiBbJ1NlYXNvbkRlZmF1bHQnXSB9XG5dKVxuXG5leHBvcnQgY2xhc3MgRmFzaGlvbiB7XG5cbiAgICBzZWFzb25zIDogT2JqZWN0W107XG5cbiAgICBzZWxlY3RlZCA6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvciAocGFyYW1zIDogUm91dGVQYXJhbXMsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgdGhpcy5zZWFzb25zID0gRmFzaGlvblZhcnMuc2Vhc29ucztcbiAgICB9XG59XG4iXX0=