import {Component, AfterViewInit, ViewChild} from 'angular2/core';

import {MobileService} from './mobile.service';

@Component({
    selector : 'intro',
    template : `
        <div class="intro-container">
            <div #image class="intro-image-container" style="background-image: url('images/brian-blurred.jpg');">
                <img (load)="introImageLoaded(image)" src='images/brian-blurred.jpg' style="display:none;">
            </div>
            <div class="intro-icon-container">
                <img class="intro-icon" src="images/brian-icon-2.png">
            </div>
            <div class="titles-container">
                <div class="titles">
                    <h2 class="blue">Software Engineer</h2>
                    <h2 class="white">Designer</h2>
                    <h2 class="blue">Dreamer</h2>
                </div>
            </div>
        </div>
    `
})

export class Intro implements AfterViewInit {
    introImage;
    loaded = false;

    introContainer;

    introImage1;
    @ViewChild('image') s;

    constructor (private mobileService : MobileService) {

    }

    ngAfterViewInit () {
        debugger
    }

    introImageLoaded(image) {
        //Parallax implementation
        this.introImage1 = image;
        var me = this;
        if(image.style.bottom == "") {
            image.style.bottom = '0px';
        }
        var intro;
        if(intro == null) {
            intro = document.getElementsByClassName("intro-container")[0];
            this.introContainer = intro;
        }
        intro.style.height = window.innerHeight + "px";
        image.style.height = window.innerHeight + "px";
        if (this.mobileService.isDesktop()) {
            document.addEventListener("scroll", (e) => {

            });
        }

    }


}
