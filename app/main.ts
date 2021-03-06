import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide, Component, Injectable, AfterViewInit, NgModule} from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from '@angular/router-deprecated';
import {HTTP_BINDINGS, HTTP_PROVIDERS} from '@angular/http';


import {Bar} from './bar.component';
import {Home} from './home';
import {Engineer} from './engineer';
import {Designs} from './designs';
import {Blog} from './Blog/blog';
import {Fashion} from './Fashion/fashion';

import {MobileService} from './mobile.service';

import {Adventures} from './Adventures/adventures';


@Component ({
    selector : 'app',
    directives: [Bar, ROUTER_DIRECTIVES],
    template : `
        <bar></bar>
        <div class="body-container">
            <router-outlet></router-outlet>
        </div>
    `
})

@RouteConfig ([
    { path: '/home', component: Home, name: 'Home' },
    // { path: '/engineer', component: Engineer, name: "Engineer"},
    { path: '/projects', component: Designs, name: "Projects"},
    // { path: '/fashion/...', component: Fashion, name: "Fashion"},
    { path: '/adventures/...', component: Adventures, name: "Adventures"},
    { path: '/blog', component: Blog, name: "Blog"},
    { path: '/**', redirectTo: ['Home'] }
])

class App implements AfterViewInit {

    constructor () {
    }

    ngAfterViewInit () {
        document.getElementById("app-loading-mask").style.display = "none";
    }

}




bootstrap(App, [HTTP_PROVIDERS, HTTP_BINDINGS, MobileService, ...ROUTER_PROVIDERS]);
