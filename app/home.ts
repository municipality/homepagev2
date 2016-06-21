import {Component, AfterViewInit, ViewChild} from 'angular2/core';


@Component ({
    template : `
        <div class="home fadeIn">
            <div #image class="image">
            </div>
            <!--<div class="intro-icon-container">
                <img class="intro-icon" src="images/brian-icon-2.png">
            </div>
            <div class="titles-container">
                <div class="titles">
                    <h2 class="blue">Software Engineer</h2>
                    <h2 class="white">Designer</h2>
                    <h2 class="blue">Dreamer</h2>
                </div>
            </div>-->
        </div>
    `
})

export class Home implements AfterViewInit {
    @ViewChild('image') image;

    constructor () {

    }

    ngAfterViewInit () {
        document.addEventListener('scroll', (e) => {
            setTimeout(() => {
                let scrollTop = window.pageYOffset;
                this.image.nativeElement.style["background-position"] = "0 " + (-scrollTop * .1) + "px";
            }, 1000/60);
        })
    }
}
