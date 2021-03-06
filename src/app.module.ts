import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HMR } from './utils/hmr';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        routing
    ],
    declarations: [
        AppComponent, HelloComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule extends HMR {
  constructor(public appRef: ApplicationRef) {
      super(appRef);
  }
}
