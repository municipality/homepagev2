import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, Router, RouteParams} from 'angular2/router';
import {Http} from 'angular2/http';

import FashionVars = require('./fashion.seasons');
import {Summer2016} from './summer2016';
import {Winter2017} from './winter2017';
import {SeasonDefault} from './fashion.components';


@Component ({
    directives: [ROUTER_DIRECTIVES],
    template : `
        <div class="fashion fadeIn">
            <div class="fashion-row">
            <div class="seasons-container">
            <div class="seasons"
            [ngClass]="{'split': !router.isRouteActive(router.generate(['SeasonDefault']))}">
                <div class="header">
                    <h4>Seasons</h4>
                </div>
                <div class="season" *ngFor="#season of seasons"
                [routerLink]="[season.path]"
                [ngClass]="{'active': router.isRouteActive(router.generate([season.path]))}">
                    <h3>{{season.name}}</h3>
                </div>
            </div>
            </div>
            <div class="styles-router-container">
                <router-outlet></router-outlet>
            </div>
            </div>
        </div>

    `
})

@RouteConfig([
    { path: '/', component: SeasonDefault, name: "SeasonDefault", useAsDefault: true},
    { path: '/Summer2016/...', component: Summer2016, name: "Summer2016"},
    { path: '/Winter2017/...', component: Winter2017, name: "Winter2017"},
    { path: '/**', redirectTo: ['SeasonDefault'] }
])

export class Fashion {

    seasons : Object[];

    selected : string;
    constructor (params : RouteParams, private router: Router) {
        this.seasons = FashionVars.seasons;
    }
}
