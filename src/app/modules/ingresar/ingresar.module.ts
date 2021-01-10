import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresarRoutingModule } from './ingresar-routing.module';
import { IngresarPageComponent } from './pages/ingresar-page/ingresar-page.component';
import { IngresarFormComponent } from './components/ingresar-form/ingresar-form.component';


@NgModule({
  declarations: [IngresarPageComponent, IngresarFormComponent],
  imports: [
    CommonModule,
    IngresarRoutingModule
  ]
})
export class IngresarModule { }
