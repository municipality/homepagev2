import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {AdventureService} from './adventures.service';

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
        <div *ngFor="let item of photos" class="">

        </div>
    `,
    selector : `photogallery`
})


export class PhotoGallery {
    photos : any[];
    foldername : string;
    constructor (private adventureService:AdventureService) {
        //Workaround for getting router path
        let url = document.location.pathname;
        this.foldername = url.substring(url.lastIndexOf("/") + 1).toLowerCase();

        //Call service to call api to get photos
        this.adventureService.getPhotos(this.foldername).subscribe((response) => {
            this.photos = response;
        });
    }
}
