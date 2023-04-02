import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app.routing';
import {HttpCacheService} from "./util-services/http-cache.service";
import {CacheInterceptor} from "./interceptrors/cache.interceptor";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [AppRoutingModule,BrowserModule,BrowserAnimationsModule, HttpClientModule,RouterModule,
    FormsModule,
    ReactiveFormsModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
