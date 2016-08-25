import {Component} from '@angular/core';

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
        <div *ngFor="let item of images">

        </div>
    `,
    selector : `photogallery`,
})

export class PhotoGallery {
    images;
    foldername;
    constructor () {

    }
}
