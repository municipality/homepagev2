import {Component, AfterViewInit} from 'angular2/core';
import {ScrollingService} from './scrolling.service';
import {MobileService} from './mobile.service';

@Component({
    selector : 'objectives',
    providers: [ScrollingService, MobileService],
    template : `
        <div class="outro-container">

            <div class="title">
                <h1 align="center" class="blue">Objectives</h1>
            </div>
            <div class="outro-panel first">

                <div class="outro-inner-panel right">
                    <div>
                        <h1>Influence</h1>
                        <p>Positively influence my surroundings and peers</p>
                    </div>
                </div>
            </div>
            <div class="outro-panel">
                <div class="outro-inner-panel left">
                    <div>
                        <h1>Connect</h1>
                        <p>Unite others through positive attitude and friendly vibes</p>
                    </div>
                </div>
            </div>
            <div class="outro-panel">
                <div class="outro-inner-panel right">
                    <div>
                        <h1>Inspire</h1>
                        <p>Be a role model amongst peers and inspire others</p>
                    </div>
                </div>
            </div>
            <div class="outro-panel">
                <div class="outro-inner-panel center">
                    <div>
                        <h1>Change the World</h1>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class Objectives implements AfterViewInit {
    outroImage;
    loaded = false;

    loadedCount = 0;
    imageCount = 3;
    container;
    outroImage1;
    outroImage2;
    moon;
    panels;
    constructor (private scrollingService : ScrollingService,
                 private mobileService : MobileService) {

    }

    ngAfterViewInit () {
        var panel;
        if (this.mobileService.isDesktop()) {

            document.addEventListener("scroll", (e) => {
                if(this.panels == null || this.panels.length == 0) {
                    this.panels = document.getElementsByClassName("outro-panel");
                    panel = this.panels[this.panels.length/2];
                }

                if (this.container == null) {
                    this.container = document.getElementsByClassName("outro-container")[0];
                    this.container.className += " desktop"
                }

                if (panel.getBoundingClientRect().top > 0) {
                    this.container.style["background-image"] = "url(images/outro1.jpg)";
                }
                else {
                    this.container.style["background-image"] = "url(images/outro2.jpg)";
                }

            });
        }

    }

}
