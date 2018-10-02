import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NinjaCustomComponentsModule } from 'NinjaCustomComponents/lib/ninja-custom-components.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NinjaCustomComponentsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
