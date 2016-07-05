import {Component, AfterViewInit, ViewChild} from 'angular2/core';


@Component ({
    template : `
        <div class="home fadeIn">
            <div class="icon-container">
                <img class="icon" src="images/brian-icon-2.png">
            </div>
            <div class="titles-container">
                <div class="titles">
                    <h1 class="blue">Software Engineer</h1>
                    <h1 class="white">Designer</h1>
                    <h1 class="blue">Dreamer</h1>
                </div>
            </div>
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
