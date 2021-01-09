import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresarRoutingModule } from './ingresar-routing.module';
import { IngresarPageComponent } from './pages/ingresar-page/ingresar-page.component';


@NgModule({
  declarations: [IngresarPageComponent],
  imports: [
    CommonModule,
    IngresarRoutingModule
  ]
})
export class IngresarModule { }
