import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
@Component ({
    selector : 'bar',
    directives: [ROUTER_DIRECTIVES],
    template : `
        <div class="container">
            <div [ngClass]="{'logo': i==0, 'icon': i!=0,
                             'active': router.isRouteActive(router.generate([item.name])) }"
            *ngFor="#item of items; #i = index"
            [routerLink]="[item.name]">
                <img src={{item.icon}}>
                <p *ngIf="i != 0">{{item.display}}</p>
            </div>
        </div>
    `
})

export class Bar {
    items : Object[];
    constructor (private router : Router) {
        this.items = [
            {
                name : "Home",
                display : "Brian Lee",
                path : "/home",
                icon : "icons/brian-icon.png"
            },
            {
                name : "Adventures",
                display : "Adventures",
                path : "/adventures",
                icon : ""
            },
            {
                name : "Blog",
                display : "B Log",
                path : "/blog",
                icon : ""
            },
            {
                name : "Projects",
                display : "Projects",
                path : "/projects",
                icon : ""
            },

        ];
    }
}
