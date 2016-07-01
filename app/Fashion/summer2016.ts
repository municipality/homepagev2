import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router, RouteParams} from 'angular2/router';
import {Http} from 'angular2/http';

import FashionVars = require('./fashion.seasons');
import {PresentationHeader} from './fashion.components';
import {SeasonDefault} from './fashion.components';

@Component ({
    selector : 'summer2016chillin',
    directives : [PresentationHeader],
    template: `
        <div class="presentation summer2016chillin">
            <presentation-header></presentation-header>
            <h1 class="header" align="center">Chillin</h1>

            <img src="brian-blurred.jpg">
        </div>
    `
})

export class Summer2016Chillin {
    constructor () {

    }
}


@Component ({
    selector : 'styles',
    template: `
        <div class="styles-container">
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
        </div>
        <div class="presentation-router-container">
            <router-outlet></router-outlet>
        </div>

    `,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', component: SeasonDefault, name: "SeasonDefault2", useAsDefault: true},
    { path: '/Chillin', component: Summer2016Chillin, name: 'Summer2016Chillin'},
    { path: '/**', redirectTo: ['SeasonDefault2']}
])
export class Summer2016 {
    season : string;
    listItems : string[];
    seasons;

    constructor (params : RouteParams, private router:Router) {
        this.seasons = FashionVars.seasonItems;
        this.season = "Summer2016";
        this.listItems = this.seasons[this.season];

    }
}
