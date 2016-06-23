import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router, RouteParams} from 'angular2/router';
import {Http} from 'angular2/http';

@Component ({
    template: `
        <div>

        </div>
    `
})

export class SeasonDefault {
    constructor () {

    }
}

@Component ({
    template: `
        <div>

        </div>
    `
})

export class SeasonTemplate {
    @Input() season : string;

    constructor (params : RouteParams) {
        this.season = params.get('season');
    }
}

@Component ({
    directives: [ROUTER_DIRECTIVES],
    template : `
        <div class="fashion fadeIn">
            <div class="seasons">
                <div class="seasons-container">
                    <div class="header">
                        <h4>Seasons</h4>
                    </div>
                    <div class="season" *ngFor="#season of seasons"
                    [routerLink]="[season.path, {season: season.path}]"
                    [ngClass]="{'active': router.isRouteActive(router.generate([season.path, {season: season.path}]))}">
                        <h3>{{season.name}}</h3>
                    </div>
                </div>
            </div>
            <router-outlet></router-outlet>
        </div>
    `
})

@RouteConfig([
    { path: '/', component: SeasonDefault, name: "SeasonDefault", useAsDefault: true},
    { path: '/:season', component: SeasonTemplate, name: "2016summer"},
    { path: '/**', redirectTo: ['SeasonDefault'] }
])

export class Fashion {

    seasons : Object[];

    selected : string;
    constructor (params : RouteParams, private router: Router) {
        this.seasons = [{
            path : '2016Summer',
            name : 'Summer 2016',
        }];
    }
}
