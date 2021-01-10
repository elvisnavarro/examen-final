import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { IncioPageComponent } from './pages/incio-page/incio-page.component';
import { CursoContainerComponent } from './components/curso-container/curso-container.component';
import { InstructorComponent } from './components/instructor/instructor.component';


@NgModule({
  declarations: [IncioPageComponent, CursoContainerComponent, InstructorComponent],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
