import {Component, AfterViewInit, ViewChild, ElementRef} from 'angular2/core';

import {MobileService} from './mobile.service';

@Component ({
    template : `
        <div class="designs fadeIn">
            <div #image class="intro">

            </div>
            <div class="container">
                <h1 class="title" align="center">Designs</h1>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare rutrum sem, vitae malesuada tortor pellentesque sit amet. Sed pharetra nibh diam, non accumsan libero fringilla non. Sed nunc nulla, porta euismod efficitur ac, porta et dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec lacinia in sapien vel euismod. Donec rhoncus leo rutrum dictum laoreet. Sed a metus nec erat euismod porttitor vitae ac purus. Fusce fermentum odio nec metus fermentum, sed consectetur turpis efficitur.</p>
                
            </div>
        </div>

    `
})

export class Designs implements AfterViewInit {

    @ViewChild('image') image : ElementRef;

    constructor (private mobileService : MobileService) {

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
