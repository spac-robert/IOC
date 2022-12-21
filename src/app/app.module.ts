import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayComponent } from './play/play.component';
import { HomeComponent } from './home/home.component';
import { Lvl1Component } from './lvl1/lvl1.component';
import { Lvl2Component } from './lvl2/lvl2.component';
import { Lvl3Component } from './lvl3/lvl3.component';
import { Lvl4Component } from './lvl4/lvl4.component';
import { Lvl5Component } from './lvl5/lvl5.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    HomeComponent,
    Lvl1Component,
    Lvl2Component,
    Lvl3Component,
    Lvl4Component,
    Lvl5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
