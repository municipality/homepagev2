import {Component} from '@angular/core';
import {Router, RouteData} from '@angular/router-deprecated';
import {AdventureService} from './adventures.service';
import {DoCheck} from '@angular/core';

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
        <div *ngFor="let item of photos" class="photo" tabindex="0" (click)="handleClick(item)">
            <img src={{item.url}}>
        </div>
    `,
    selector : `photogallery`
})


export class PhotoGallery implements DoCheck{
    photos : any[];
    foldername : string;
    constructor (private adventureService:AdventureService, private data: RouteData) {
        //Workaround for getting router path
        this.foldername = data.data["album"];

        //Call service to call api to get photos
        this.adventureService.getPhotos(this.foldername).subscribe((response) => {

            this.photos = response.photoset.photo;
            this.getPhotoUrls();
        });
    }

    handleClick(item) {

    }


    ngDoCheck () {
        let url = document.location.pathname;
        var newPath = url.substring(url.lastIndexOf("/") + 1).toLowerCase();
        if(this.foldername !== newPath) {
            this.foldername = newPath;

            //Call service to call api to get photos
            this.adventureService.getPhotos(this.foldername).subscribe((response) => {

                this.photos = response.photoset.photo;
                this.getPhotoUrls();
            });
        }
    }

    //Set photos[i].url to image url
    getPhotoUrls() {
        this.photos.forEach((val, index, arr) => {
            arr[index]["url"] = this.buildUrl(val.farm, val.server, val.id, val.secret);
        });
        console.log(this.photos);
    }

    buildUrl(farm, server, id, secret) {
        return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    }
}
