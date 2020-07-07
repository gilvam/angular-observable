import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../_core/material.module';
import { AccountPjComponent } from './account/pj/account-pj.component';
import { AccountMeiComponent } from './account/mei/account-mei.component';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    // components
    HomeComponent,
    AccountMeiComponent,
    AccountPjComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,

    // modules material
    MaterialModule,
  ]
})
export class MainModule {
}
