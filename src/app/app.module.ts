import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material.module';

import {AppComponent} from './app.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    AppComponent, LoginPageComponent, DashboardPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
