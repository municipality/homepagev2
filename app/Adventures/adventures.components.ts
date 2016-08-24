import {Component} from 'angular2/core';
import {ActivatedRoute} from 'angular2/router';

@Component ({
    selector : 'presentation-header',
    template : `
        <div class="presentation-header">
            <p>< Back</p>
        </div>
    `
})

export class PresentationHeader {
    constructor () {

    }
}

@Component ({
    template: `
        <div>

        </div>
    `
})

export class SeasonDefault {
    constructor () {

    }
}

@Component ({
    template : `
        <div *ngFor="#item of images">

        </div>
    `,
    selector : `photogallery`,
})

export class PhotoGallery {
    images;
    foldername;
    constructor (route:ActivatedRoute) {

    }
}
