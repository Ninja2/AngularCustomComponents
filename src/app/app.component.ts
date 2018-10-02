import { Component, OnInit } from '@angular/core';
import { DropdownOption } from 'NinjaCustomComponents/lib/dropdown/dropdown-option';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'CustomComponents';

    options: DropdownOption[] = [
        { label: 'Test1', value: 'test1'},
        { label: 'Test2', value: 'test2'},
        { label: 'Test3', value: 'test3'}
    ];

    ngOnInit(): void {
    }
}
