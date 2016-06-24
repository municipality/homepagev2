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
        <div>
            <p>Cool</p>
        </div>
    `
})

export class Winter2017Cool {
    constructor () {

    }
}


@Component ({
    template: `
        <div class="styles">
            <div class="header">
                <h4>Styles</h4>
            </div>
            <div class="style" *ngFor="#style of listItems"
            [routerLink]="[style.path]"
            [ngClass]="{'active': router.isRouteActive(router.generate([style.path]))}">
                <h3>{{style.display}}</h3>
            </div>
        </div>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', component: SeasonDefault, name: "Winter2017Default", useAsDefault: true},
    { path: '/Cool', component: Winter2017Cool, name: 'Winter2017Cool'},
    { path: '/**', redirectTo: ['Winter2017Default']}
])
export class Winter2017 {
    season : string;
    listItems : string[];
    seasons;

    constructor (params : RouteParams, private router:Router) {
        this.seasons = FashionVars.seasonItems;
        this.season = "Winter2017";
        this.listItems = this.seasons[this.season];

    }
}
