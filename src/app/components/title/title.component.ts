import { Component, Input } from '@angular/core';


@Component({
    selector: 'vv-title',
    template: ` <div class="rel-info d-flex justify-content-between align-items-center">
                    <h1 class="rel-title">{{title}}</h1>
                    <span class="proc-name">{{procedure}}</span>
                </div>`
})

export class TitleComponent {
    @Input()
    title: String;
    
    @Input()
    procedure: String
}