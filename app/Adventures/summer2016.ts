import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router, RouteParams} from 'angular2/router';
import {Http} from 'angular2/http';

import AdventuresVars = require('./adventures.seasons');
import {PresentationHeader} from './adventures.components';
import {SeasonDefault} from './adventures.components';

@Component ({
    selector : 'summer2016losangeles',
    directives : [PresentationHeader],
    template: `
        <div class="presentation summer2016losangeles">
            <presentation-header></presentation-header>
            <h1 class="header" align="center">Chillin</h1>

            <img src="brian-blurred.jpg">
        </div>
    `
})

export class Summer2016LosAngeles {
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
    { path: '/', component: SeasonDefault, name: "SeasonDefault2", useAsDefault: true},
    { path: '/LosAngeles', component: Summer2016LosAngeles, name: 'Summer2016LosAngeles'},
    { path: '/**', redirectTo: ['SeasonDefault2']}
])
export class Summer2016 {
    season : string;
    listItems : string[];
    seasons;

    constructor (params : RouteParams, private router:Router) {
        this.seasons = AdventuresVars.seasonItems;
        this.season = "Summer2016";
        this.listItems = this.seasons[this.season];

    }
}
