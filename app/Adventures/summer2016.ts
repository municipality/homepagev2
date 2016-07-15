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
            <!--<h1 class="header" align="center">Chillin</h1>-->

            <div class="santa-monica">
                <img class="santa-monica-img" src="images/santamonica.jpg">
            </div>
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
            <div class="event" *ngFor="#adventure of listItems"
            [routerLink]="[adventure.path]"
            [ngClass]="{'active': router.isRouteActive(router.generate([adventure.path]))}">
                <div class="event-name-container">
                    <h3>{{adventure.display}}</h3>
                    <!--<h5 *ngIf="adventure.dateEnd">{{adventure.dateStart}} - {{adventure.dateEnd}}</h5>
                    <h5 *ngIf="adventure.dateEnd == null">{{adventure.dateStart}}</h5>-->
                </div>
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
