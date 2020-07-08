import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/login/login.component';
import { CoreModule } from './views/_core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // modules
    CoreModule,

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
