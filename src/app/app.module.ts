import { NgModule } from '@angular/core';

import * as FileSaver from 'file-saver';


import { NgxSplideModule } from 'ngx-splide';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminModule } from './modules/admin/admin.module';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { LoginInterceptor } from './services/login.interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    NgxSplideModule,
    AdminModule,
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
