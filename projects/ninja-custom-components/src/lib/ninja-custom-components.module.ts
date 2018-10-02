import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [DropdownComponent],
    exports: [DropdownComponent]
})
export class NinjaCustomComponentsModule { }
