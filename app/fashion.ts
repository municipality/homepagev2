import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router, RouteParams} from 'angular2/router';
import {Http} from 'angular2/http';

import FashionVars = require('./fashion.seasons');

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
        <div class="styles">
            <div class="header">
                <h4>Styles</h4>
            </div>
            <div class="style" *ngFor="#style of listItems">
                <h3>{{style.display}}</h3>
            </div>
        </div>
    `
})

export class SeasonTemplate {
    season : string;
    listItems : string[];
    seasons;

    constructor (params : RouteParams) {
        this.seasons = FashionVars.seasonItems;
        this.season = params.get('season');
        this.listItems = this.seasons[this.season];

    }
}

@Component ({
    directives: [ROUTER_DIRECTIVES],
    template : `
        <div class="fashion fadeIn">
            <div class="seasons">
                <div class="header">
                    <h4>Seasons</h4>
                </div>
                <div class="season" *ngFor="#season of seasons"
                [routerLink]="['SeasonTemplate', {season: season.path}]"
                [ngClass]="{'active': router.isRouteActive(router.generate(['SeasonTemplate', {season: season.path}]))}">
                    <h3>{{season.name}}</h3>
                </div>
            </div>
            <router-outlet></router-outlet>
        </div>
    `
})

@RouteConfig([
    { path: '/', component: SeasonDefault, name: "SeasonDefault", useAsDefault: true},
    { path: '/:season', component: SeasonTemplate, name: "SeasonTemplate"},
    { path: '/**', redirectTo: ['SeasonDefault'] }
])

export class Fashion {

    seasons : Object[];

    selected : string;
    constructor (params : RouteParams, private router: Router) {
        this.seasons = FashionVars.seasons;
    }
}
