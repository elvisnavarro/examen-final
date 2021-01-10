import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { IncioPageComponent } from './pages/incio-page/incio-page.component';
import { CursoContainerComponent } from './components/curso-container/curso-container.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [IncioPageComponent, CursoContainerComponent, InstructorComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule
  ]
})
export class InicioModule { }
