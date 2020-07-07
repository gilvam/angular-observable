import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AccountMeiComponent } from './account/mei/account-mei.component';
import { AccountPjComponent } from './account/pj/account-pj.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'account/mei', component: AccountMeiComponent, data: { title: 'conta MEI' } },
  { path: 'account/pj', component: AccountPjComponent, data: { title: 'conta PJ' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {

}
