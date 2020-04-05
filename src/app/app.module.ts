import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent, FooterComponent, NavbarComponent } from './layouts';
import { HomeComponent, FormComponent } from './pages';

@NgModule({
  declarations: [
    MainComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
