import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router, RouteParams} from 'angular2/router';
import {Http} from 'angular2/http';

import FashionVars = require('./adventures.seasons');

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

export class Fall2016Cool {
    constructor () {

    }
}


@Component ({
    selector : 'events',
    template: `
        <div class="events-container">
        <div class="events">
            <div class="header">
                <h4>Adventure</h4>
            </div>
            <div class="event" *ngFor="#style of listItems"
            [routerLink]="[style.path]"
            [ngClass]="{'active': router.isRouteActive(router.generate([style.path]))}">
                <h3>{{style.display}}</h3>
            </div>
        </div>
        </div>
        <div class="presentation-router-container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', component: SeasonDefault, name: "Fall2016Default", useAsDefault: true},
    // { path: '/Cool', component: Winter2017Cool, name: 'Winter2017Cool'},
    { path: '/**', redirectTo: ['Fall2016Default']}
])
export class Fall2016 {
    season : string;
    listItems : string[];
    seasons;

    constructor (params : RouteParams, private router:Router) {
        this.seasons = FashionVars.seasonItems;
        this.season = "Fall2016";
        this.listItems = this.seasons[this.season];

    }
}
