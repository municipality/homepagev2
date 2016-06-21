import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component ({
    selector : 'bar',
    directives: [ROUTER_DIRECTIVES],
    template : `
        <div [ngClass]="{'logo': i==0, 'icon': i!=0}" *ngFor="#item of items; #i = index"
        [routerLink]="[item.name]">
            <img src={{item.icon}}>
            <p *ngIf="i != 0">{{item.display}}</p>
        </div>


    `
})

export class Bar {
    items : Object[];
    active;
    constructor () {
        this.items = [
            {
                name : "Home",
                display : "Brian Lee",
                path : "/home",
                icon : "icons/brian-icon.png"
            },
            {
                name : "Designs",
                display : "Designs",
                path : "/designs",
                icon : ""
            }
        ];
        this.active = 0;
    }
}
