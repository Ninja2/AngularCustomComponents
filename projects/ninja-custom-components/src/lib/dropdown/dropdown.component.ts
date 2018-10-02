import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DropdownOption } from './dropdown-option';

@Component({
    selector: 'ncc-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

    @Input() title: string;
    @Input() options: DropdownOption[];

    // tslint:disable-next-line:no-output-on-prefix
    @Output() onChange: EventEmitter<any> = new EventEmitter();

    visible = false;

    constructor() { }

    ngOnInit() {
    }

    public onMouseClick($event: Event): void {
        this.toggle();
    }

    public onItemClick($event: Event, option: DropdownOption) {
        this.title = option.label;
        this.onChange.next(option.value);
        this.hide();
    }

    private toggle() {
        this.visible = !this.visible;
    }

    private show() {
        this.visible = true;
    }

    private hide() {
        this.visible = false;
    }
}
