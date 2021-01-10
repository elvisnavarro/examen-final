import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactenosRoutingModule } from './contactenos-routing.module';
import { ContactenosPageComponent } from './pages/contactenos-page/contactenos-page.component';
import { ContactenosFormComponent } from './components/contactenos-form/contactenos-form.component';


@NgModule({
  declarations: [ContactenosPageComponent, ContactenosFormComponent],
  imports: [
    CommonModule,
    ContactenosRoutingModule
  ]
})
export class ContactenosModule { }
