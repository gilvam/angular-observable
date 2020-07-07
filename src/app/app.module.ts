import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // modules material
    MaterialModule,

    // modules
    // component
    // directives
    // plugins
    // service
    // service REST API
  ],
  providers: [
    // modules
    // component
    // directives

    // service
    // service REST API
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
