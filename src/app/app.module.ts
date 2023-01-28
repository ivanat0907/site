import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
