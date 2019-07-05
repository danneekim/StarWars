import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LukeSkyWalkerComponent } from './lukeskywalker/luke-skywalker.component'


@NgModule({
  declarations: [
    AppComponent,
    LukeSkyWalkerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
