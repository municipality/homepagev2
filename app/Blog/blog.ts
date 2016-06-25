import {Component} from 'angular2/core';
import {BlogService} from './blog.service';

@Component ({
    providers : [BlogService],
    template : `
        <div class="blog fadeIn">
            <h1 class="title" align="center">B Log</h1>
        </div>
        <div ngFor="#entry of entries">

        </div>
    `

})

export class Blog {
    entries : Object[];

    constructor (private blogService : BlogService) {
        //this.entries = this.blogService.getEntries();
    }
}
