import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { MenuActionComponent } from './components/menu-action/menu-action.component';
import { SidenavStartComponent } from './components/sidenav-start/sidenav-start.component';
import { RouterModule } from '@angular/router';

/**
 * Módulo de componentes a serem compartilhados
 * por todos os outros módulos.
 */
@NgModule({
  declarations: [
    // components
    MenuActionComponent,
    SidenavStartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // modules
    MaterialModule,
    // plugins
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // modules
    MaterialModule,

    // component
    MenuActionComponent,
    SidenavStartComponent,

    // directives
    // plugins
  ],
  providers: [],
  entryComponents: [],
  bootstrap: []
})
export class CoreModule {
}
