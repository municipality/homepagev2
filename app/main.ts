import {bootstrap} from 'angular2/platform/browser';
import {provide, Component, Injectable, AfterViewInit} from 'angular2/core';
import {LocationStrategy, PathLocationStrategy, ROUTER_PROVIDERS} from 'angular2/router';
import {ROUTER_DIRECTIVES, RouteConfig, Router} from 'angular2/router';

import {Bar} from './bar.component';
import {Home} from './home';
import {Engineer} from './engineer';
import {Designs} from './designs';
import {Blog} from './Blog/blog';
import {Fashion} from './Fashion/fashion';

import {MobileService} from './mobile.service';


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
    { path: '/designs', component: Designs, name: "Designs"},
    { path: '/fashion/...', component: Fashion, name: "Fashion"},
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




bootstrap(App, [MobileService, ...ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: PathLocationStrategy})]);
