import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent, FooterComponent, NavbarComponent } from './layouts';
import { HomeComponent, FormComponent } from './pages';
import { HomeService, FormService } from './pages';
import { ComponentsModule } from './components/components.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './security/httpconfig.interceptor';


import {NgxMaskModule} from 'ngx-mask-2';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

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
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [
    HomeService,
    FormService,
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
