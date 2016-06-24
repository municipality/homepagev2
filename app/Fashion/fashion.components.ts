import {Component} from 'angular2/core';

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
