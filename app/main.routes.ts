import {provideRouter, RouterConfig} from '@angular/router';
import {Bar} from './bar.component';
import {Home} from './home';
import {Engineer} from './engineer';
import {Designs} from './designs';
import {Blog} from './Blog/blog';
import {Fashion} from './Fashion/fashion';
import {Adventures} from './Adventures/adventures';


const routes : RouterConfig = [
    { path: 'home', component: Home },
    // { path: '/engineer', component: Engineer, name: "Engineer"},
    { path: 'projects', component: Designs},
    // { path: '/fashion/...', component: Fashion, name: "Fashion"},
    { path: 'adventures/...', component: Adventures},
    { path: 'blog', component: Blog},
    { path: '', redirectTo: '/home'}
];

export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];
