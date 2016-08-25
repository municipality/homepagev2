import {Component, AfterViewInit, ViewChild, ElementRef} from '@angular/core';

import {MobileService} from './mobile.service';
import {DesignsService} from './designs.service';
@Component ({
    providers: [DesignsService],
    template : `
        <div class="designs fadeIn">
            <div #image class="intro">

            </div>
            <div class="container">
                <h1 class="title" align="center">Projects</h1>
                <p class="description" align="center">Below are some of the projects I have developed.</p>


            </div>
            <div class="projects-container">
                <div class="projects-row">
                <div *ngFor="let project of projects" class="project">
                    <a href={{project.url}} target="_blank">
                        <img src="{{project.image}}">
                    </a>
                    <p align="center">{{project.title}}</p>
                </div>
                </div>
            </div>
        </div>

    `
})

export class Designs implements AfterViewInit {

    @ViewChild('image') image : ElementRef;

    projects : any[];
    constructor (private mobileService : MobileService, private designsService: DesignsService) {
        this.projects = this.designsService.getProjects();
    }

    ngAfterViewInit () {
        if(!this.mobileService.isIOS()) {
            document.addEventListener('scroll', (e) => {
                setTimeout(() => {
                    let scrollTop = window.pageYOffset;
                    this.image.nativeElement.style["background-position"] = "right " + (-scrollTop * .1) + "px";
                }, 1000/60);
            });
        }
    }
}
