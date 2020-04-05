import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent, FooterComponent, NavbarComponent } from './layouts';
import { HomeComponent, FormComponent } from './pages';
import { ComponentsModule } from './components/components.module';

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
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
