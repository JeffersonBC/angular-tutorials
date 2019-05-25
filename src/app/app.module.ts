import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { Angulartics2Module } from 'angulartics2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HomeTutorialsListComponent } from './home/home-tutorials-list/home-tutorials-list.component';

import { environment } from '../environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeTutorialsListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,

    Angulartics2Module.forRoot({
      developerMode: !environment.production,
    }),
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
