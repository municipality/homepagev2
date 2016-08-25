import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
@Component ({
    selector : 'bar',
    directives: [ROUTER_DIRECTIVES],
    template : `
        <div class="container" #container>
            <div [ngClass]="{'logo': i==0, 'icon': i!=0,
                             'active': router.isRouteActive(router.generate([item.name])) }"
            *ngFor="let item of items; #i = index"
            [routerLink]="[item.name]" (click)="click(item.name)">
                <img *ngIf="i==0" src={{item.icon}}>
                <div *ngIf="i!=0" class="icon-sym {{item.iconCls}}"></div>
                <p *ngIf="i != 0">{{item.display}}</p>

            </div>
        </div>
    `
})

export class Bar implements AfterViewInit {
    items : Object[];
    @ViewChild('container') container;
    constructor (private router : Router) {
        this.items = [
            {
                name : "Home",
                display : "Brian Lee",
                path : "/home",
                icon : "icons/brian-icon.png",
                iconCls: ''
            },
            {
                name : "Adventures",
                display : "Adventures",
                path : "/adventures",
                icon : "icons/adventure-icon.png",
                iconCls : 'icon-adventure'
            },
            {
                name : "Blog",
                display : "B Log",
                path : "/blog",
                icon : "icons/blog-icon.png",
                iconCls : 'icon-blog'
            },
            {
                name : "Projects",
                display : "Projects",
                path : "/projects",
                icon : "icons/projects-icon.png",
                iconCls : 'icon-github'
            },

        ];
    }

    ngAfterViewInit () {
        // var router = this.router;
        // if(router.isRouteActive(router.generate(["Adventures"]))) {
        //     this.container.nativeElement.style["background-color"] = "blue";
        // }
    }

    click (name) {
        // var router = this.router;
        // //if(router.isRouteActive(router.generate(["Adventures"]))) {
        // if(name == "Adventures") {
        //     this.container.nativeElement.style["background-color"] = "blue";
        // }
        // else {
        //     this.container.nativeElement.style["background-color"] = "";
        // }
    }
}
